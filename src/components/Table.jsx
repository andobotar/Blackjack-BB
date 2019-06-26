import React, { Component } from 'react';
import shuffle from 'lodash/shuffle';

import {fullDeck} from "../fullDeck";
import Interface from './Interface';

class Table extends Component {

    state = {
        computerHand: ['00', '00'],
        playerHand: ['00', '00'],
        message: 'Press \'Deal\' to start the game',
        playing: false
    };

    deal = () => {};

    hit = () => {};

    stand = () => {};

    countScore = (hand) => {};

    render() {

        return (
            <div>
                <Hand cards={this.state.computerHand} />
                <Interface
                    message={this.state.message}
                    deal={this.deal}
                    hit={/* TODO */}
                    stand={/* TODO */}
                    computerScore={/* TODO */}
                    playerScore={/* TODO */}
                />
                <Hand cards={this.state.playerHand} />
            </div>
        )
    }
}

export default Table;