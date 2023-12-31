import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import G from "./G";
import { store } from "./store";
 

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 <Provider store={store}>
   <G/>
 </Provider>
  </>
)