import React, { Component } from 'react';
import Info from './Info';
import ChallengeInput from './ChallengeInput';
import Score from './Score';

class SpeedCheck extends Component {
    challenge = "Hello React";
    state = {}
    render() {
        return (
            <React.Fragment>
                <Info challenge={this.challenge} />
                <hr />
                <ChallengeInput challenge={this.challenge} />
                <hr />
                <Score />
            </React.Fragment>
        );
    }
}

export default SpeedCheck;