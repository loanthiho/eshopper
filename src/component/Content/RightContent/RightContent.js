import React, { Component } from 'react';
import FeaturesItem from './FeaturesItem/FeaturesItem';
import CategoryTab from './CategoryTab/CategoryTab';
import RecommendedItem from './RecommendedItem/RecommendedItem';

class RightContent extends Component {
    render() {
        return (
            <div className="col-sm-9 padding-right">
               <FeaturesItem></FeaturesItem>
               <CategoryTab></CategoryTab>
               <RecommendedItem></RecommendedItem>
            </div>
        );
    }
}

export default RightContent;