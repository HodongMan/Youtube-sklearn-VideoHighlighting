import React, {PureComponent} from 'react';

import './style.css';

export default class Highlight extends PureComponent{

    render(){
        return(
            <div className="rad-info-box rad-txt-success" onClick={this.props.moveVideoTimeBySeekTo}>
                <i className="fa fa-youtube"></i>
                <span className="heading">{this.props.time}</span>
                <span className="value"><span>{2}</span></span>
			</div>
        );
    }
}
