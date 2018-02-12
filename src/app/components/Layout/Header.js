import React from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Link, NavLink } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import AddUser from 'material-ui-icons/PersonAdd';
import Menu, { MenuItem } from 'material-ui/Menu';
import Notifications from 'material-ui-icons/Notifications';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {connect} from "react-redux";
import Badge from 'material-ui/Badge';
import { LinearProgress } from 'material-ui/Progress';

import { Toast, riverToast } from '../Common/Toast/Toast';
import {CommonService} from "./Common.service";
import {Util} from "../../Util/util";

import "./header.scss";
const PRIVILEGE_ADMINISTRATION = "ADMIN_PRIVILEGE";

const mapStateToProps = (state) => {
    return {
        notifications: state.NotificationsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            recentNotificationsListChange: (recentNotificationsList) => {
                dispatch(recentNotificationsListChange(recentNotificationsList))
            },
            unreadNotificationsCountChange: (count) => {
                dispatch(unreadNotificationsCountChange(count))
            }
        }
};
class Header extends React.Component {

    state = {
        userMenuOpen: false,
        anchorEl: null,
        selectedRole: "",
        fullName: "",
        username: "",
        avatar: null,
        roleList: [],
        notificationMenuOpen: false,
        showLoader: false
    };
    
    componentDidMount() {
        
    }

    setUserDetails(userDetails) {
        this.setState({
            ...this.state,
            roleList: userDetails.roles,
            fullName: userDetails.fullName,
            username: userDetails.username,
            avatar: userDetails.avatar,
            selectedRole: userDetails.activeRole.value
        });
    }

    render() {
        
        return (
            <div>
                <AppBar position="static" className="app-bar-container" style={{ backgroundColor: "#118DEF" }}>
                    <Toolbar>
                        <Typography type="title" color="inherit" className="flex">
                            River
                        </Typography>
                    </Toolbar>
                    {this.state.showLoader &&
                        <LinearProgress />
                    }
                </AppBar>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)