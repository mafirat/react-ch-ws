import React, { Component } from 'react';
const initialState = {
    entry: '',
    isDisabled: false
}
class ChallengeInput extends Component {
    challenge = this.props.challenge
    state = initialState
    keyMap = []
    changeHandler = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    resetState = () => {
        this.setState(initialState);
    }
    keyDownHandler = (e) => {
        this.keyMap[e.keyCode] = e.type === "keydown"
        if (this.keyMap[17] && this.keyMap[13]) {
            this.setState({
                ...this.state,
                isDisabled: true
            })
        }
    }
    keyUphandler = () => {
        this.keyMap = []
    }
    componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler);
        document.addEventListener("keyup", this.keyUphandler);
    }
    render() {
        const { entry, isDisabled } = this.state;
        return (
            <div className="input-group mb-3">
                <input type="text" name="entry" value={entry} disabled={isDisabled} onChange={this.changeHandler} className="form-control" placeholder="Metni giriniz" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.resetState} type="button" id="reset">sıfırla</button>
                </div>
            </div>
        );
    }
}

export default ChallengeInput;