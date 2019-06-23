import React,{Fragment,Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {getGoodsInfo} from '../api'
import { Carousel } from 'antd-mobile';
class GoodsDetail extends Component {
    state = { 
        imglist:[],
        imgHeight: 176,
        goodsinfo:{}
     }
    componentDidMount(){
        const {id} = this.props.match.params;
        getGoodsInfo(id)
        .then(res=>{
            if(res.status===0){
                this.setState({
                    imglist:res.message.imglist,
                    goodsinfo:res.message.goodsinfo
                })
            }
          
        })
    }
    render() { 
        return (  
            <Fragment>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>this.props.history.go(-1)}
                    >商品列表
                </NavBar>   
                    {/* 轮播图开始 */}
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.imglist.map(val => (
                            <a
                            key={val.id}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={val.thumb_path}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                    {/* 轮播图结束 */}
                    {/* 商品详情开始 */}
                    <div className="goods_info">
                        <div className="goods_titile">{this.state.goodsinfo.title}</div>
                        <div className="goods_price">
                            <span className="sell_price">￥{this.state.goodsinfo.sell_price}</span>
                            <span className="market_price">￥{this.state.goodsinfo.market_price}</span>
                        </div>
                        <div className="goods_detail">
                             <div className="goods_detail_titile">商品参数</div>
                             <div className="goods_detail_content">
                                 <div className="goods_no">商品编号:{this.state.goodsinfo.goods_no}</div>
                                 <div className="stock_quantity">库存:{this.state.goodsinfo.stock_quantity}</div>
                             </div>
                             <div className="add_time">上架时间:{this.state.goodsinfo.add_time}</div>
                        </div>
                    <div className="goods_product" dangerouslySetInnerHTML={{__html:this.state.goodsinfo.content}}></div>    
                    <style jsx>
                        {`
                           .goods_info{
                              .goods_titile{
                                padding: 10px;
                                background: #ffffff;
                              } 
                              .goods_price{
                                  display: flex;
                                  justify-content: space-between;
                                  padding: 5px 0;
                                  color: #666;
                                  font-size: 15px;
                                  .sell_price{
                                    font-size: 15px;
                                    color: red; 
                                  }
                                  .market_price{
                                      color: #ccc;
                                      text-decoration: line-through;
                                  }
                              }
                              .goods_detail{
                                  .goods_detail_titile{
                                    padding: 5px 0;
                                    font-size: 16px;
                                    font-weight: 600; 
                                  }
                              }
                              .goods_detail_content{
                                  .goods_no{
                                    padding: 5px 0;
                                  }
                                  .stock_quantity{
                                    padding: 5px 0;
                                  }
                              }
                              .add_time{
                                padding: 5px 0;
                              }
                              .goods_product{
                                  img{
                                      height: auto;
                                      max-width: 100%;
                                  }
                              }
                           }     
                        `}
                    </style>    
                    </div>                 
                    {/* 商品详情结束 */}
                    {/* 底部工具栏开始 */}
                    <div className="btm_tool">
                        <div className="btm-item btm_cantact">
                            <span className="iconfont icon-kefu"></span>
                            <p>客服</p>
                        </div>
                        <div className="btm-item btm_cart">
                            <span className="iconfont icon-gouwuche"></span>
                            <p>购物车</p>
                            <div className="badge">2</div>
                        </div>
                        <div className="btm-item btm_cart_add">
                            加入购物车
                        </div>
                        <div className="btm-item btm_buy">
                            立即购买
                        </div>
                        <style jsx>
                            {`
                            .btm_tool{
                                display: flex;
                                height: 40px;
                                width: 100%;
                                position: fixed;
                                bottom: 0;
                                left: 0;
                                background-color: #ffffff;
                                .btm-item{
                                    flex: 1;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    flex-direction: column;
                                    font-size: 16px;
                                    color: #fff;
                                    background-color:orange;
                                    p{
                                        margin: 0px;
                                    }
                                }
                                .btm_cart{
                                    position: relative;
                                   .badge{
                                       background-color: orangered;
                                       font-size: 12px;
                                       color: #fff;
                                       padding:2px 5px;
                                       left: 56%;
                                       top: 0;
                                       border-radius: 50%;
                                       position: absolute;
                                   }
                                }
                                .btm_cart_add{
                                    flex: 2;
                                    background-color: orange;
                                }
                                .btm_buy{
                                    flex: 2;
                                    background-color: orangered;
                                }
                            }
                            `}
                        </style>
                    </div>
                    {/* 底部工具栏结束 */}
            </Fragment>

        );
    }
}
 
export default GoodsDetail;