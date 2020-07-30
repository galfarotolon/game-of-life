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

                <Button variant='success' className='btn-spacing btn-success' onClick={this.props.playButton}>
                    Play
                </Button>
                <Button variant='warning' className='btn-spacing' onClick={this.props.pauseButton}>
                    Pause
                    </Button>
                <Button variant='danger' className='btn-spacing' onClick={this.props.clear}>
                    Clear
                    </Button>


                <Button variant='primary' className='btn-spacing' onClick={this.props.step}>
                    Step by Step
                    </Button>


                <DropdownButton
                    className='btn-spacing'
                    title='Patterns'
                    id='pattern-menu'
                    variant='light'
                >
                    <Dropdown.Item onClick={this.props.seed}>Seed Randomly</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.glider}> Glider </Dropdown.Item>
                    <Dropdown.Item onClick={this.props.dieHard}>Die Hard</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.pulsar}>Pulsar</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.gliderGun}>Glider Gun</Dropdown.Item>
                </DropdownButton>



                <DropdownButton
                    className='btn-spacing'
                    title='Speed Options'
                    id='speed-menu'
                    variant='light'
                >
                    <Dropdown.Item onClick={this.props.slow}>Slow</Dropdown.Item>
                    <Dropdown.Item onClick={this.props.medium}> Medium </Dropdown.Item>
                    <Dropdown.Item onClick={this.props.fast}>Fast</Dropdown.Item>
                </DropdownButton>


                <DropdownButton
                    className='btn-spacing'
                    title='Grid Size'
                    id='size-menu'
                    variant='light'
                    onSelect={this.handleSelect}

                >
                    <Dropdown.Item eventKey='1'>30x20</Dropdown.Item>
                    <Dropdown.Item eventKey='2'>50x30</Dropdown.Item>
                    <Dropdown.Item eventKey='3'>70x50</Dropdown.Item>
                </DropdownButton>


            </div>
        )
    }
}
