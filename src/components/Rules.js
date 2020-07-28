import React, { Component } from 'react'


class Rules extends Component {

    render() {
        return (
            <div className="rules-wrapper">
                <h4> Rules for playing Conway's Game of Life: </h4>
                <ul>
                    <li>Any live cell with fewer than two live neighbours dies, as if by needs caused by underpopulation.</li>
                    <li>Any live cell with more than three live neighbours dies, as if by overcrowding.</li>
                    <li>Any live cell with two or three live neighbours lives, unchanged, to the next generation.</li>
                    <li>Any dead cell with exactly three live neighbours cells will come to life.</li>
                </ul>

            </div>
        );
    }
}


export default Rules;