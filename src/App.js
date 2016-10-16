import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';

const AppBarExampleIcon = () => (<AppBar title="Menu" iconClassNameRight="muidocs-icon-navigation-expand-more"/>);

class App extends Component {
    getChildContext() {
        return {muiTheme: getMuiTheme(baseTheme)};
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Hello Boom, Welcome to React</h2>
                    <Timer/>
                </div>
                <AppBarExampleIcon/>
            </div>
        );
    }
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired
};

export default App;
