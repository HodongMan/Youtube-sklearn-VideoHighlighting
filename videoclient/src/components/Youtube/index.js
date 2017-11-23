import React, {PureComponent} from 'react';
import YouTube from 'react-youtube';

import Highlight from '../Highlight';

export default class Youtube extends PureComponent{

    render(){
        const opts = {
            height: '600',
            width: '800',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        <YouTube
                            videoId={this.props.video_id}
                            id="youtube"
                            opts={opts}
                            onReady={this.props.setYoutubeAPIObject}
                            onPause={this.props.onVideoSectionClick}
                        />
                    </div>
                    <div className='col-md-3'>
                        {
                            this.props.highlight.map((item, index) => {

                                return(
                                    <Highlight
                                        key={index}
                                        time={item}
                                        moveVideoTimeBySeekTo={this.props.moveVideoTimeBySeekTo}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
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
