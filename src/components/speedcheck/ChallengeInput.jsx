import React, { Component } from 'react';
const initialState = {
    entry: '',
}
class ChallengeInput extends Component {
    challenge = this.props.challenge
    state = initialState
    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    resetState = () => {
        this.setState(initialState);
    }

    render() {
        const { entry } = this.state;
        return (
            <div className="input-group mb-3">
                <input type="text" name="entry"  value={entry} onChange={this.changeHandler} className="form-control" placeholder="Metni giriniz" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.resetState} type="button" id="reset">sıfırla</button>
                </div>
            </div>
        );
    }
}

export default ChallengeInput;