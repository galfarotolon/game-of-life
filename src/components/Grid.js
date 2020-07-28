import React, { Component } from 'react'

import Box from './Box.js'


export default class Grid extends Component {


    render() {

        // multiply number of columns by box size in px
        const width = (this.props.cols * 14);
        let rowsArr = [];


        // Nested loops to ensure all boxes are accounted for (rows x cols)
        for (let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.cols; j++) {


                //create an unique id per box depending on row / col position
                let boxId = i + "_" + j;

                // applies different styling to boxes depending if on or off 
                let boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off';

                rowsArr.push(
                    <Box
                        boxClass={boxClass}
                        key={boxId}
                        boxId={boxId}
                        row={i}
                        col={j}
                        selectBox={this.props.selectBox}

                    />
                )
            }

        }

        return (



            <div className='grid' style={{ width: width }}>
                {rowsArr}
            </div>
        )
    }
}
