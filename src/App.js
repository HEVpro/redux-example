import React from 'react';
import Header from '../src/components/Header'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import EditProduct from "./components/EditProduct";

// Redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header/>
                <div className={"w-full"}>
                    <Routes>
                        <Route path="/" element={<Products/>}/>
                        <Route
                            path="/products/new"
                            element={<NewProduct/>}
                        />
                        <Route
                            path="/products/edit/:id"
                            element={<EditProduct/>}
                        />
                    </Routes>
                </div>
            </Provider>
        </Router>
    );
}

export default App;
