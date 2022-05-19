import React from 'react';
//Bring reactDom in to mount component to the dom
import reactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));

//change to jsx once babel is set up
const App = () => {
  return <h1>Hello World</h1>;
};

//render our app to the dom mounted to the element with id of root inside
//our public/index.html file
root.render(<App/>);
// reactDOM.render(App, document.getElementById("root"));