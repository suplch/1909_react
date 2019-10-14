import React from 'react';
export class ProductDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            detail: undefined,
            loading: false,
            loaded: false,
        };
        console.log(props)
    }
    componentDidMount() {
        // this.props.match 返回路由匹配的参数
        const { params } = this.props.match;
        this.setState({loading: true});
        getProductDetail(params.id).then((result) => {
            if (result.data.status === 10000) {
                this.setState({
                    detail: result.data.product
                })
            }
        }).finally(() => {
            this.setState({loading: false, loaded: true});
        });
    }
    render() {
        const { params } = this.props.match;
        const {loading, loaded, detail} = this.state;
        let loadingEl;
        if (loading) {
            loadingEl = <div>加载中 请稍后... </div>
        }
        let detailEl;
        // 如果已经 加载了, 且 detail 有效 显示产品数据
        if (loaded && detail) {
            detailEl = (
                <div>
                    <h1>{detail.name}</h1>
                    <p>{detail.description}</p>
                </div>
            )
        }
        // 如果已经 加载了, 且 detail 无效 说明没有产品数据
        if (loaded && !detail) {
            detailEl = <div>数据未找到</div>
        }
        return (
            <div>
                产品详情 {params.id}
                {loadingEl}
                {detailEl}
            </div>
        )
    }
}

function getProductDetail(pid) {

    //return axios.get('/product_detail?pid=' + params.id);

    let plist = {
        '111': {id: '111', name: '电脑', price: 10000, description: '最新框 大内存 电脑'},
        '222': {id: '222', name: '鼠标', price: 99, description: '世界上最好的鼠标'},
    };

    return new Promise(function (resolve) {

        setTimeout(function () {

            let status = 10000;
            let product = plist[pid];
            if (!product) {
                status = 11001
            }

            resolve({
                data: {
                    status: status,
                    product: product
                }
            })
        }, 2000)
    });
}
