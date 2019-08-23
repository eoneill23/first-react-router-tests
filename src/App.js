import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Creatures from './Creatures';
import CreatureDetails from './CreatureDetails'
import unicornsData from './data/unicorn-data';
import puppiesData from './data/puppy-data';
import sharksData from './data/shark-data';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink to='/unicorns' className='nav'>Unicorns</NavLink>
          <NavLink to='/puppies' className='nav'>Puppies</NavLink>
          <NavLink to='/sharks' className='nav'>Sharks</NavLink>
        </header>
        <Route exact path='/' component={ Home }></Route>
        <Route exact path='/unicorns' render={() => <Creatures data={ unicornsData }/>}></Route>
        <Route exact path='/puppies' render={() => <Creatures data={ puppiesData } />}></Route>
        <Route exact path='/sharks' render={() => <Creatures data={ sharksData } />}></Route>
        <Route path='/unicorns/:id' render={({ match }) => {

          let foundCreature = unicornsData.find(creature => {
            return creature.id == match.params.id
          });
          console.log(foundCreature)
          return <CreatureDetails {...foundCreature}/>
        }} />
      </main>
    );
  }
}
