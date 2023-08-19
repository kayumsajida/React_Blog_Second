import React from "react";
import '../css/html.css';
import Sidebar from "./Sidebar";
import Tag from "./Tag";
import tableimg from '../images/table.jpg';

const HTMLtable = () => {
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
                                <h2 class="middle_heading_title">Use of HTML Table</h2>
                                <p>
                                    HTML tables permit web designers to organize information into lines and sections (Rows - Columns).
                                </p>
                                <h2 class="middle_heading_title">Explained HTML Table Code</h2>
                                <pre>{`<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }    
    td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }    
    tr:nth-child(even) {
        background-color: #dddddd;
    }
</style>
<table>
  <tr>
    <th>Heading Content 1</th>
    <th>Heading Content 2</th>
    <th>Heading Content 3</th>
  </tr>
  <tr>
    <td>Content Goes Here 1</td>
    <td>Content Goes Here 2</td>
    <td>Content Goes Here 3</td>
  </tr>
  <tr>
    <td>Content Goes Here 4</td>
    <td>Content Goes Here 5</td>
    <td>Content Goes Here 6</td>
  </tr>
  <tr>
    <td>Content Goes Here 7</td>
    <td>Content Goes Here 8</td>
    <td>Content Goes Here 9</td>
  </tr>
  <tr>
    <td>Content Goes Here 10</td>
    <td>Content Goes Here 11</td>
    <td>Content Goes Here 12</td>
  </tr>
  <tr>
    <td>Content Goes Here 13</td>
    <td>Content Goes Here 14</td>
    <td>Content Goes Here 15</td>
  </tr>
  <tr>
    <td>Content Goes Here 16</td>
    <td>Content Goes Here 17</td>
    <td>Content Goes Here 18</td>
  </tr>
</table>
`}</pre>
                                <h2 class="middle_heading_title mt-3">See the Output</h2>
                                <pre>
                                    <img src={tableimg} className="img-fluid" alt="Use of Table Format" />
                                </pre>
                                <h2 class="middle_heading_title">HTML Table Tags</h2>
                                <table className="table table-striped my-3">
                                    <thead>
                                        <th>Tag</th>
                                        <th>Description</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;table&gt;
                                            </td>
                                            <td>
                                                It characterizes a table.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;tr&gt;
                                            </td>
                                            <td>
                                                It characterizes a line in a table.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;th&gt;
                                            </td>
                                            <td>
                                                It characterizes a header cell in a table.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;td&gt;
                                            </td>
                                            <td>
                                                It characterizes a cell in a table.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;caption&gt;
                                            </td>
                                            <td>
                                                It characterizes the table inscription.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;colgroup&gt;
                                            </td>
                                            <td>
                                                It determines a gathering of at least one sections in a table for designing.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;col&gt;
                                            </td>
                                            <td>
                                                Indicates section properties for every segment inside a &lt;colgroup&gt; component
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;thead&gt;
                                            </td>
                                            <td>
                                                It is utilized to bunch the header content in a table.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;tbody&gt;
                                            </td>
                                            <td>
                                                Bunches the body content in a table
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="left_bg">
                                                &lt;tfooter&gt;
                                            </td>
                                            <td>
                                                Bunches the footer content in a table
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default HTMLtable;