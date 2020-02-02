import React, { Component, createContext } from 'react';

export const ChallengeContext = createContext();
const initState = {
    challenges: [
        {
            id: 1,
            text: "Mehmet Ali FIRAT",
            difficulty: "easy"
        },
        {
            id: 2,
            text: "İnsan, başkalarının kendisi hakkında ne düşündüğüyle ilgilendiğinin yarısı kadar kendisinin ne olduğu ile ilgilenmez.",
            difficulty: "hard"
        },
        {
            id: 3,
            text: "Yaşlandım Gandalf. Göstermiyorum ama bunu gönlümün ta derinliklerinde hissediyorum.",
            difficulty: "medium"
        },
        {
            id: 4,
            text: "Güzel bir sabahta yağan kara bir şey demem, tamam; ama kar yağarken ben yatakta olmalıyım.",
            difficulty: "hard"
        }
    ],
    selected : 1
}
class ChallengeContextProvider extends Component {
    state = initState;
    render() {
        return (
            <ChallengeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ChallengeContext.Provider>
        );
    }
}

export default ChallengeContextProvider;