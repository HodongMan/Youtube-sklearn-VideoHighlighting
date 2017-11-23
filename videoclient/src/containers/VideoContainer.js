import React, { Component } from 'react';

import {Navigation, Youtube, Footer} from '../components';
import {saveResponseToVideoClick, getHighlightsByVideoId} from '../lib/toServer';

export default class VideoContainer extends Component{

    constructor(props){
        super(props);

        this.state = {

        };
        this.onVideoSectionClick = this.onVideoSectionClick.bind(this);
    }


    componentDidMount(){

    }

    onVideoSectionClick(event){

        let pointed_time = event.target.getCurrentTime();
        saveResponseToVideoClick("gQTQxEp7OLc", pointed_time)
        .then(response => response.json)
        .then(responseJson => console.log(responseJson))
        .catch((error) => console.log(error));
    }

    render() {

        return (
            <div>
                <Navigation/>
                <Youtube
                    video_id={"gQTQxEp7OLc"}
                    onVideoSectionClick={this.onVideoSectionClick}
                />
                <Footer/>
            </div>
        );
    }
}
