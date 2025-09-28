import React from "react";
import { Button } from "./button";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Recipe Generator</h1>
            <div className="btn-wrapper">
                <Button text="About" primary={true}></Button>
                <Button text="API" primary={false}></Button>
            </div>
        </nav>
    )
}