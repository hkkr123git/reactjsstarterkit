import React from "react";
import { render } from 'react-dom';

import "./Layout.scss";
import LoginBox from "../Login/LoginBox";

export class Landing extends React.Component {
    render() {
        return (
            <div className="base-container">
                <LoginBox msg={this.props.match.params.message}/>
            </div>
        )
    }
}
