import React, { Component } from 'react';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';


class Content extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <LeftContent></LeftContent>
                    <RightContent></RightContent>
                </div>
            </div>
        );
    }
}

export default Content;