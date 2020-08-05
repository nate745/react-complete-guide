import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 26}
      ],
    });

    const [ otherState,setOtherState ] = useState('some other value')

    console.log(personsState, otherState)

    const switchNameHandler = () => {
        // console.log('Was Clicked')
        // DON'T DO THIS this.state.persons[0].name = 'Maximillion'
        setPersonsState({
          persons: [
            { name: 'Maximillian', age: 28 },
            { name: 'Manu', age: 29},
            { name: 'Stephanie', age: 27}
          ],
          otherState: personsState.otherState
        })
      };

  return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} />
        <Person 
          name ={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={this.switchNameHandler} >My Hobbies: Racing</Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }

export default app;


// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29},
//     { name: 'Stephanie', age: 26}
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {
//   // console.log('Was Clicked')
//   // DON'T DO THIS this.state.persons[0].name = 'Maximillion'
//   this.setState({
//     persons: [
//       { name: 'Maximillian', age: 28 },
//       { name: 'Manu', age: 29},
//       { name: 'Stephanie', age: 27}
//     ]
//   })
// }