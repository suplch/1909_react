import React, {Component} from 'react';

import {Table, Divider, Tag, Form} from 'antd';

import {connect} from "react-redux";

class GoodsSearch extends Component {

    state = {
    };

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {

        const columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <a>{text}</a>,
            },
            {
                title: '价格',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: '分类',
                dataIndex: 'category',
                key: 'category',
            },

        ];


        return (
            <div style={{border: 'solid 5px red'}}>
                商品查询
                <Table columns={columns} dataSource={this.props.products} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products: state.getIn(['product', 'products']).toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsSearch);




