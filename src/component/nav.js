import React from "react";
import { Button } from "./button";

const openPage = (link) => {
    window.open(link, "_blank");
}

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="center-wrapper">
                <h1>Recipe Generator</h1>
                <img className="logo" src="/Recipe_Generator_Logo.png"></img>
            </div>
            <div className="center-wrapper">
                <Button text="About" buttonType={'primary'}></Button>
                <Button text="API" buttonType={'secondary'} onClick={openPage} param={`https://spoonacular.com/food-api/docs#Search-Recipes-Complex`}></Button>
            </div>
        </nav>
    )
}