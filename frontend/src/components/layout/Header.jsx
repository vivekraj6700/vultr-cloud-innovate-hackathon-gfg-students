import React from 'react';

const Header = () => {
    return (
        <>
            <div className="responsive-bar">
                <div className="logo">
                    <img src="http://www.mhf.org.au/media/zoo/images/yourlogohere_2cb8c31ab01096e7842d781ac311a776.png" alt="logo" />
                </div>
                <div className="menu">
                    <h4>Menu</h4>
                </div>
            </div>
            <nav>
                <div className="logo">
                    <img src="http://www.mhf.org.au/media/zoo/images/yourlogohere_2cb8c31ab01096e7842d781ac311a776.png" alt="logo" />
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>


        </>


    );
}

export default Header;
