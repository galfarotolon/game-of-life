import React from 'react'

function Rules() {
    return (


        <div className="rules-wrapper">
            <h4>Controls: </h4>
            <ul>
                <li>Press the Play button to start the sequence</li>
                <li>Press the Slow or Fast Buttons to change the speed at which Generations are created</li>
                <li>Press the Pause button to stop the current sequence in the Grid</li>
                <li>Press the Clear button to clear the current Grid Sequence and Generations</li>
            </ul>
            <h4> Rules for playing Conway's Game of Life: </h4>
            <ul>
                <li>Any live cell with fewer than two live neighbours dies, as if by needs caused by underpopulation.</li>
                <li>Any live cell with more than three live neighbours dies, as if by overcrowding.</li>
                <li>Any live cell with two or three live neighbours lives, unchanged, to the next generation.</li>
                <li>Any dead cell with exactly three live neighbours cells will come to life.</li>
                <li>Press the Seed button to populate the grid</li>
            </ul>


        </div>


    )
}

export default Rules



