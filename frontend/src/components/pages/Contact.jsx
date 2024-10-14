import React from 'react';
import Layout from '../layout/Layout';
import "../style/Contact.css"

const Contact = () => {
    return (
        <>
            <Layout title={"CONTACT US"}>
                <div className="container">
                    <span className="big-circle" />
                    <img src="img/shape.png" className="square" alt="" />
                    <div className="form">
                        <div className="contact-info">
                            <h3 className="title">Let's get in touch</h3>
                            <p className="text">
                                For inquiries, support, or feedback, please reach out to us. Our dedicated team is here to assist you. We value your input and strive to respond promptly. Thank you!
                            </p>
                            <div className="info">
                                <div className="information">
                                    <i className="fas fa-map-marker-alt" /> &nbsp; &nbsp;
                                    <p>3/10 Vijaynagar Double Storey, New delhi, 110009</p>
                                </div>
                                <div className="information">
                                    <i className="fas fa-envelope" /> &nbsp; &nbsp;
                                    <p>GreenVerge.com</p>
                                </div>
                                <div className="information">
                                    <i className="fas fa-phone" />
                                    &nbsp;&nbsp;
                                    <p>+91 8400218882</p>
                                </div>
                            </div>
                            <div className="social-media">
                                <p>Connect with us :</p>
                                <div className="social-icons">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <span className="circle one" />
                            <span className="circle two" />
                            <form action="index.html" autoComplete="off">
                                <h3 className="title">Contact us</h3>
                                <div className="input-container">
                                    <input type="text" name="name" className="input" />
                                    <label htmlFor="">Username</label>
                                    <span>Username</span>
                                </div>
                                <div className="input-container">
                                    <input type="email" name="email" className="input" />
                                    <label htmlFor="">Email</label>
                                    <span>Email</span>
                                </div>
                                <div className="input-container">
                                    <input type="tel" name="phone" className="input" />
                                    <label htmlFor="">Phone</label>
                                    <span>Phone</span>
                                </div>
                                <div className="input-container textarea">
                                    <textarea name="message" className="input" defaultValue={""} />
                                    <label htmlFor="">Message</label>
                                    <span>Message</span>
                                </div>
                                <input type="submit" defaultValue="Send" className="btn" />
                            </form>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );
}

export default Contact;