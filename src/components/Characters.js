import React, { Component } from 'react';
import getRickAndMortyStuff from '../helperfuncitons.js';
export default class Characters extends Component {
    state = {
      characters: []
    }

    componentDidMount(state){
      console.log(state);

      getRickAndMortyStuff()
        .then(character => {
          this.setState({ characters : character });
        });
    }
    // componentDidUpdate(){

    // }

    render() {
      const { characters } = this.state;
      console.log(characters);
      return (<>
      </>
      );
    }
}
