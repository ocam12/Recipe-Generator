import React from "react";
import { useState } from "react"
import { Button } from "./button";
import { HamburgerMenu } from "./hamburger-menu/hamburger-menu";

export const openPage = (link) => {
    window.open(link, "_blank");
}

export const Navbar = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);


    const toggleHamburgerMenu = () => {
        setShowHamburgerMenu(!showHamburgerMenu);
    }

    return (
        <nav className="navbar">
            <div className="center-wrapper">
                <h1>Recipe Generator</h1>
                <img className="logo" src="/Recipe_Generator_Logo.png"></img>
            </div>
            <div className="center-wrapper navbar-btn-container">
                <Button text="Home" buttonType="primary" to="/"></Button>
                <Button text="About" buttonType="primary" to="/about"></Button>
                <Button text="API" buttonType={'secondary'} onClick={openPage} param={`https://spoonacular.com/food-api/docs#Search-Recipes-Complex`}></Button>
            </div>
            <button className="hamburger-button" onClick={toggleHamburgerMenu}>
                <img src="/hamburger_Icon.png" width={"40px"} height={"40px"}></img>
            </button>
            <HamburgerMenu isOpen={showHamburgerMenu} closeMenu={() => setShowHamburgerMenu(false)}></HamburgerMenu>
        </nav>
    )
}