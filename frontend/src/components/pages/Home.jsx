import React from 'react';
import Layout from '../layout/Layout';
import AboutPage from './About/AboutPage';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Layout title={"Home"}>
                <section className="content">
                    <div className='_topMain'>
                        <div className='_tophome'>
                            <img src='/images/leaf1.png' />
                            <div className='_topHomeText '>
                                <div className='bg_blur'>44</div>
                                <p>Welcom to <br /><span style={{ marginLeft: "30px" }}>GreenVerga</span></p>
                                <hr className='custom_line' />
                                <h1 className='home_tittle'>"स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रथमर्न चा"
                                    <br></br>
                                    (Svasthasya svasthya rakshanam, aturasya vikar prashamanam cha)</h1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Classes Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        {/*  <div className="text-center mx-auto mb-5 wow fadeInUp " data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Extracurricular Activities Classes</h1>
                            <p>They contribute to boosting one’s self-confidence and overall personal development. It is not necessary that it only includes your hobbies.</p>
                            <Link to={"/exteacurricular"}><button className="btn  w-20 py-2 " id="btn">Read More</button></Link>
                        </div> */}
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="classes-item">
                                    <div className="bg-lights rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSmVajzNN8-1Ln340OWRc8bdKT4561jkFlWQ&s" alt='img' />
                                    </div>
                                    <div className="bg-lights rounded p-1  mt-n5">
                                        <a className="d-block text-center h3 mt-1 mb-1" href>Yoga</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="classes-item">
                                    <div className="bg-lights rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="https://thumbs.dreamstime.com/b/wedelia-chinensis-well-known-herbal-medicine-ayurveda-siddha-unani-systems-296256354.jpg" alt='img' />
                                    </div>
                                    <div className="bg-lights rounded p-1  mt-n5">
                                        <a className="d-block text-center h3 mt-1 mb-1" href>Unani</a>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="classes-item">
                                    <div className="bg-lights rounded-circle w-75 mx-auto p-3">
                                        <img className="img-fluid rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRosEWePNQJLUsUo8JkU0z-mia3S4DcqZqg&s" alt='img' />
                                    </div>
                                    <div className="bg-lights rounded p-1  mt-n5">
                                        <a className="d-block text-center h3 mt-1 mb-1" href>Ayurvedic</a>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
                {/* Classes End */}



                {/* About Us Section */}
                <section>
                    <AboutPage />
                </section>

                <section className="about-us">
                    <h2>About Us</h2>
                    <p>Maharatna is an organisation that believes every disease can be cured by Ayurveda. What actually is required is your patience, consistency, and belief. As the name "MAHARATNA" stands for precious, similarly our patients are precious.</p>
                </section>
                {/* Motive Section */}
                <section className="motive">
                    <h2>Motive</h2>
                    <p>The motive of our company is to provide pure Ayurvedic components and herbs (jadibutis) in medication and bring 100% satisfaction and safety to the people. We work with the objective to cure diseases naturally by providing Ayurvedic herbs as ingredients, making use of natural components without any addition of artificial products and harmful substances.</p>
                </section>
                {/* Vision Section */}
                <section className="vision">
                    <h2>Vision</h2>
                    <p>Global well-being is one of the long-term visions of our company. Maharanta Ayurved wants to make a huge contribution to global health with our company’s natural and herbal products. We continue the innovation and development of Ayurvedic products to address modern health challenges.</p>
                </section>
                {/* Products Section */}
                <section className="products">
                    <h2>Products</h2>
                    {/* Add product details here */}
                </section>

            </Layout>
        </>
    );
}

export default Home;
