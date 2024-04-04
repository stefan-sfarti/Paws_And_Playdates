import React from 'react';
import NavDrawer from "./NavDrawer.jsx";
import '../App.css';

const Header = React.memo(function Header() {
    return (
        <header>
            <h1>Paws and Playdates</h1>
            <nav>
                <NavDrawer />
            </nav>
        </header>
    );
});

export default Header;