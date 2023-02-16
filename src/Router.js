import React from "react";
import {Route, Switch , Redirect, BrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import SinglePhone from "./SinglePhone";
import Cart from "./Cart";
import SearchPage from "./SearchPage";
import { SearchPage2 } from "./SearchPage2";
const Router=()=>{
    return(
        <BrowserRouter>
        <Switch>
       <Route path='/' exact>
          <Redirect to='/MainPage'/>
        </Route>

        <Route path='/MainPage' exact><MainPage/></Route>
        <Route path='/Cart/:cartItems' exact><Cart/></Route>
        <Route path='/SinglePhone/:id' exact><SinglePhone></SinglePhone></Route>
        <Route path='/SearchPage/:productName' exact><SearchPage></SearchPage></Route>
        <Route path='/SearchPage2/:productName'exact><SearchPage2/></Route>
        </Switch>
        </BrowserRouter>
    );
}
export default Router;