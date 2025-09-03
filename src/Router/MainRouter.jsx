import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "../Views/Home/Home";
import Header from "../Layout/Header";

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};