import React, { Component } from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

import '../App.css'

export default class Buttons extends Component {

    handleSelect = (evt) => {
        this.props.gridSize(evt);
    }


    render() {
        return (
            <div className='center'>

                <Button variant='primary' className='btn-spacing' onClick={this.props.playButton}>
                    Play
                </Button>
                <Button variant='primary' className='btn-spacing' onClick={this.props.pauseButton}>
                    Pause
                    </Button>
                <Button variant='primary' className='btn-spacing' onClick={this.props.clear}>
                    Clear
                    </Button>
                <Button variant='primary' className='btn-spacing' onClick={this.props.slow}>
                    Slow
                    </Button>
                <Button variant='primary' className='btn-spacing' onClick={this.props.fast}>
                    Fast
                    </Button>
                <Button variant='primary' className='btn-spacing' onClick={this.props.seed}>
                    Seed
                    </Button>
                <DropdownButton

                    className='btn-spacing'
                    title='Grid Size'
                    id='size-menu'
                    onSelect={this.handleSelect}

                >
                    <Dropdown.Item eventKey='1'>20x10</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>50x30</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>70x50</Dropdown.Item>
                </DropdownButton>


            </div>
        )
    }
}
