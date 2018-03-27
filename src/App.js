import React, {Component} from 'react';
// import Header from './components/Header';
// import Counter from './components/Counter';

// import TodoMain from './components/todo/TodoMain';
import './App.css';
import Person from './components/Person/Person.js';


class App extends Component {
    state = {
        persons: [
            {
                name: 'Peter',
                age: 42
            },
            {
                name: 'Lesya',
                age: 43
            }
        ],
        showPersons: false
    };

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: event.target.value,
                    age: 42
                },
                {
                    name: 'Lesya Beldii',
                    age: 43
                }
            ]
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    };

    render() {
        const stylesheet = {
            backgroundColor: 'transparent',
            border: '1px solid #eee',
            padding: '5px',
            cursor: 'pointer',
            display: 'block',
            margin: '0 auto'
        };

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person
                            name={person.name}
                            age={person.age} />
                        }
                    )}
                    {/*<Person*/}
                        {/*name={this.state.persons[0].name}*/}
                        {/*age={this.state.persons[0].age}*/}
                        {/*changed={this.nameChangeHandler}*/}
                    {/*>*/}
                        {/*JavaScript is realy easy for me! I believe*/}
                    {/*</Person>*/}
                    {/*<Person*/}
                        {/*name={this.state.persons[1].name}*/}
                        {/*age={this.state.persons[1].age}*/}
                    {/*>*/}
                        {/*Java developer*/}
                    {/*</Person>*/}
                </div>
            )
        }

        return (
            <div>
                <h1>This is React app</h1>
                <button
                    style={stylesheet}
                    onClick={this.togglePersonsHandler}
                >Toggle persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
