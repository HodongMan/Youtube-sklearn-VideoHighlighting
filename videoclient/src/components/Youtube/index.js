import React, {PureComponent} from 'react';
import YouTube from 'react-youtube';


export default class Youtube extends PureComponent{



    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return(

        );
    }
}
