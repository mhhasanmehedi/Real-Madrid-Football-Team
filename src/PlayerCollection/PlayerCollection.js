import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './PlayerCollection.css';

const PlayerCollection = (props) => {
    const {name,image,salary,nationality,club} = props.player;
    return (
        <div className="single-player-box">            
            <img src={image} alt=""/>
            <h4>{name}</h4>
            <h6>Club : {club}</h6>
            <p>Nationality : {nationality}</p>
            <p>Annual Salary: ${salary}</p>
            <button onClick={() => props.handleAddTeam(props.player)}><span><FontAwesomeIcon icon={faUserPlus} /></span> Add to Team</button>
        </div>
    );
};

export default PlayerCollection;