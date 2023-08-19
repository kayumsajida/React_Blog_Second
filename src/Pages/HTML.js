import React from "react";
import '../css/html.css';
import Sidebar from "./Sidebar";
import Tag from "./Tag";

const HTML = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section id="middle_area" className="middle_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="mt-0">
                                <div className="sidebar_widget">
                                    <Sidebar />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="card_widget_content">
                                <h2 class="middle_heading_title">HTML Introduction</h2>
                                <p>
                                    HTML stands for Hypertext Markup Language. It is a markup language used to create the structure and content of web pages. HTML is the foundation of all websites and is used to define the content of web pages such as headings, paragraphs, images, videos, links, tables, forms, and more.
                                </p>
                                <p>
                                    <strong>What is HTML?</strong>
                                </p>
                                <ul>
                                    <li>
                                        <i class="fa fa-circle" aria-hidden="true"></i> HTML stands for Hyper Text Markup Language
                                    </li>
                                    <li>
                                        <i class="fa fa-circle" aria-hidden="true"></i> HTML is the standard markup language for making Pages
                                    </li>
                                    <li>
                                        <i class="fa fa-circle" aria-hidden="true"></i> HTML portrays the design of a Website page
                                    </li>
                                    <li>
                                        <i class="fa fa-circle" aria-hidden="true"></i> HTML components advise the program how to show the substance
                                    </li>
                                </ul>
                                <h2 class="middle_heading_title">Basic HTML Structure with example</h2>
                                <p>
                                    In this instructional exercise, you will get a ton of HTML models, no less than one model for every theme with clarification. You can likewise alter and run these models, with our web-based HTML manager. Learning HTML is tomfoolery, and it's extremely simple to learn.
                                </p>
                                <pre>
                                    &lt;!DOCTYPE&gt;<br />
                                    <div class="left_gap">&lt;html&gt;</div>
                                    <div class="left_gap1">&lt;head&gt;<br />
                                        <div class="left_gap">&lt;title&gt;Web page title&lt;/title&gt;</div>
                                        &lt;/head&gt;<br />
                                    </div>
                                    <div class="left_gap1">
                                        &lt;body&gt;<br />
                                        <div class="left_gap">
                                            &lt;h1&gt;Write Your First Heading&lt;/h1&gt;<br />
                                            &lt;p&gt;Write Your First Paragraph.&lt;/p&gt;<br />
                                        </div>
                                        &lt;/body&gt;<br />
                                    </div>
                                    &lt;/html&gt;<br />
                                </pre>
                                <h2 class="middle_heading_title">Explained of HTML Example</h2>
                                <p><span className="bg">&lt;!DOCTYPE&gt;</span> - statement characterizes that this report is a HTML5 archive</p>
                                <p>
                                    <span className="bg">&lt;html&gt;</span> - component is the root component of a HTML page
                                </p>
                                <p>
                                    <span className="bg">&lt;head&gt;</span> - It ought to be the principal component inside the &lt;html&gt; component, which contains the metadata(information about the report). It should be shut before the body label opens.
                                </p>
                                <p>
                                    <span className="bg">&lt;title&gt;</span> - component determines a title for the HTML page (which is displayed in the program's title bar or in the page's tab)
                                </p>
                                <p>
                                    <span className="bg">&lt;body&gt;</span> - component characterizes the record's body, and is a holder for every one of the noticeable items, like headings, sections, pictures, hyperlinks, tables, records, and so on.
                                </p>
                                <p>
                                    <span className="bg">&lt;h1&gt;</span> - component characterizes a huge heading
                                </p>
                                <p>
                                    <span className="bg">&lt;p&gt;</span> - component characterizes a paragraph
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="card_widget_content">
                                <Tag />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HTML;