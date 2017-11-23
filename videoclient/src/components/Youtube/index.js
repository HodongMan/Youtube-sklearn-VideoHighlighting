import React, {PureComponent} from 'react';
import YouTube from 'react-youtube';


export default class Youtube extends PureComponent{

    printState(event){
        console.log(event.target);
        console.log(event.target.getCurrentTime());
    }

    onReady(event){
        event.target.seekTo(200);
    }

    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return(
            <YouTube
                videoId={this.props.video_id}
                id="youtube"
                opts={opts}
                onReady={this.onReady}
                onPause={this.props.onVideoSectionClick}
            />
        );
    }
}


/*

<YouTube
    videoId={this.props.video_id}
    id="youtube"
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

*/
