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

import { Root } from "../Layout/Root";

// page dependency
import { Util } from "../../Util/util";
import {CommonService} from "../Layout/Common.service";
import { DashboardService } from "./Dashboard.service";
import {setData} from "./Dashboard.actions";
// CSS
import "./Dashboard.scss";


const mapStateToProps = (state) => {
    return {
        user: state.DashboardReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setData(data));
        }
    }
};

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("dahsbiard");
    }

    render() {
        
        return (
            <Root role="user">
                <div className="dashboard">
                    <h3>Welcome to Home</h3>
                </div>
            </Root>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);