import React from 'react';
import { Button } from '../button';
import { openPage } from '../nav';
import "./hamburger-menu.css"

export const HamburgerMenu = ({isOpen, closeMenu}) => {
    return (
        // HTML goes here
        <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
            <div className="hamburger-menu-inner">
                <Button text="Home" buttonType="primary" to="/" onClick={closeMenu}></Button>
                <Button text="About" buttonType="primary" to="/about" onClick={closeMenu}></Button>
                <Button text="API" buttonType={'secondary'} onClick={openPage} param={`https://spoonacular.com/food-api/docs#Search-Recipes-Complex`}></Button>
            </div>
        </div>
    );

};