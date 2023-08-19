import React from "react";
import '../css/footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer_new" id="footer_new">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="mb-2">
                                <h2 className="common_title">HTML/CSS</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="footer_link">Why use initial-scale in HTML?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Why use viewport in HTML?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Explain the difference between <code>(&lt;div&gt;)</code> and <code>(&lt;span&gt;)</code> elements.</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Explain the concept of semantic HTML.</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">What is the role of the <code>(&lt;meta&gt;)</code> tag in HTML?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">What are self-closing tags?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">What are HTML elements and tags?</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="mb-2">
                                <h2 className="common_title">React.js</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="footer_link">What is React.js?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Let's Explain the concept of Virtual DOM in React.</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Learn React components</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Easy learn props in React</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">What is state in React?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Purpose of the useEffect hook?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">What is JSX?</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="mb-2">
                                <h2 className="common_title">PHP</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="footer_link">What is PHP?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Let's Explain the difference between <code>"echo"</code> and <code>"print"</code> in PHP.</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Difference between PHP and JavaScript?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">How do you include an external PHP file in another PHP file?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Difference between <code>include</code> and <code>include_once</code>?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Session in PHP?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Set and retrieve cookies in PHP?</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="mb-2">
                                <h2 className="common_title">Jquery</h2>
                                <ul>
                                    <li>
                                        <a href="#" className="footer_link">Difference between <code>.html()</code> and <code>.text()</code> methods in jQuery</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">How can you make an AJAX request using jQuery?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">What is chaining in jQuery?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">The purpose of the noConflict() method in jQuery</a>
                                    </li>
                                    <li>
                                        <a href="#" className="footer_link">Fade out an element using jQuery</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright_widget mt-2">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <p>
                                    &copy; copyright 2023 Weblession. All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-sm-6">
                                <div className="footer_right_menu">
                                    <ul>
                                        <li>
                                            <Link to="/privacy-policy" className="effect_link small_font">Privacy policy</Link>
                                        </li>
                                        <li>
                                            <Link href="/disclaimer" className="effect_link small_font">Disclaimer</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;