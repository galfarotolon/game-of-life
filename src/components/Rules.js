import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Rules() {

    const [show, setShow] = useState(false)

    function handleClose() {
        setShow(false)
    }

    function handleOpen() {
        setShow(true)
    }



    return (


        <div>


            <Button variant='outline-light' className='modal-btn' onClick={handleOpen} >Click for Rules</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Rules for playing Conway's Game of Life</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>Any live cell with fewer than two live neighbours dies, as if by needs caused by underpopulation.</li>
                        <li>Any live cell with more than three live neighbours dies, as if by overcrowding.</li>
                        <li>Any live cell with two or three live neighbours lives, unchanged, to the next generation.</li>
                        <li>Any dead cell with exactly three live neighbours cells will come to life.</li>

                    </ul>
                </Modal.Body>
            </Modal>




        </div >


    )
}

export default Rules



