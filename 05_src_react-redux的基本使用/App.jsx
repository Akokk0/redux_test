import React, {Component} from 'react';
import store from "./redux/store.js";
import Count from "./containers/Count";
class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}></Count>
            </div>
        );
    }
}

export default App;
