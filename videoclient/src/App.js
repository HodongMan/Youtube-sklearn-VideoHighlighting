import React, { Component } from 'react';
import YouTube from 'react-youtube';

class App extends Component {

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
        .then((responseJson) => console.log(responseJson))
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
        );
    }
}

export default App;
