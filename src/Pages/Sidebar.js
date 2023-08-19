import React from "react";
import { NavLink } from "react-router-dom";
import '../css/sidebar.css';
import ReactSidebarDat from "./ReactsidebarData";
import SearchFilter from "./SearchFilter";

const ReactSidebar = () => {
    return (
        <>
            <SearchFilter />
            <ul>
                {
                    ReactSidebarDat.map((val, ind) => {
                        return (
                            <li>
                                <NavLink to={val.url} className="side_link" end>{val.menutitle}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}


export default ReactSidebar;