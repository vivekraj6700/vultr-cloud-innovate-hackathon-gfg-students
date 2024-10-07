import React from 'react';

const Header = () => {
    return (
        <>




            <nav className="navbar navbar-expand-lg navbar-red navbar-dark" style={{ position: "fixed" }}>
                <div className="wrapper">
                </div>
                <div className="container-fluid all-show">
                    <a className="navbar-brand" href="#" style={{ color: "#006600" }}>GreenVerge <i className="fa fa-codepen" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 menu align-center expanded text-center SMN_effect-44">
                            <li className="nav-item ">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-search" /></a>
                            </li>
                        </ul>
                        <div className="d-flex flex-column sim" style={{ color: "#fff" }}>
                            <span>Login</span>
                        </div>
                    </div>
                </div>
            </nav>


        </>


    );
}

export default Header;
