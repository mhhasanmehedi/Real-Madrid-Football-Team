import React from 'react';
import './PlayerCart.css';

const PlayerCart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total,player) => total + player.salary,0 );

    let playerName = [];
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        playerName.push(element);
    }
    return (
        <div className="cart-style">
            <h1>Team Info</h1>
            <p>Total Budget: ${total}</p>
            <h6>Selected Team :- {cart.length}</h6>
            <div className="border border-dark p-1 rounded">
                <div className="title">
                    <p>Player Name</p>
                    <p>Yearly Salary</p>
                </div>
                {
                    playerName.map(players => 
                    <div className="player-select">
                        <p>{players.name}</p>
                        <p>${players.salary}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default PlayerCart;