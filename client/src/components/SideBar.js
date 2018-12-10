import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
class SideBar extends Component{
    render(){
        return(
            <Router>
                <ul id="sidebarcontent">
                    
                    <NavLink activeClassName='is-active' exact={true} to="/" className="sidebarcontentlink">
                        <div>
                            <div id="sidebarhomeicon"></div>
                            <li id="sidebarhomeli">Home</li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName='is-active' to="/post/art" className="sidebarcontentlink">
                        <div>
                            <div id="sidebararticon"></div>
                            <li id="sidebarartli">
                                Art
                            </li>
                        </div>
                        
                    </NavLink>
                    <NavLink activeClassName='is-active' to="/post/code" className="sidebarcontentlink">
                        <div>
                            <div id="sidebarcodeicon"></div>
                            <li id="sidebarcodeli">
                                Code
                            </li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName='is-active' to="/post/currentlybuilding" className="sidebarcontentlink">
                        <div>
                            <div id="sidebarcurrentlybuildingicon"></div>
                            <li id="sidebarcurrentlybuildingli">
                                Currently Building
                            </li>
                        </div>
                    </NavLink>
                    <NavLink activeClassName='is-active' to="/post/contact" className="sidebarcontentlink">
                        <div>
                            <div id="sidebarcontacticon"></div>
                            <li id="sidebarcontactli">
                                Contact
                            </li>
                        </div>
                    </NavLink>
                </ul>
            </Router>
        );
    }
}
export default SideBar;