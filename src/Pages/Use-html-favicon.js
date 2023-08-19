import React from "react";
import { Link } from 'react-router-dom';
import '../css/html.css';
import Sidebar from "./Sidebar";
import Tag from "./Tag";
import tableimg from '../images/table.jpg';

const HTMLfavicon = () => {
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
                                <h2 class="middle_heading_title">Use of HTML Favicon</h2>
                                <p>
                                    A <strong>favicon</strong> is a little document containing the at least one symbols which are utilized to address the site or a blog. It is otherwise called a tab symbol, site symbol, URL symbol, or a bookmark symbol.
                                </p>
                                <p>
                                    This symbol is really shown on the location bar, program's tab, program history, bookmark bar, and so forth. The picture of a favicon is in <strong>.ico</strong> record design. There are different record designs, yet <strong>.ico</strong> design is upheld by every one of the programs.
                                </p>
                                <h2 class="middle_heading_title">The most effective method to Add a Favicon in HTML</h2>
                                <p>
                                    You can utilize any picture you like as your favicon. You can likewise make your own favicon on locales like <a href="https://www.favicon.cc/" target="_blank">https://www.favicon.cc/</a>
                                </p>
                                <pre>{`<link rel="icon" href="images/favicon.ico" type="image/x-icon">
`}</pre>
                                <h2 class="middle_heading_title mt-3">With HTML Code Example</h2>
                                <pre>{`<!DOCTYPE html>
<html>
<head>
  <title>Title Goes Here</title>
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
</head>
<body>

<div>All Content Goes Here</div>

</body>
</html>
`}</pre>
                                <h2 class="middle_heading_title">See the Output</h2>
                                <pre>{`<!DOCTYPE html>
<html>
<head>
  <title>Title Goes Here</title>
  <link rel="icon" href="images/favicon.ico" type="image/x-icon">
</head>
<body>

<div>All Content Goes Here</div>

</body>
</html>
`}</pre>

                                <div class="alert alert-primary" role="alert">
                                    Presently, save the "index.html" record and reload it in your program. Your program tab ought to now show your favicon picture to one side of the page title.
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

export default HTMLfavicon;