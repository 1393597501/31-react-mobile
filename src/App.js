import React,{Fragment} from 'react';
import '../src/styles/App.css';
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Mine from "./pages/Mine"
import MyLayout from './components/MyLayout';
import GoodsDetail from './pages/GoodsDetail';
import {HashRouter as Router, Route} from 'react-router-dom';


class App extends React.Component {
      render(){
        return(
            <Fragment>
                <Router>
                    <Route path="/" exact render={(props)=><MyLayout {...props}><Home {...props}/></MyLayout>} />
                    <Route path="/Cart" render={(props)=><MyLayout {...props}><Cart/></MyLayout>} />
                    <Route path="/Mine" render={(props)=><MyLayout {...props}><Mine/></MyLayout>} />
                    <Route path="/GoodsDetail/:id" component={GoodsDetail}/>
                </Router>
            </Fragment>
        )
      }
}

export default App;
