import {CART_ADD} from "../actionTypes"
const defaultState = {
    cartList:[
        // {
        //     id:100,
        //     price:100,
        //     num:99,
        //     goods_name:"手机",
        //     img_url:"11",
        //     isChecked:false
        // },
        // {
        //     id:120,
        //     price:1001,
        //     num:19,
        //     goods_name:"手机2",
        //     img_url:"131",
        //     isChecked:false
        // }
    ]
}

export default (state=defaultState,action)=>{
    switch(action.type){
            case CART_ADD:{
                let newState = JSON.parse(JSON.stringify(state));
                let goodsobj = action.value;
                let index = newState.cartList.findIndex(v=>v.id===goodsobj.id);
                if(index===-1){
                    let newGoods={
                        id:goodsobj.id,
                        price:goodsobj.sell_price,
                        num:1,
                        goods_name:goodsobj.title,
                        img_url:goodsobj.img_url,
                        isChecked:true
                    }
                    newState.cartList.push(newGoods);
                }else{
                    newState.cartList[index].num++;
                }
                    return newState;
            }
    }
    return state;
}