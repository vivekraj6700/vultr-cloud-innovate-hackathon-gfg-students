import React from 'react'
import { Link } from 'react-router-dom';

const Forget = () => {
  return (
    <>
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2>Reset Your Password</h2>
                    </div>
                    <div className="row clearfix">
                        <div className>
                            <form>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope" /></span>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
                                    <input type="text" name="password" placeholder="Enter your unique color" required />
                                </div>
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" /></span>
                                    <input type="password" name="password" placeholder="Set new password" required />
                                </div>
                                <div className='forget_password'>
                                    {/* <p><Link to={"/register"}>Register</Link></p> */}
                                    <p><Link to={"/login"}>Login</Link></p>
                                </div>

                                <input className="button" type="submit" defaultValue="Register" />
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
  )
}

export default Forget