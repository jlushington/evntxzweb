import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, cartReducer);

let store = createStore(
    persistedReducer,
    window.devToolsExtension && window.devToolsExtension()
    );

    let persistor = persistStore(store)
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
ReactDOM.render(<Provider store={store}><PersistGate loading={null} persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));
    }
    store.subscribe(render);
    render();

registerServiceWorker();
