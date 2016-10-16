import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MyAwesomeReactComponent from './Components/MyAwesomeReactComponent';
import FirstComp, {DATA} from './Components/FirstComp';
import TodoApp from './Components/TodoApp';
import MarkdownEditor from './Components/MarkdownEditor';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MyAwesomeReactComponent />, document.getElementById('test'));
ReactDOM.render(<FirstComp profileData={DATA} />, document.getElementById('first'));
ReactDOM.render(<TodoApp />, document.getElementById('todo'));
ReactDOM.render(<MarkdownEditor />, document.getElementById('md'));
