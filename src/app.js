/*
require('./css/css');
require('./less/less.less');
require('./scss/scss.scss');
var app=document.createElement("div");
app.innerHTML='<h1>Hello World!</h1>';
document.body.insertBefore(app,document.body.childNodes[0]);
*/
//下面的是react的代码
import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Route,BrowserRouter,HashRouter as Router, Swith,Redirect} from 'react-router-dom';
import RouteConfig from '../src/Config/Route.jsx';
import {Provider} from 'react-redux';
import store from '../src/Config/Store.jsx';


var div=document.createElement("div");
div.setAttribute("id","root");
document.body.insertBefore(div,document.body.childNodes[0]);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {RouteConfig}
        </Router>
    </Provider>
    ,document.getElementById('root'));

