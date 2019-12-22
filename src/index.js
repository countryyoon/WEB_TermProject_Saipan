import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export { default as Reservation } from './Reservation';
export { default as About_Activity } from './About_Activity';
export { default as Home } from './Home';
export { default as Notice } from './Notice';
export { default as Post } from './Post';

ReactDOM.render(<App />, document.getElementById('root'));

// const mongoose = require('mongoose');

// const {MONGO_ID, MONGO_PASSWORD, NODE_ENV} = process.env;
// const MONGO_URL = 'mongodb://${MONGO_ID}:${MONGO_PASSWORD}@localhost:27017/admin';

// module.exports = () => {
//     const connect = () => {
//         if(NODE_ENV !== 'production'){
//             mongoose.set('debug', true);
//         }
//         mongoose.connect(MONGO_URL, {
//             dbName: 'reactdb',
//         }, (error) => {
//             if(error){
//                 console.log('몽고디비 연결 에러', error);
//             }else{
//                 console.log('몽고디비 연결 성공');
//             }
//         });
//     };
//     connect();

//     mongoose.connection.on('error',(error)=>{
//         console.log('몽고디비 연결 에러', error);
//     });
//     mongoose.connection.on('disconnected', ()=> {
//         console.error('몽고디비 연결이 끊겼습니다. 연결을 제시도 합니다.');
//         connect();
//     });
//     require('./user');
// };



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
