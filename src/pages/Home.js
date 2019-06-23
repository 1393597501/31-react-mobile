import React,{Fragment,Component} from 'react';
import {getGoods,getGoodsGroup} from '../api'
import { Carousel} from 'antd-mobile';
class Home extends Component {
    state={
        sliderlist:[],
        toplist:[],
        goodsGroupList:[],
        imgHeight: 176,
    }
    componentDidMount(){
        getGoods()
        .then(res=>{
            this.setState({
                sliderlist:res.message.sliderlist,
                toplist:res.message.toplist     
            })
        });
        getGoodsGroup()
        .then(res=>{
                this.setState({goodsGroupList:res.message})
        })
    }
   
    render() { 
        return ( 
            <Fragment>
                {/*轮播图开始*/}
                    <Carousel
                        autoplay
                        infinite
                        >
                        {this.state.sliderlist.map(val => (
                            <a key={val.id} href="javascript:;" onClick={()=>this.props.history.push("/GoodsDetail/"+val.id)} style={{ display: 'inline-block',
                             width: '100%', height: this.state.imgHeight }}>
                            <img
                                src={val.img_url}
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
                {/*轮播图结束*/}     
                {/* 推荐商品开始 */}
                    <div className="recommend_goods">
                        <div className="recommend_goods_title">推荐商品</div>
                        <div className="recommend_goods_content">
                                {
                                    this.state.toplist.map(v=>
                                    <a href="javascript:;" key={v.id} className="recommend_goods_item">
                                        <div className="recommend_img_wrap"><img src={v.img_url} alt="飞利浦"/></div>
                                        <div className="recommend_goods_name">
                                            <p>{v.title}</p>
                                        </div>
                                    </a>)
                                } 
                        </div>
                    <style jsx>
                        {`
                           .recommend_goods_title{
                               padding: 10px;
                               margin-top: 0px;
                               font-size: 12px;
                               background: #f5f5f9;
                               color: #ccc;
                           } 
                           .recommend_goods_content{
                              .recommend_goods_item{
                                display: flex;
                                background-color: #ffffff;
                                border-bottom:1px solid#ccc;
                                .recommend_img_wrap{
                                    flex: 1;  
                                    img{}
                                    padding: 20px;
                                 }
                                 .recommend_goods_name{
                                    flex: 6;
                                    display: flex;
                                    align-items: center;
                                    font-size: 15px;
                                    overflow: hidden;
                                    p{
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        white-space: nowrap;
                                    }
                                 }
                              } 
                           }    
                        `}
                    </style>            
                    </div>              
                {/* 推荐商品结束 */}
                {/* 商品列表开始 */}
                    <div className="goods_group">
                           {
                               this.state.goodsGroupList.map(v1=>        
                                      <div className="goods_group_item" key={v1.level1cateid}>
                                        <div className="goods_group_title">{v1.catetitle}</div>
                                        <div className="goods_group_content">
                                            {
                                                v1.datas.map(v2=>
                                                  <a className="goods_item" href="javascrip:;" key={v2.artID}>
                                                      <img src={v2.img_url} alt=""/>
                                                      <div className="goods_title">{v2.artTitle}</div> 
                                                      <div className="goods_price">
                                                            <span className="sell_price">￥{v2.sell_price}</span>
                                                            <span className="market_price">{v2.market_price}</span>
                                                      </div> 
                                                      <div className="goods_num">
                                                            热卖中 <span className="stock_quantity">{v2.stock_quantity}</span>
                                                      </div>
                                                    
                                                  </a>  
                                                )
                                            }
                                        </div>
                                      </div>              
                                )
                           }  
                           <style jsx>
                                 {`
                                    .goods_group{
                                    .goods_group_item{
                                        .goods_group_title{
                                            background-color: #f5f5f9;
                                            font-size: 14px;
                                            padding: 10px;
                                            color: #666;
                                        }
                                        .goods_group_content{
                                            display: flex;
                                            flex-wrap: wrap;
                                        .goods_item{
                                            width: 50%;
                                            padding: 10px;
                                        img{}
                                        .goods_title{
                                            font-size: 15px;
                                            display: -webkit-box;
                                            text-overflow: ellipsis;
                                            white-space: normal!important;
                                            word-wrap: break-word;
                                            overflow: hidden;
                                            -webkit-line-clamp:2;
                                            -webkit-box-orient: vertical;
                                        }
                                        .goods_price{
                                            margin: 6px;
                                            display: flex;
                                            justify-content: space-between;
                                            .sell_price{
                                                    color: orangered;
                                                    font-size: 15px;
                                            }
                                            .market_price{
                                                font-size: 13px;
                                                color: #666;
                                                text-decoration: line-through;
                                            }
                                        }
                                        .goods_num{
                                            .stock_quantity{}
                                        }
                                        }
                                        }
                                    }
                                }
                                
                                 `}
                           </style>
                    </div>        
                {/* 商品列表结束 */}
            </Fragment>
         );
    }
}
 
export default Home;