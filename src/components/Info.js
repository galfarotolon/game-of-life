import React from 'react'

function Info() {
    return (
        <div className='about-wrapper'>
            <h4>About: </h4>
            <p>The Game of Life is a cellular automaton devised by the British mathematician
            John Horton Conway in 1970. It is the best-known example of a Cellular Automaton.
</p>

            <p>A Cellular Automaton is a program which operates on data sotred in a list of 'x'
            dimensions (in this case, 2D). The cells of the grid are given specific
            rules on how to act depending on the state of the grid. The rules for
            this particular game are stated in the section above.
    </p>
        </div>
    )
}

export default Info
