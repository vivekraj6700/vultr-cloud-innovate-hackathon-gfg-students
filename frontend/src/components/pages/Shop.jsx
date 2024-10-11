import React from 'react';
import Layout from '../layout/Layout';
import Header from '../layout/Header';

const Shop = () => {
    return (
        <>
            <Header />
            <div className='s-layout'>
                <nav className="header" role="banner">
                    {/* <h1 className="logo">
                            <a href="#">Cat <span>egories</span></a>
                        </h1> */}
                    <div className="nav-wrap">
                        <nav className="main-nav" role="navigation">
                            <ul className="unstyled list-hover-slide">
                                <li><a href="#">Plants</a></li>
                                <li><a href="#">Leafs</a></li>
                                <li><a href="#">Medicine</a></li>
                                <li><a href="#">Skin</a></li>
                                <li><a href="#">Face</a></li>

                            </ul>
                        </nav>

                    </div>
                </nav>
                <main class="s-layout__content">
                    <div className="container-fluid cont-box bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
                        <div className="row row-top row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img src="https://media.istockphoto.com/id/486851118/photo/holy-basil-or-tulsi-leaves-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=iRYaqF32kwUr1EVAy5caG4nyT6kQz3RBvIqvCIEZ0-g=" className="card-img-top" alt="title" />
                                    </a><div className="label-top shadow-sm"><a href="#">
                                    </a><a className="text-white" href="#">Leaf</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success">Rs.129</span>
                                            <span className="float-end"><a href="acer.affiliatelink" className="small text-muted text-uppercase aff-link">REVIEWS</a></span>
                                        </div>
                                        <h3 className="card-title">
                                            <a target="_blank" to="acer.path">Mentioned as one of the five plants in Panchkshiri Vriksha in Ayurveda, Peepal leaves tone the skin.</a>
                                        </h3>
                                        <div className="d-grid gap-2 my-4">
                                            <a href="#" className="btn btn-warning bold-btn">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img src="https://media.istockphoto.com/id/1285407677/photo/fresh-curry-leaves-on-a-clay-pot-with-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=hr88jyXsAYDT04Avi7v9gUE2i7-OMz0XF-ka7XhKSXU=" className="card-img-top" alt="title" />
                                    </a><div className="label-top shadow-sm"><a href="#">
                                    </a><a className="text-white" href="#">Leaf</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success">Rs.229</span>
                                            <span className="float-end"><a href="#" className="small text-muted text-uppercase aff-link">REVIEWS</a></span>
                                        </div>
                                        <h3 className="card-title">
                                            <a target="_blank" href="acer.path">Mentioned as one of the five plants in Panchkshiri Vriksha in Ayurveda, Peepal leaves tone the skin.
                                            </a></h3><a target="_blank" href="acer.path">
                                        </a><div className="d-grid gap-2 my-4"><a target="_blank" href="acer.path">
                                        </a><a href="#" className="btn btn-warning bold-btn">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img src="https://www.shutterstock.com/image-vector/gymnema-sylvestre-set-vector-illustration-600nw-2320068721.jpg" className="card-img-top" alt="title" />
                                    </a><div className="label-top shadow-sm"><a href="#">
                                    </a><a className="text-white" href="#">Leaf</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success">Rs.110</span>
                                            <span className="float-end"><a href="#" className="small text-muted text-uppercase aff-link">REVIEWS</a></span>
                                        </div>
                                        <h3 className="card-title">
                                            <a target="_blank" href="acer.path"> Mentioned as one of the five plants in Panchkshiri Vriksha in Ayurveda, Peepal leaves tone the skin.
                                            </a></h3><a target="_blank" href="acer.path">
                                        </a><div className="d-grid gap-2 my-4"><a target="_blank" href="acer.path">
                                        </a><a href="#" className="btn btn-warning bold-btn">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRpijjON1tefgFQJRO0szvFb3WRaOZ8v_VA&s" className="card-img-top" alt="title" />
                                    </a><div className="label-top shadow-sm"><a href="#">
                                    </a><a className="text-white" href="#">Leaf</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success">Rs.89</span>
                                            <span className="float-end"><a href="#" className="small text-muted text-uppercase aff-link">REVIEWS</a></span>
                                        </div>
                                        <h3 className="card-title">
                                            <a target="_blank" href="acer.path">Mentioned as one of the five plants in Panchkshiri Vriksha in Ayurveda, Peepal leaves tone the skin.
                                            </a></h3><a target="_blank" href="acer.path">
                                        </a><div className="d-grid gap-2 my-4"><a target="_blank" href="acer.path">
                                        </a><a href="#" className="btn btn-warning bold-btn">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second row */}
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4osAZa4c1oNt__83iKqHkRxijH_TrSZjSQ&s" className="card-img-top" alt="title" />
                                    </a><div className="label-top shadow-sm"><a href="#">
                                    </a><a className="text-white" href="#">Apple</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success">Rs.59</span>
                                            <span className="float-end"><a href="acer.affiliatelink" className="small text-muted text-uppercase aff-link">REVIEWS</a></span>
                                        </div>
                                        <h3 className="card-title">
                                            <a target="_blank" to="acer.path">Mentioned as one of the five plants in Panchkshiri Vriksha in Ayurveda, Peepal leaves tone the skin.</a>
                                        </h3>
                                        <div className="d-grid gap-2 my-4">
                                            <a href="#" className="btn btn-warning bold-btn">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJf-1qDGopwfsZbxxK7SWKTBf6kFGMi-fwEA&s" className="card-img-top" alt="title" />
                                    </a><div className="label-top shadow-sm"><a href="#">
                                    </a><a className="text-white" href="#">Plant</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success">Rs.99</span>
                                            <span className="float-end"><a href="#" className="small text-muted text-uppercase aff-link">REVIEWS</a></span>
                                        </div>
                                        <h3 className="card-title">
                                            <a target="_blank" href="acer.path"> Mentioned as one of the five plants in Panchkshiri Vriksha in Ayurveda, Peepal leaves tone the skin.
                                            </a></h3><a target="_blank" href="acer.path">
                                        </a><div className="d-grid gap-2 my-4"><a target="_blank" href="acer.path">
                                        </a><a href="#" className="btn btn-warning bold-btn">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk5yzB9EwP403wjkU86Vbl-yJ2vDNRZzATIw&s" className="card-img-top" alt="title" />
                                    </a><div className="label-top shadow-sm"><a href="#">
                                    </a><a className="text-white" href="#">Plant</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success">Rs.103</span>
                                            <span className="float-end"><a href="#" className="small text-muted text-uppercase aff-link">REVIEWS</a></span>
                                        </div>
                                        <h3 className="card-title">
                                            <a target="_blank" href="acer.path"> Mentioned as one of the five plants in Panchkshiri Vriksha in Ayurveda, Peepal leaves tone the skin.
                                            </a></h3><a target="_blank" href="acer.path">
                                        </a><div className="d-grid gap-2 my-4"><a target="_blank" href="acer.path">
                                        </a><a href="#" className="btn btn-warning bold-btn">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col hp">
                                <div className="card h-100 shadow-sm">
                                    <a href="#">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbRmNgz2ukxhOkBr3sS-nU3WbI7WOXhdx2g&s" className="card-img-top" alt="title" />
                                    </a><div className="label-top shadow-sm"><a href="#">
                                    </a><a className="text-white" href="#">Leaf</a>
                                    </div>
                                    <div className="card-body">
                                        <div className="clearfix mb-3">
                                            <span className="float-start badge rounded-pill bg-success">Rs201</span>
                                            <span className="float-end"><a href="#" className="small text-muted text-uppercase aff-link">REVIEWS</a></span>
                                        </div>
                                        <h3 className="card-title">
                                            <a target="_blank" href="acer.path">Mentioned as one of the five plants in Panchkshiri Vriksha in Ayurveda, Peepal leaves tone the skin.
                                            </a></h3><a target="_blank" href="acer.path">
                                        </a><div className="d-grid gap-2 my-4"><a target="_blank" href="acer.path">
                                        </a><a href="#" className="btn btn-warning bold-btn">buy now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </main>
            </div>
        </>
    );
}

export default Shop;
