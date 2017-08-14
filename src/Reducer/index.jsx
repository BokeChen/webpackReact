import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const defaultState = {
   mainText:"mainContainer",
   topicText:"topicContainer"

};

const reducer = (state = defaultState, action) => {     
    switch (action.type) {
        case 'AlterMain':
            return  Object.assign({},state,{ mainText:action.payload});
        case 'AlterTopic':
            return  Object.assign({},state,{ topicText:action.payload});
        default:
            return state;
    }
};
const RootReducer = combineReducers({
    routing:routerReducer,
    app:reducer
});
export default RootReducer;