import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente saepe neque voluptatem molestiae qui
                                possimus assumenda, iste impedit debitis temporibus!.</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Voluptate ex nesciunt possimus debitis, voluptates
                                facere qui quod aliquam odit temporibus iste. Ratione nisi
                                accusantium accusamus, doloribus rem qui voluptatibus,
                                cum aliquam pariatur exercitationem eos ex quidem, recusandae
                                voluptate unde ut modi deleniti tenetur natus quis. Rerum
                                sed animi illum error..{" "}
                                <br /> I would warmly welcome you to come and visit to experience
                                for your wards safe future.</p>
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-6">
                                    <Link to={"/about"} className="btn  rounded-pill py-3 px-5 " id='btn' href>Read More</Link>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src="images/user.jpg" alt style={{ width: 45, height: 45 }} />
                                        <div className="ms-3">
                                            <h6 className=" mb-1" id="teacherName">Mukesh Singh</h6>
                                            <small>Director &amp; Founder</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img className="img-fluid w-75 rounded-circle bg-light p-3" style={{ height: "420px" }} src="images/about-11.jpg" alt="yoga" />
                                </div>
                                <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                                    <img className="img-fluid w-100 rounded-circle bg-light p-3" style={{ height: "280px" }} src="https://media.istockphoto.com/id/487122957/photo/herbal-medicine.jpg?s=2048x2048&w=is&k=20&c=-GDluCsMiyxBTBKaFSLVIXzAVvcXt-aWFAivJGh28GM=" alt="yoga" />
                                </div>
                                <div className="col-6 text-end" style={{ marginTop: '-150px' }}>
                                    <img className="img-fluid w-100 rounded-circle bg-light p-3" style={{ height: "280px" }} src="https://media.istockphoto.com/id/1246427586/photo/holy-basil-or-tulsi-leaves.jpg?s=612x612&w=0&k=20&c=J4nBGy334aq3PYLGLipjRgQnKXdNM-lJebYqVirgexQ=" alt="yoga" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AboutPage;
