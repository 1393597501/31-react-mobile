import React,{Fragment} from 'react';
import '../src/styles/App.css';
import MyLayout from './components/MyLayout';


class App extends React.Component {
      render(){
        return(
            <Fragment>
              <MyLayout />
            </Fragment>
        )
      }
}

export default App;
