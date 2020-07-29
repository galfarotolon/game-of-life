import React from 'react'

function Rules() {
    return (


        <div className="rules-wrapper">
            <h4>Controls: </h4>
            <ul>
                <li>Press the Play button to start the sequence</li>
                <li>Press the Pause button to stop the current sequence in the Grid</li>
                <li>Press the Clear button to clear the current Grid Sequence and Generations.</li>
                <li>Press the Step by Step button to increment generations by one at a time.</li>
                <li>Press the Patterns button to choose between a randomly generated pattern or some well-known preset patterns.</li>
                <li>Press the Speed Options button to change the speed at which Generations are created.</li>
                <li>Press the Grid Size button to choose between several grid sizes.</li>
                <li><strong><em>You can create new live cells by clicking the squares at any given time. Best to
                create new cells when the generations are paused.</em></strong></li>
            </ul>
            <h4> Rules for playing Conway's Game of Life: </h4>
            <ul>
                <li>Any live cell with fewer than two live neighbours dies, as if by needs caused by underpopulation.</li>
                <li>Any live cell with more than three live neighbours dies, as if by overcrowding.</li>
                <li>Any live cell with two or three live neighbours lives, unchanged, to the next generation.</li>
                <li>Any dead cell with exactly three live neighbours cells will come to life.</li>

            </ul>


        </div>


    )
}

export default Rules



