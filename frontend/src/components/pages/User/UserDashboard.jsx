import React from 'react'
import Layout from '../../layout/Layout'
import "../User/UserDashboard.css"

const UserDashboard = () => {
    return (
        <>
            <Layout title={"UserDashboard"}>
                <div className="Blog_page-wrap">

                    <div className=" Blog_sidebar Blog_left-sidebar">
                        <nav className="Blog_side-nav">
                            <h2>Hello User</h2>
                            <ul>
                                <li><a href="#">My Profile</a></li>
                                <li><a href="#">Orders</a></li>
                                <li><a href="#">Transaction history</a></li>
                                <li><a href="#">My Articles</a></li>
                                <li><a href="#">Logout</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="Blog_content_main">
                        <div className="Blog_content">
                            <div style={{display:'flex', flexDirection:'column', width:'70vw', alignItems:'center'}}>
                                <h2>My Profile</h2>
                                <img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="user image"  style={{height:'140px', width:'140px', borderRadius:'50%'}}/>
                                <p>Hello User, Welcome. Here you can find all the deatils related to you</p>
                            </div>
                            <section className='profile-section'>
                                <div className='profile-details'>
                                    <div className='profile-items'>
                                        <h3>Name:</h3>
                                        <h4>Vivek Raj</h4>
                                    </div>
                                    <div className='profile-items'>
                                        <h3>Address:</h3>
                                        <h4>Vijaynagar Double Storey</h4>
                                    </div>
                                    <div className='profile-items'>
                                        <h3>Email:</h3>
                                        <h4>vivekambuj6700@gmail.com</h4>
                                    </div>
                                    <div className='profile-items'>
                                        <h3>Phone:</h3>
                                        <h4>+918400218882</h4>
                                    </div>
                                    <div className='profile-items'>
                                        <h3>City:</h3>
                                        <h4>New Delhi</h4>
                                    </div>
                                    <div className='profile-items'>
                                        <h3>Pincode:</h3>
                                        <h4>110009</h4>
                                    </div>
                                    
                                </div>
                            </section>

                        </div>
    
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default UserDashboard