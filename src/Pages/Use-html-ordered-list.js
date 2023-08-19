import React from "react";
import { Link } from 'react-router-dom';
import '../css/html.css';
import Sidebar from "./Sidebar";
import Tag from "./Tag";

const HTMLlist = () => {
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
                                <h2 class="middle_heading_title">Use of HTML Ordered List</h2>
                                <p>
                                    HTML Ordered List or Numbered List shows components in numbered design. The HTML <strong>ol</strong> tag is utilized for requested list. We can utilize requested rundown to address things either in mathematical request design or sequential request design, or any arrangement where a request is stressed.
                                </p>
                                <h2 class="middle_heading_title">Ordered HTML List</h2>
                                <p>
                                    An Ordered HTML List begins with the <strong>&lt;ol&gt;</strong> tag. Each Ordered HTML List thing begins with the <strong>&lt;li&gt;</strong> tag.
                                </p>
                                <p>
                                    An Ordered HTML List tis set default with numbers of course:
                                </p>
                                <pre>{`<ol>
  <li>Demo Content 1</li>
  <li>Demo Content 2</li>
  <li>Demo Content 3</li>
</ol>
`}</pre>
                                <h2 class="middle_heading_title mt-3">Result</h2>
                                <pre>{`1. Demo Content 1
2. Demo Content 2
3. Demo Content 3
`}</pre>
                                <p></p>

                                <div class="alert alert-primary" role="alert">
                                    To address different arranged records, there are 5 sorts of properties in <strong>&lt;ol&gt;</strong> tag.
                                </div>
                                <table className="table table-striped my-3">
                                    <thead>
                                        <th>Type</th>
                                        <th>Description</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;type="1"&gt;
                                            </td>
                                            <td>
                                                This List are numbered with numbers (default) of course
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;type="a"&gt;
                                            </td>
                                            <td>
                                                This List are numbered with lowercase letters
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;type="i"&gt;
                                            </td>
                                            <td>
                                                This list are numbered with lowercase roman numbers
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="left_bg">
                                                &lt;type="I"&gt;
                                            </td>
                                            <td>
                                                This list are numbered with uppercase roman numbers
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;type="A"&gt;
                                            </td>
                                            <td>
                                                This List are numbered with uppercase letters
                                            </td>
                                        </tr>



                                    </tbody>
                                </table>
                                <h2 class="middle_heading_title mt-3">List Lowercase Letters</h2>
                                <pre>{`<ol type="a">
  <li>Demo Content 1</li>
  <li>Demo Content 2</li>
  <li>Demo Content 3</li>
</ol>
`}</pre>
                                <h2 class="middle_heading_title mt-3">Result</h2>
                                <div className="result_widget">
                                    <pre>{`a. Demo Content 1
b. Demo Content 2
c. Demo Content 3
`}</pre>
                                </div>

                                <h2 class="middle_heading_title mt-3">List lowercase Letters with Roman</h2>
                                <pre>{`<ol type="i">
  <li>Demo Content 1</li>
  <li>Demo Content 2</li>
  <li>Demo Content 3</li>
</ol>
`}</pre>
                                <h2 class="middle_heading_title mt-3">Result</h2>
                                <div className="result_widget">
                                    <pre>{`i. Demo Content 1
ii. Demo Content 2
iii. Demo Content 3
`}</pre>
                                </div>


                                <h2 class="middle_heading_title mt-3">List uppercase Letters with Roman</h2>
                                <pre>{`<ol type="I">
  <li>Demo Content 1</li>
  <li>Demo Content 2</li>
  <li>Demo Content 3</li>
</ol>
`}</pre>
                                <h2 class="middle_heading_title mt-3">Result</h2>
                                <div className="result_widget">
                                    <pre>{`I. Demo Content 1
II. Demo Content 2
III. Demo Content 3
`}</pre>
                                </div>

                                <h2 class="middle_heading_title mt-3">List uppercase Letters</h2>
                                <pre>{`<ol type="A">
  <li>Demo Content 1</li>
  <li>Demo Content 2</li>
  <li>Demo Content 3</li>
</ol>
`}</pre>
                                <h2 class="middle_heading_title mt-3">Result</h2>
                                <div className="result_widget">
                                    <pre>{`A. Demo Content 1
B. Demo Content 2
C. Demo Content 3
`}</pre>
                                </div>
                                <p>
                                    You can use like this only change the type as you want to see the ouput and implement where you want.
                                </p>
                                <h2 class="middle_heading_title mt-3">List Counting</h2>
                                <p>
                                    An html ordered list will begin counting from 1 <strong>(default)</strong>. If you have any desire to begin counting from a predefined number, you can utilize the <strong>start</strong> property:
                                </p>
                                <pre>{`<ol start="10">
  <li>Demo first Content</li>
  <li>Demo second content</li>
  <li>Demo third content</li>
</ol>
`}</pre>
                                <h2 class="middle_heading_title mt-3">Result</h2>
                                <div className="result_widget">
                                    <pre>{`10. Demo first Content
11. Demo first Content
12. Demo first Content
`}</pre>
                                </div>
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

export default HTMLlist;