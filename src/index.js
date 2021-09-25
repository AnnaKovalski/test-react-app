import React from "react";
import ReactDom from "react-dom";

import App from "./App";

// const elem1 = <span>Hello</span>;
// const elem2 = <span>World</span>;

// // const element = React.createElement("div", {
// //   a: 5,
// //   b: 10,
// //   children: "Hello world!",
// // });

// const jsxElemnts = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElemnts);
// ReactDom.render(element, document.querySelector("#root"));

// =============================Example 2 ===========================

// const data = {
//   id: "id-1",
//   url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/features-2561511_1280.jpg",
//   title: "Features.Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulos",
//     url: "https://pixabay.com/users/ractapopulous-24766",
//   },
//   quantity: 10,
// };

// ReactDom.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     authorProfile={painting.author.url}
//     price={painting.price}
//   />,
//   document.querySelector("#root")
// );
ReactDom.render(<App />, document.querySelector("#root"));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
