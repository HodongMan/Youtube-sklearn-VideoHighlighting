import React, { Component } from 'react';

import {Navigation, Youtube, Footer} from '../components';
import {saveResponseToVideoClick, getHighlightsByVideoId} from '../lib/toServer';

export default class VideoContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            highlight : [],
            youtube : {}
        };
        this.onVideoSectionClick = this.onVideoSectionClick.bind(this);
        this.moveVideoTimeBySeekTo = this.moveVideoTimeBySeekTo.bind(this);
        this.setYoutubeAPIObject = this.setYoutubeAPIObject.bind(this);
    }


    componentDidMount(){

        getHighlightsByVideoId("gQTQxEp7OLc")
        .then(responseJson => {
            console.log(responseJson);
            this.setState({
                highlight : responseJson.data
            });
        })
        .catch(error => console.log(error));

    }

    onVideoSectionClick(event){

        let pointed_time = event.target.getCurrentTime();
        saveResponseToVideoClick("gQTQxEp7OLc", pointed_time)
        .then(response => response.json)
        .then(responseJson => console.log(responseJson))
        .catch((error) => console.log(error));
    }

    moveVideoTimeBySeekTo(time){

        this.state.youtube.seekTo(time);
    }

    setYoutubeAPIObject(event){
        this.setState({
            youtube : event.target
        });
    }

    render() {

        return (
            <div>
                <Navigation/>
                <Youtube
                    video_id={"gQTQxEp7OLc"}
                    id={"youtube"}
                    onVideoSectionClick={this.onVideoSectionClick}
                    highlight={this.state.highlight}
                    setYoutubeAPIObject={this.setYoutubeAPIObject}
                    moveVideoTimeBySeekTo={this.moveVideoTimeBySeekTo}
                />
                <Footer/>
            </div>
        );
    }
}
