import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="nav">
                <a href="">
                    <img src="https://assets.stickpng.com/thumbs/584a9b47b080d7616d298778.png" alt=""/>Real Madrid
                </a>
                <div className="mainmenu">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Players</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <h1>Real Madrid C.F. Football Club</h1>
        </div>
    );
};

export default Header;