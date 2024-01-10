import React from "react";
import Category from "./Category";
import SubCategory from "./SubCategory";
import Prodcuts from "./Products";
import { BrowserRouter as Router, Routes, Route ,Link } from "react-router-dom";
function App(){
    return(
        <>
        
       
       
        <Router>
            <Link to="Category">Category</Link><br/>
            <Link to="SubCategory">SubCategory</Link><br/>
            <Link to="Products">Products</Link>
            <Routes>
                <Route path="/Category" element={<Category/>} />
                <Route path="/SubCategory" element={<SubCategory/>} />
                <Route path="/Products" element={ <Prodcuts/>} />
            </Routes>
        </Router>
        
        </>
    )
}
export default App