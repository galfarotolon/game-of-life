import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Controls() {

    const [show, setShow] = useState(false)

    function handleClose() {
        setShow(false)
    }

    function handleOpen() {
        setShow(true)
    }


    return (
        <div>

            <Button variant='outline-light' className='modal-btn' onClick={handleOpen} >Click for Controls</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Controls</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
            </Modal>


        </div>
    )
}

export default Controls
