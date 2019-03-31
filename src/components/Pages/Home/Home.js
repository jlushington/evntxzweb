import React, {Component} from 'react';

import Banner from './Banner';
import Latest from './Latest';
import Search from './Search';
import Results from './Results';

export default class Header extends Component{

    render(){
        return(
            <div className="container">
                <Banner />
                <Latest />
                <Search />
                <Results />
            </div>
        );
    }
}