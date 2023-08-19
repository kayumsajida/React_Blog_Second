import React from "react";
import '../css/html.css';
import Sidebar from "./Sidebar";
import Tag from "./Tag";

const HTMLheading = () => {
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
                                <h2 class="middle_heading_title">Use of HTML Heading</h2>
                                <p>
                                    A HTML heading or HTML h1 tag can be characterized as a title or a caption which you need to show on the page. At the point when you place the text inside the heading labels <strong>&lt;h1&gt;----&lt;/h1&gt;</strong>, it is shown on the program in the striking organization and size of the text relies upon the quantity of heading.
                                </p>
                                <p>
                                    There are six unique HTML headings which are characterized with the <strong>&lt;h1&gt; to &lt;h6&gt;</strong> labels, from most elevated level h1 (fundamental heading) to the most un-level h6 (least significant heading).
                                </p>
                                <p>
                                    <strong>&lt;h1&gt;</strong> is the biggest heading tag and h6 is the littlest one. So <strong>&lt;h1&gt;</strong> is utilized for most significant heading and h6 is utilized for least significant.
                                </p>
                                <h2 class="middle_heading_title">Explained Code</h2>
                                <pre>
                                    <code>
                                        &lt;h1&gt;Heading Content 1&lt;/h1&gt;<br />
                                        &lt;h2&gt;Heading Content 2&lt;/h1&gt;<br />
                                        &lt;h3&gt;Heading Content 3&lt;/h1&gt;<br />
                                        &lt;h4&gt;Heading Content 4&lt;/h1&gt;<br />
                                        &lt;h5&gt;Heading Content 5&lt;/h1&gt;<br />
                                        &lt;h6&gt;Heading Content 6&lt;/h1&gt;<br />
                                    </code>
                                </pre>
                                <div class="alert alert-primary" role="alert">
                                    <strong>Note</strong> - Heading components <strong>(h1....h6)</strong> ought to be utilized for headings as it were. They ought not be utilized just to make text strong or enormous.
                                </div>
                                <h2 class="middle_heading_title">See this result</h2>
                                <pre>
                                    <h1>Heading Content 1</h1>
                                    <h2>Heading Content 2</h2>
                                    <h3>Heading Content 3</h3>
                                    <h4>Heading Content 4</h4>
                                    <h5>Heading Content 5</h5>
                                    <h6>Heading Content 6</h6>
                                </pre>
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

export default HTMLheading;