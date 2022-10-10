import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import {RestaurantContextProvider} from "./context/RestaurantContext";

const App = () => {
    return (
        <RestaurantContextProvider>
            <Home/>
        </RestaurantContextProvider>
    )
}

export default App;