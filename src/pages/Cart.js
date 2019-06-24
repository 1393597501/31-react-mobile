import React,{Fragment,Component} from 'react';
import {connect} from "react-redux";
import { NavBar,Icon,SwipeAction, List,Checkbox} from 'antd-mobile';
import {withRouter} from 'react-router-dom';
const CheckboxItem = Checkbox.CheckboxItem;
class Cart extends Component {
    state = {  }
    render() { 
        console.log(this.props.carts);
        return ( 
             <Fragment>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>this.props.history.go(-1)}
                    >购物车
                </NavBar>  
                {/* 购物车开始 */}
                <div className="cart_content">
                    {
                        this.props.carts.map(v=>
                            <div key={v.id} className="cart_item">
                                   <List>
                                        <SwipeAction
                                            style={{ backgroundColor: 'gray' }}
                                            autoClose
                                            right={[
                                                {
                                                text: '取消',
                                                onPress: () => console.log('cancel'),
                                                style: { backgroundColor: '#ddd', color: 'white' },
                                                },
                                                {
                                                text: '删除',
                                                onPress: () => console.log('delete'),
                                                style: { backgroundColor: '#F4333C', color: 'white' },
                                                },
                                            ]}
                                            left={[
                                                {
                                                text: 'Reply',
                                                onPress: () => console.log('reply'),
                                                style: { backgroundColor: '#108ee9', color: 'white' },
                                                },
                                                {
                                                text: 'Cancel',
                                                onPress: () => console.log('cancel'),
                                                style: { backgroundColor: '#ddd', color: 'white' },
                                                },
                                            ]}
                                            onOpen={() => console.log('global open')}
                                            onClose={() => console.log('global close')}
                                            >
                                            <div className="cart_inner">
                                                    {/* 1复选框开始  */}
                                                    <div className="goods_chk_wrap">
                                                        <CheckboxItem>
                                                        </CheckboxItem>
                                                    </div>
                                                    {/* 1复选框结束  */}
                                                    {/* 2商品图片开始 */}
                                                    <div className="goods_img_wrap">
                                                        <img src={v.img_url} />
                                                    </div>
                                                    {/* 2商品图片结束 */}
                                                    {/* 3商品名称开始 */}
                                                    <div className="goods_name_wrap">
                                                        <div className="goods_title">{v.goods_name}</div>
                                                        <div className="goods_price">￥{v.price}</div>
                                                    </div>
                                                    {/* 3商品名称结束 */}
                                                    {/* 4商品数量开始 */}
                                                    <div className="goods_num_wrap">
                                                        <span className="iconfont icon-minus btn_add"></span>
                                                           {v.num}
                                                        <span className="iconfont icon-plus btn_substr"></span>
                                                    </div>
                                                    {/* 4商品数量结束 */}
                                                    
                                            </div>    
                                            </SwipeAction>
                                </List>
                            </div>
                        )    
                    }
                    <style jsx>
                            {`
                                .cart_content{
                                    .cart_item{
                                        .cart_inner{
                                            display: flex;
                                            .goods_chk_wrap{
                                                flex: 1;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                padding: 5px;
                                            }
                                            .goods_img_wrap{
                                                flex:2;
                                                padding: 5px;
                                                img{}
                                            }
                                            .goods_name_wrap{
                                                flex:3;
                                                padding-left: 5px;
                                                display: flex;
                                                flex-direction: column;
                                                justify-content: space-around;
                                                .goods_title{
                                                    font-size: 16px;
                                                }
                                                .goods_price{
                                                    font-size: 17px;
                                                    color: orangered;
                                                    font-weight: 600px;
                                                }
                                            }
                                            .goods_num_wrap{
                                                flex:3;
                                                display: flex;
                                                align-items: center;
                                                .btn_add{
                                                    font-size: 20px;
                                                    color: #666;
                                                }
                                                .btn_substr{
                                                    padding: 0 3px;
                                                }
                                            }
                                        }
                                    }
                                }
                            `}
                    </style>
                </div>    
                {/* 购物车 */}
             </Fragment>
         );
    }
}
 
const mapStateToProps = (state)=>{
    return{
       carts:state.cartReducer.cartList
    }
   
  }
  
  export default connect(mapStateToProps,null)(withRouter(Cart));
  