import React from 'react';
import Layout from '../layout/Layout';
import AboutPage from './About/AboutPage';

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
