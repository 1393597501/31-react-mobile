import React,{Fragment,Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';

class GoodsDetail extends Component {
    state = {  }
    render() { 
        return (  
            <Fragment>
               <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>this.props.history.go(-1)}
                    
                    >商品列表</NavBar>      
            </Fragment>

        );
    }
}
 
export default GoodsDetail;