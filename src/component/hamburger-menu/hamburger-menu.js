import { Button } from '../button';
import { openPage } from '../nav';
import "./hamburger-menu.css"

//Hamburger menu that holds the 3 menu/header buttons that link to internal/external pages
export const HamburgerMenu = ({isOpen, closeMenu}) => {
    return (
        //HTML goes here
        <div className={`hamburger-menu ${isOpen ? "open" : ""}`}> {/*if isOpen is true then sets the .open attribute which opens the menu via css*/}
            <div className="hamburger-menu-inner">
                <Button text="Home" buttonType="primary" to="/" onClick={closeMenu}></Button>
                <Button text="About" buttonType="primary" to="/about" onClick={closeMenu}></Button>
                <Button text="API" buttonType={'secondary'} onClick={openPage} param={`https://spoonacular.com/food-api/docs#Search-Recipes-Complex`}></Button>
            </div>
        </div>
    );

};