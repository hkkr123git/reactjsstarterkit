import React from "react";
import { CircularProgress, LinearProgress } from 'material-ui/Progress';

import Header from "./Header";
import { Sidebar } from "./Sidemenu";


import { Toast, riverToast } from "../Common/Toast/Toast";
import menuList from "../../Util/Constants/menuList.json";

export class Root extends React.Component {
    render() {
        return (
            <div className="full-width">
                <Toast />
                <div className="full-width header-container">
                    <Header/>
                </div>
                <div className="row main-wrapper">
                    
                    <Sidebar list={menuList[this.props.role]} role={this.props.role}/>
                    <div className="content-wrapper body-container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}