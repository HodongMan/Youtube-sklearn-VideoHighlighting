import React, {PureComponent} from 'react';

import './style.css';

export default class Highlight extends PureComponent{

    render(){
        let start_time = SecondsTohhmmss(this.props.time);
        return(
            <div className="rad-info-box rad-txt-success" onClick={(e) => {this.props.moveVideoTimeBySeekTo(this.props.time)}}>
                <i className="fa fa-youtube"></i>
                <span className="heading">{start_time}</span>
                <span className="value"><span className='like' onClick={(e) => {e.stopPropagation();e.target.setAttribute('class', 'active');}}>
                    &#10084;</span>
                </span>
			</div>
        );
    }
}

function SecondsTohhmmss(totalSeconds) {
  let hours   = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
  let seconds = parseInt(totalSeconds - (hours * 3600) - (minutes * 60));

  // round seconds
  seconds = Math.round(seconds * 100) / 100

  let result = (hours < 10 ? "0" + hours : hours);
      result += ":" + (minutes < 10 ? "0" + minutes : minutes);
      result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
  return result;
}
