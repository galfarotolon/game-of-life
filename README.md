# Game-of-Life

- Conway's game of life project for Lambda School
- This app uses Javascript/React 
- Class Components to handle state
- Functional Components for components that don't need state management
- This project uses minimal dependencies. All the React dependencies that come by default, and react-bootstrap to style the application.


## How to use the game

- Fork and clone the repo to your desired directory
- Once cloned, make sure to cd into 'game-of-life' directory
- run the 'npm i' command in the terminal to install all the dependencies used in the project
- Once installed, run npm start in the terminal to initialize the application
- The game is now operational. Have fun!

- Deployed version here --> https://game-of-life-steel.vercel.app/

## Structure

- All the app is rendered in App.js
- Main.js contains all the game logic and button functionality
- Grid.js takes care of the actual display of the grid and the variable grid size
- Box.js contains individual box or square state, such as dead or true, and neighbor awareness
- Buttons.js handles the display and visualization of the buttons
- Controls.js is a functional component that explains the controls of the game. Uses a modal from react-bootstrap to show/hide information. 
- Rules.js is a functional component that only explains game rules. Uses a modal from react-bootstrap to show/hide information. 
- Info.js briefly talks about the Author of the  game, and explains what cellular automata are. This section also describes the term 'Turing Completeness', and the term 'double buffering' and why it is useful in this situation. Uses a modal from react-bootstrap to show/hide information. 
- Footer.js contains a small footer for the app to make it look more complete and professional



## Ways to improve the game:

- Make it so the preset patterns always appear in the center of the grid(depending on grid size)
- Make a wrapper so alive cells keep going through the other side
- Make generations stop once all cells die


