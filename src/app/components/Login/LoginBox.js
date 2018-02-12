import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import {connect} from "react-redux";
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';
  
import { Toast, riverToast } from '../Common/Toast/Toast';

// page dependency
import { Util } from "../../Util/util";
import {CommonService} from "../Layout/Common.service";
import { LoginService } from "./Login.service";
import {setUsername, setPassword, enterOtp} from "./Login.actions";
// CSS
import "./Login.scss";


const mapStateToProps = (state) => {
    return {
        user: state.LoginReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        usernameChange: (username) => {
            dispatch(setUsername(username));
        },
        passwordChange: (password) => {
            dispatch(setPassword(password));
        },
        enterOtp: (otp) => {
            dispatch(enterOtp(otp));
        }
    }
};

class LoginBox extends React.Component {
    state = {
        showPreloader: false,
        otpBox: false,
        username: "",
        password: "",
        otpDialogOpen: false,
        otp: ""
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const userDetails = Util.getLoggedInUserDetails();
        if (Util.getAuthToken()) {
            if (userDetails && userDetails.privileges) {
                window.location.href = "/#/dashboard";       
            }
        }
    }

    getMessage(msg) {
        const msgParts = msg.split("-");
        return msgParts.join(" ");
    }

    render() {
        
        return (
            <div className="wrapper">
                <Toast />
                <div className="signin-box">
                    {this.props.msg &&
                        <div className="msg">{this.getMessage(this.props.msg)}</div>
                    }
                    <div>
                        <div className="signin-form">
                            <div className="">
                                <TextField
                                    id="username"
                                    label="Email address"
                                    className="full-width"
                                    value={this.props.user.username}
                                    onChange={(e) => {
                                        this.props.usernameChange(e.target.value)
                                        {/* this.setState({username: e.target.value}); */}
                                    }}
                                    margin="normal"
                                />
                            </div>
                            <div className="">
                                <TextField
                                    id="password"
                                    label="Password"
                                    type="password"
                                    className="full-width"
                                    value={this.props.user.password}
                                    margin="normal"
                                    onChange={(e) => {
                                        this.props.passwordChange(e.target.value)
                                        {/* this.setState({password: e.target.value}); */}
                                    }}
                                    onKeyPress={
                                        this.handleKeyPress.bind(this)
                                    }
                                />
                            </div>
                        </div>
                        <div className="action-container">
                            <Button onClick={this.onLoginTap.bind(this)}>LOGIN</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleKeyPress(event) {
        if(event.key == 'Enter'){
            this.onLoginTap();
        }
    }

    onLoginTap() {
        window.location.href="/#/dashboard";   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox);