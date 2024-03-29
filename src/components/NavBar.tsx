import { useState } from "react";
import { Navbar, Heading } from "react-bulma-components";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar>
            <Navbar.Brand>
                <BurgerMenu
                    isOpen={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </Navbar.Brand>
            <Navbar.Item renderAs="div">
                <Heading size={4}>ROCK PAPER SCISSORS</Heading>
            </Navbar.Item>
        </Navbar>
    );
}
