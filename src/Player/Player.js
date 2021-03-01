import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import playerData from '../fakeData/data.json';
import PlayerCart from '../PlayerCart/PlayerCart';
import PlayerCollection from '../PlayerCollection/PlayerCollection';
import './Player.css';

const Player = () => {
    const [player, setPlayer] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddTeam = (player) => {
        if (cart.includes(player)) {
            setCart(cart);
            alert("Already Added");
        } else {
            const newCart = [...cart, player];
            setCart(newCart);
        }
    }

    useEffect(() => {
        setPlayer(playerData);
    }, [])
    return (
        <div className="player-container">
            <div className="row">
                <div className="col-md-9 d-flex flex-wrap border-right justify-content-center">
                    {
                        playerData.map(player => <PlayerCollection player={player} key={player.id} handleAddTeam={handleAddTeam}></PlayerCollection>)
                    }
                </div>
                <div className="col-md-3">
                    <PlayerCart cart={cart}></PlayerCart>
                </div>
            </div>
        </div>
    );
};

export default Player;