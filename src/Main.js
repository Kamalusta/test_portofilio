import React from "react";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./About";
import Connection from "./Connection";
import WorkExamples from "./WorkExamples";
export default function Main() {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/works" element={<WorkExamples />}></Route>
                <Route path="/connect" element={<Connection />}></Route>
            </Routes>
        </div>
    )

}