import React from 'react'

function Info() {
    return (
        <div className='about-wrapper'>
            <h4>About: </h4>
            <p>The Game of Life is a cellular automaton devised by the British mathematician
            John Horton Conway in 1970. It consists of a collection of cells which,
            based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions,
            the cells form various patterns throughout the course of the game.
            It is the best-known example of a Cellular Automaton.
</p>

            <p>A Cellular Automaton is a program which operates on data sotred in a list of 'x'
            dimensions (in this case, 2D). The cells of the grid are given specific
            rules on how to act depending on the state of the grid. The rules for
            this particular game are stated in the section above.
    </p>

            <p>
                Such automatons are considered to be  "Turing Complete". This term refers to any machine which can be
                programmed to complete arbitrary, general purpose computations. Anything
                computable can be computed in The Game of Life given a large enough grid
                and enough time, assuming you use an infinite grid. We can use figures
                such as the gliders seen in the pattern section to create
                whatever we want.
            </p>
            <p>
                Finally, this game uses the concept of 'Double Buffering', which is when one buffer is displayed to the user, but the work
                is done in another buffer that is hidden from the user. In this way, the user doesn't see the buffer being generated,
                they only see the one that was previously completed. When the program finishes working on the hidden buffer,
                the buffers get swapped and show the hidden buffer to the user. Then the previously-displayed buffer becomes
                the new hidden buffer, and work begins again.

            </p>
        </div>
    )
}

export default Info
