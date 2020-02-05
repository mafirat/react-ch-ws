import React,{useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const ScoreCard = ({ value, type }) => {
    const theme = useContext(ThemeContext).getTheme();
    return (
        <div className={`card ${theme.score} border-${type.bgcolor} col p-0 text-center`}>
            <div className="card-header p-0">
                <h4 className="card-title">{type.title}</h4>
            </div>
            <div className="card-body">
                <p className="card-text">{`${value.toFixed(type.fixed)} ${type.unit}`}</p>
            </div>
        </div>
    );
}

export default ScoreCard;