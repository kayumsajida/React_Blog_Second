import React from "react";
import { Link } from "react-router-dom";
import '../css/Banner.css';

const Banner = () => {
    return (
        <>
            <section className="banner_area" id="banner_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="effects_widget">
                                <Link to="/react-install" className="effect_link">
                                    <div className="grid">
                                        <figure className="effect-lily">
                                            <img src="images/react.jpg" alt="How to install react" />
                                            <figcaption>
                                                <div>
                                                    <h2><span>How to install React.js application</span></h2>
                                                    <p>Getting Started with React: Installation Guide</p>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <div className="effects_widget">
                                            <div className="grid">
                                                <figure className="effect-lily">
                                                    <img src="images/HTML.jpg" className="right_img_banner" alt="HTML" />
                                                </figure>
                                            </div>
                                            <h3 className="small_heading">HTML</h3>
                                            <Link to="#" className="effect_link">
                                                Semantic Elements: Enhancing Structure and Accessibility
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <div className="effects_widget">
                                            <div className="grid">
                                                <figure className="effect-lily">
                                                    <img src="images/react_bootstrap.jpg" className="right_img_banner"
                                                        alt="Easy way to bootstrap install in react projects" />
                                                </figure>
                                            </div>
                                            <h3 className="small_heading">React.js</h3>
                                            <Link to="#" className="effect_link">
                                                Easy way to bootstrap install in react projects
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <div className="effects_widget">
                                            <div className="grid">
                                                <figure className="effect-lily">
                                                    <img src="images/html_css.jpg" className="right_img_banner"
                                                        alt="Use of display flex to arrange the UI Elements" />
                                                </figure>
                                            </div>
                                            <h3 className="small_heading">HTML/CSS</h3>
                                            <Link to="#" className="effect_link">
                                                Use of display flex to arrange the UI Elements
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <div className="effects_widget">
                                            <div className="grid">
                                                <figure className="effect-lily">
                                                    <img src="images/php.jpg" className="right_img_banner"
                                                        alt="How to create file upload in php script" />
                                                </figure>
                                            </div>
                                            <h3 className="small_heading">PHP</h3>
                                            <Link to="#" className="effect_link">
                                                How to create file upload in php script
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 latest_technology">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <h2 className="heading_title">Latest Technology</h2>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="text-end">
                                    <Link to="#" className="common_btn">See All</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="grid">
                                    <figure className="effect-lily">
                                        <img src="images/latest_react.jpg" className="latest_tech" alt="" />
                                        <figcaption>
                                            <div>
                                                <h2><span>React.js</span></h2>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="grid">
                                    <figure className="effect-lily">
                                        <img src="images/latest_html.jpg" className="latest_tech" alt="" />
                                        <figcaption>
                                            <div>
                                                <h2><span>HTML/CSS</span></h2>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="grid">
                                    <figure className="effect-lily">
                                        <img src="images/php_latest.jpg" className="latest_tech" alt="" />
                                        <figcaption>
                                            <div>
                                                <h2><span>PHP</span></h2>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="grid">
                                    <figure className="effect-lily">
                                        <img src="images/latest_jquery.jpg" className="latest_tech" alt="" />
                                        <figcaption>
                                            <div>
                                                <h2><span>Jquery</span></h2>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;