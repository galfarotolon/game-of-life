import React, { Component } from 'react'

import Grid from './Grid.js'
import Buttons from './Buttons.js'


export default class Main extends Component {
    constructor() {
        super();
        this.speed = 100;
        this.rows = 30;
        this.cols = 50;

        this.state = {
            generation: 0,
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        }
    }

    selectBox = (row, col) => {

        //helper function
        let gridCopy = arrayClone(this.state.gridFull);


        gridCopy[row][col] = !gridCopy[row][col]
        this.setState({
            gridFull: gridCopy
        })

    }

    seed = () => {

        //helper function
        let gridCopy = arrayClone(this.state.gridFull);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                // the higher it is multiplied by, the lower the amount of boxes seeded
                if (Math.floor(Math.random() * 10) === 1) {
                    gridCopy[i][j] = true;

                }

            }

        }
        this.setState({
            gridFull: gridCopy
        })

    }

    playButton = () => {
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.play, this.speed);

    }

    pauseButton = () => {
        clearInterval(this.intervalId);

    }

    slow = () => {
        this.speed = 500;
        this.playButton();
    }

    fast = () => {
        this.speed = 100;
        this.playButton();
    }

    clear = () => {
        let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
        this.setState({
            gridFull: grid,
            generation: 0
        })
    }

    handelSetNode = node => {
        let newGrid = this.state.nodeGrid;

        newGrid[node.x][node.y].active = !node.active;

        this.setState({
            nodeGrid: newGrid
        });
    };



    gridSize = (size) => {
        switch (size) {
            case '1':
                this.cols = 20;
                this.rows = 10;
                break;
            case '2':
                this.cols = 50;
                this.rows = 30;
                break;
            default:
                this.cols = 70;
                this.rows = 50;

        }
        this.clear();

    }


    play = () => {
        let g = this.state.gridFull;
        let g2 = arrayClone(this.state.gridFull);

        //Establish the rules of the game

        // Two for loops to go through every single box in the grid

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {

                // The count variable stores how many neighbors the current box has
                // Each cell has 8 potential neighbors
                let count = 0;

                // Checking each neighbor (8 possibilities per box)
                if (i > 0) if (g[i - 1][j]) count++;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
                if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
                if (j < this.cols - 1) if (g[i][j + 1]) count++;
                if (j > 0) if (g[i][j - 1]) count++;
                if (i < this.rows - 1) if (g[i + 1][j]) count++;
                if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
                if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;

                // Decide wether the box/cell will live or die

                // if less  than 2 or more than 3 it dies
                if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;

                // if dead and 3 neightbors, it lives
                if (!g[i][j] && count === 3) g2[i][j] = true;


            }

        }

        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
        });

    }



    componentDidMount() {
        this.seed();
        this.playButton();
    }

    render() {
        return (
            <div>

                <Buttons
                    playButton={this.playButton}
                    pauseButton={this.pauseButton}
                    slow={this.slow}
                    fast={this.fast}
                    clear={this.clear}
                    seed={this.seed}
                    gridSize={this.gridSize}

                />

                <Grid

                    gridFull={this.state.gridFull}
                    rows={this.rows}
                    cols={this.cols}
                    selectBox={this.selectBox}
                />

                <h2>Generations: {this.state.generation}</h2>

            </div>
        )
    }
}

function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr))
}