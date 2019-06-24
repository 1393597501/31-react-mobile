import {CART_ADD} from "../actionTypes"

export const cart_add=(goodsobj)=>{
        return{
            type:CART_ADD,
            value:goodsobj
        };
}
