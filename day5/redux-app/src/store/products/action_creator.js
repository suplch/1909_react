import {genId} from "../../utils";
// 导出异步处理 action creator
export function addProductServer() {
    return function (dispatch, getState) {
        return submitProduct(prompt('请输入产品名称'))
            .then(function (result) {

            alert('ok')
            if (result.data.status === 'ok') {
                //dispatch({type: 'ADD_PRODUCT_OBJ', product: result.data.product});
                dispatch(addProductObj(result.data.product))
            }
            return callServer()
        }).then(function (result) {
            alert('成功');
        }).catch(console.error);
    }
}
// 导出同步处理 action creator
export function addProductObj(product) {
    return {type: 'ADD_PRODUCT_OBJ', product}
}
// 导出同步处理 action creator
export function addProduct(productName) {
    return {type: 'ADD_PRODUCT', productName}
}

export function addProductCart(product) {
    return {type: 'ADD_PRODUCT_CART', product: product}
}


function submitProduct(productName) {
    return new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve({
                data: {
                    status: 'ok',
                    product: {
                        id: genId(),
                        name: productName,
                        price: 99
                    }
                }
            })
        }, 2000)

    });
}

function callServer() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                data: {
                    status: 'ok'
                }
            })
        }, 1000)
    });
}
