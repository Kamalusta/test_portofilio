import React from "react";
import About from "./About";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
export default function Menu({ state, setState }) {
    if (!state) {
        return null;
    }
    return (
        <div className='leftside' >
            <ul>
                <li onClick={setState}><Link to="/about">About</Link></li>
                <li onClick={setState}><Link to="/works">Work Examples</Link></li>
                <li onClick={setState}><Link to="/connect">Connection</Link></li>
            </ul>
        </div>

    )
}