import React from "react";
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import { Link, NavLink } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';
import {Util} from "../../Util/util";

//custom components

//css
import "./Sidemenu.scss";

export class Sidebar extends React.Component {
    

    componentDidMount() {
        
    }

    render() {
        
        return (
            <div className="sidedrawer-container">
                <div className="sidedrawer">
                    <ul className="list-view">
                        <li>Dashboard</li>
                        <li>Dashboard</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    list: PropTypes.array.isRequired
}