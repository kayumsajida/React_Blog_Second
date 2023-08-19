import React from "react";
import { Link } from "react-router-dom";
import '../css/looks.css';
import Slider from "react-slick";
import Trend1 from '../images/trending1.jpg';
import Trend2 from '../images/trending2.jpg';
import Trend3 from '../images/trending3.jpg';
import Trend4 from '../images/trending4.jpg';

const Lookslove = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2
    };
    return (
        <>
            <section id="looks_area" className="looks_area">
                <div className="container-fluid">
                    <div className="body_widget text-center">
                        <h2 className="trending_head">Looks You’ll Love</h2>
                        <small>Top sale on this week</small>
                    </div>
                    <div className="pt-4">
                        <Slider {...settings}>
                            <div>
                                <div className="trending_main">
                                    <img src={Trend1} className="img-fluid" />
                                    <div className="trending_content">
                                        <div className="trending_widget">
                                            <h2 className="trending_title">Knitwear</h2>
                                            <div className="divider"></div>
                                            <p>
                                                &#x20b9; 999.00
                                                <span>&#x20b9; 650.00 </span>
                                            </p>
                                            <Link to="#" className="read_more">Add to Cart</Link>
                                        </div>
                                    </div>
                                    <div className="trending_overlay"></div>
                                </div>
                            </div>
                            <div>
                                <div className="trending_main">
                                    <img src={Trend2} className="img-fluid" />
                                    <div className="trending_content">
                                        <div className="trending_widget">
                                            <h2 className="trending_title">Spring Assortment</h2>
                                            <div className="divider"></div>
                                            <p>
                                                &#x20b9; 750.00
                                                <span>&#x20b9; 350.00 </span>
                                            </p>
                                            <Link to="#" className="read_more">Add to Cart</Link>
                                        </div>
                                    </div>
                                    <div className="trending_overlay"></div>
                                </div>
                            </div>
                            <div>
                                <div className="trending_main">
                                    <img src={Trend3} className="img-fluid" />
                                    <div className="trending_content">
                                        <div className="trending_widget">
                                            <h2 className="trending_title">Accesories</h2>
                                            <div className="divider"></div>
                                            <p>
                                                &#x20b9; 1400.00
                                                <span>&#x20b9; 750.00 </span>
                                            </p>
                                            <Link to="#" className="read_more">Add to Cart</Link>
                                        </div>
                                    </div>
                                    <div className="trending_overlay"></div>
                                </div>
                            </div>
                            <div>
                                <div className="trending_main">
                                    <img src={Trend4} className="img-fluid" />
                                    <div className="trending_content">
                                        <div className="trending_widget">
                                            <h2 className="trending_title">Ladies Beautician Top</h2>
                                            <div className="divider"></div>
                                            <p>
                                                &#x20b9; 650.00
                                                <span>&#x20b9; 299.00 </span>
                                            </p>
                                            <Link to="#" className="read_more">Add to Cart</Link>
                                        </div>
                                    </div>
                                    <div className="trending_overlay"></div>
                                </div>
                            </div>
                            <div>
                                <div className="trending_main">
                                    <img src={Trend1} className="img-fluid" />
                                    <div className="trending_content">
                                        <div className="trending_widget">
                                            <h2 className="trending_title">Knitwear</h2>
                                            <div className="divider"></div>
                                            <p>
                                                &#x20b9; 999.00
                                                <span>&#x20b9; 650.00 </span>
                                            </p>
                                            <Link to="#" className="read_more">Add to Cart</Link>
                                        </div>
                                    </div>
                                    <div className="trending_overlay"></div>
                                </div>
                            </div>
                            <div>
                                <div className="trending_main">
                                    <img src={Trend2} className="img-fluid" />
                                    <div className="trending_content">
                                        <div className="trending_widget">
                                            <h2 className="trending_title">Spring Assortment</h2>
                                            <div className="divider"></div>
                                            <p>
                                                &#x20b9; 750.00
                                                <span>&#x20b9; 350.00 </span>
                                            </p>
                                            <Link to="#" className="read_more">Add to Cart</Link>
                                        </div>
                                    </div>
                                    <div className="trending_overlay"></div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="my-4 text-center">
                        <a href="#" className="show_all">Show All</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Lookslove;