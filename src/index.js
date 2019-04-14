import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(
    cartReducer,
    window.devToolsExtension && window.devToolsExtension()
    );
/*
    const updateAction={
        type:'UpdateCart',
       payload:{
           items:{itemname:'item001'}
       } 
    }

    store.dispatch(updateAction);
    */

    function render(){
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    }
    store.subscribe(render);
    render();

registerServiceWorker();
