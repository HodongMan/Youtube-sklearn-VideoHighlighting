import React, { Component } from 'react';
import YouTube from 'react-youtube';

class App extends Component {


    constructor(props){

        super(props);
        this.state = {
            data : "",
        };
    }
    printState(event){
        console.log(event.target);
        console.log(event.target.getCurrentTime());
    }

    onReady(event){
        event.target.seekTo(200);
    }

    componentDidMount(){
        fetch("http://localhost/api/response")
        .then((response) => response.json())
        .then((responseJson) => {this.setState({data : responseJson[0].video_id});console.log(responseJson[0])})
        .catch((error) => console.log(error));
    }

    render() {

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            }
        };

        return (
            <div>
            <h1>{this.state.data}</h1>
            <YouTube
                videoId="gQTQxEp7OLc"
                opts={opts}
                onReady={this.onReady}
                onPlay={this.printState}                     // defaults -> noop
                onPause={this.printState}                    // defaults -> noop
                onEnd={this.printState}                      // defaults -> noop
                onError={this.printState}                    // defaults -> noop
                onStateChange={this.printState}              // defaults -> noop
                onPlaybackRateChange={this.printState}       // defaults -> noop
                onPlaybackQualityChange={this.printState}
            />

            </div>
        );
    }
}

export default App;
