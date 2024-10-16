import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (
        <>




            <nav className="navbar navbar-expand-lg navbar-red navbar-dark" style={{ position: "fixed" }}>
                <div className="wrapper">
                </div>
                <div className="container-fluid all-show">
                    <Link className="navbar-brand" to="/" style={{ color: "#006600" }}>
                        <img src='/images/logo-transparent-png.png' /><i className="fa fa-codepen" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0 menu align-center expanded text-center SMN_effect-44">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">contact</Link>
                            </li>

                        </ul>
                        <Dropdown>
                        <div className="  d-flex  sim" style={{ color: "#fff" }}>
                            
                            <Dropdown.Toggle variant="success" id="dropdown-basic">

                            <span><Link to={'/login'}>Login</Link></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><Link to={'/userDashboard'}>Dashboard</Link></Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </div>



                        </Dropdown>
                    </div>
                </div>
            </nav>


        </>


    );
}

export default Header;
