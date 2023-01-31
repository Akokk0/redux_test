import React, {Component} from 'react';
import Count from "./containers/Count";
import Person from "./containers/Person/index.jsx";
class App extends Component {
    render() {
        return (
            <div>
                <Count />
                <hr/>
                <Person />
            </div>
        );
    }
}

export default App;
