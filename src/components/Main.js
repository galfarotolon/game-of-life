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
                if (Math.floor(Math.random() * 8) === 1) {
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

    medium = () => {
        this.speed = 300;
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


    gridSize = (size) => {
        switch (size) {
            case '1':
                this.cols = 30;
                this.rows = 20;
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


    step = () => {
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

                //pause it and make it go step by step
                if (g[i][j] === false && g2[i][j] === false) this.pauseButton();


            }

        }

        this.setState({
            gridFull: g2,
            generation: this.state.generation + 1
        });

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


    // Preset patterns

    glider = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[3][1] = true;
        gridCopy[3][2] = true;
        gridCopy[3][3] = true;
        gridCopy[2][3] = true;
        gridCopy[1][2] = true;

        this.setState({
            gridFull: gridCopy
        });
    }

    dieHard = () => {
        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[7][26] = true;
        gridCopy[8][20] = true;
        gridCopy[8][21] = true;
        gridCopy[9][21] = true;
        gridCopy[9][25] = true;
        gridCopy[9][26] = true;
        gridCopy[9][27] = true;

        this.setState({
            gridFull: gridCopy
        });
    }


    pulsar = () => {
        let gridCopy = arrayClone(this.state.gridFull);

        gridCopy[2][19] = true;
        gridCopy[2][20] = true;
        gridCopy[2][21] = true;
        gridCopy[2][25] = true;
        gridCopy[2][26] = true;
        gridCopy[2][27] = true;

        gridCopy[4][17] = true;
        gridCopy[4][22] = true;
        gridCopy[4][24] = true;
        gridCopy[4][29] = true;

        gridCopy[5][17] = true;
        gridCopy[5][22] = true;
        gridCopy[5][24] = true;
        gridCopy[5][29] = true;

        gridCopy[6][17] = true;
        gridCopy[6][22] = true;
        gridCopy[6][24] = true;
        gridCopy[6][29] = true;

        gridCopy[7][19] = true;
        gridCopy[7][20] = true;
        gridCopy[7][21] = true;
        gridCopy[7][25] = true;
        gridCopy[7][26] = true;
        gridCopy[7][27] = true;

        gridCopy[9][19] = true;
        gridCopy[9][20] = true;
        gridCopy[9][21] = true;
        gridCopy[9][25] = true;
        gridCopy[9][26] = true;
        gridCopy[9][27] = true;

        gridCopy[10][17] = true;
        gridCopy[10][22] = true;
        gridCopy[10][24] = true;
        gridCopy[10][29] = true;

        gridCopy[11][17] = true;
        gridCopy[11][22] = true;
        gridCopy[11][24] = true;
        gridCopy[11][29] = true;

        gridCopy[12][17] = true;
        gridCopy[12][22] = true;
        gridCopy[12][24] = true;
        gridCopy[12][29] = true;

        gridCopy[14][19] = true;
        gridCopy[14][20] = true;
        gridCopy[14][21] = true;
        gridCopy[14][25] = true;
        gridCopy[14][26] = true;
        gridCopy[14][27] = true;

        this.setState({
            gridFull: gridCopy
        });
    }

    gliderGun = () => {

        let gridCopy = arrayClone(this.state.gridFull);
        gridCopy[5][1] = true;
        gridCopy[5][2] = true;
        gridCopy[6][1] = true;
        gridCopy[6][2] = true;

        gridCopy[3][13] = true;
        gridCopy[3][14] = true;
        gridCopy[4][12] = true;
        gridCopy[4][16] = true;
        gridCopy[5][11] = true;
        gridCopy[5][17] = true;
        gridCopy[6][11] = true;
        gridCopy[6][15] = true;
        gridCopy[6][17] = true;
        gridCopy[6][18] = true;
        gridCopy[7][11] = true;
        gridCopy[7][17] = true;
        gridCopy[8][12] = true;
        gridCopy[8][16] = true;
        gridCopy[9][13] = true;
        gridCopy[9][14] = true;

        gridCopy[1][25] = true;
        gridCopy[2][23] = true;
        gridCopy[2][25] = true;
        gridCopy[3][21] = true;
        gridCopy[3][22] = true;
        gridCopy[4][21] = true;
        gridCopy[4][22] = true;
        gridCopy[5][21] = true;
        gridCopy[5][22] = true;
        gridCopy[6][23] = true;
        gridCopy[6][25] = true;
        gridCopy[7][25] = true;

        gridCopy[3][35] = true;
        gridCopy[3][36] = true;
        gridCopy[4][35] = true;
        gridCopy[4][36] = true;


        this.setState({
            gridFull: gridCopy
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
                    medium={this.medium}
                    fast={this.fast}
                    clear={this.clear}
                    seed={this.seed}
                    gridSize={this.gridSize}
                    step={this.step}
                    glider={this.glider}
                    dieHard={this.dieHard}
                    pulsar={this.pulsar}
                    gliderGun={this.gliderGun}


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
