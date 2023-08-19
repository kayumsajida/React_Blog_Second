import React from "react";
import '../css/latesttopic.css';
import { Link } from "react-router-dom";

const LatestTopic = () => {
    return (
        <>
            <section className="top_stories" id="top_stories">
                <div className="container">
                    <div className="mb-4">
                        <h2 className="heading_title">Latest Topic</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="mb-3">
                                <div className="common_repeat effects_widget">
                                    <div className="row align-items-center">
                                        <div className="col-sm-4">
                                            <div className="grid">
                                                <figure className="effect-lily">
                                                    <img src="images/react_hook.jpg" className="stories_img"
                                                        alt="What is hook in react and how to use in react components?" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <h3 className="small_heading p-0">React.js</h3>
                                            <Link to="#" className="effect_link">
                                                What is hook in react and how to use in react components?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="common_repeat effects_widget">
                                    <div className="row align-items-center">
                                        <div className="col-sm-4">
                                            <div className="grid">
                                                <figure className="effect-lily">
                                                    <img src="images/data_table.jpg" className="stories_img"
                                                        alt="Implementing a data table in a web page involves HTML, CSS, and possibly JS" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <h3 className="small_heading p-0">HTML/CSS/JS</h3>
                                            <Link to="#" className="effect_link">
                                                Implementing a data table in a web page involves HTML, CSS, and possibly JS
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="common_repeat effects_widget">
                                    <div className="row align-items-center">
                                        <div className="col-sm-4">
                                            <div className="grid">
                                                <figure className="effect-lily">
                                                    <img src="images/php_regular_express.jpg" className="stories_img"
                                                        alt="Easy to learn regular expressions using PHP script" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <h3 className="small_heading p-0">PHP</h3>
                                            <Link to="#" className="effect_link">
                                                Easy to learn regular expressions using PHP script
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="common_repeat effects_widget">
                                    <div className="row align-items-center">
                                        <div className="col-sm-4">
                                            <div className="grid">
                                                <figure className="effect-lily">
                                                    <img src="images/php_pagination.jpg" className="stories_img"
                                                        alt="Let's implement a simple example of pagination using PHP with headings" />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <h3 className="small_heading p-0">PHP</h3>
                                            <Link to="#" className="effect_link">
                                                Let's implement a simple example of pagination using PHP with headings
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="grid">
                                <figure className="effect-lily">
                                    <img src="images/react_api.jpg" alt="API call in a React.js application" />
                                    <figcaption>
                                        <div>
                                            <h2><span>API call in a React.js application</span></h2>
                                            <p>let's go create new React component and implement</p>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestTopic;