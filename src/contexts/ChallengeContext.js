import React, { createContext, useState, useReducer, useEffect } from 'react';
import { challengeReducer } from '../reducers/challengeReducer';

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
    selected: 1,
    index: 5
}
const initResult = [
    {
        id: 1,
        challengeId: 2,
        scores: {
            duration: 2.5,
            accuracy: 83,
            wordsPerMinute: 55
        }
    },
    {
        id: 2,
        challengeId: 2,
        scores: {
            duration: 2.5,
            accuracy: 83,
            wordsPerMinute: 55
        }
    }
]

const ChallengeContextProvider = (props) => {
    const [state, dispatch] = useReducer(challengeReducer, initState, () => {
        const data = localStorage.getItem('challenges');
        return data ? JSON.parse(data) : initState;
    })
    //const [state, setChallenges] = useState(initState);
    const data = localStorage.getItem('results');
    const [results, setResults] = useState(data ? JSON.parse(data) : initResult);

    // const addChallenge = (challenge) => {
    //     let id = state.index;
    //     const newChallenge = { ...challenge, id }
    //     setChallenges({
    //         ...state,
    //         challenges: [...state.challenges, newChallenge],
    //         index: id + 1
    //     })
    // }
    // const setSelected = (id) => {
    //     setChallenges({
    //         ...state,
    //         selected: id
    //     })
    // }

    useEffect(() => {
        localStorage.setItem('challenges', JSON.stringify(state));
    }, [state])
    useEffect(() => {
        localStorage.setItem('results', JSON.stringify(results));
    })
    const addResult = (result) => {
        setResults([...results, result])
    }
    return (
        <ChallengeContext.Provider value={{ ...state, results: [...results], dispatch, addResult }}>
            {props.children}
        </ChallengeContext.Provider>
    );
}

export default ChallengeContextProvider;