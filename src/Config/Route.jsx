import React from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Route,BrowserRouter as Router,HashRouter,Switch,Redirect}  from 'react-router-dom';

import MainComponent from '../../component/Main.jsx';
import Topic from '../../component/Topic.jsx';



const routes =[
    {
        path:'/',
        exact:true,
        component: MainComponent
    },
    {
        path:'/topic',
        exact:false,
        component:Topic
    },
];



const RouteConfig = (
    <Switch>
    {
      routes.map((route,index)=>(
                  <Route
                   key ={index}
                   path={route.path}
                   exact={route.exact}
                   component={route.component}                
                  />
                ))
    }
    
    </Switch>
);  

 

export default RouteConfig;
