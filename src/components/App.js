import React from 'react';
import styles from './App.css';
import MainStyle from './main.css';
import Character from './character.js';
import { arrayOf } from 'prop-types';
import Characters from './Characters';
const Header = () => (
  <header className={styles.Header}>
    <nav>
      <ul>
        <li><a className={styles.active} href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Documentation</a></li>
      </ul>
    </nav>
    <section>
      <h1>The Rick And Morty Api</h1>
      <h2>Hey, did you ever want to hold a Terry fold?</h2>
    </section>
  </header>
);

const Footer = () => (
  <footer className={styles.Footer}>
    <section className={styles.stats}>
      <p>Characters: 493</p>
      <p>Locations: 76</p>
      <p>Episodes: 31</p>
    </section>
    <section className={styles.acknowledgment}>
      <p>❮❯ by <a href="#">Axel Fuhrmann</a> 2020</p>
    </section>
  </footer>
);

const App = () => (
  <React.Fragment>
    <Header />
    <div className={MainStyle.characters}>
      <Character image = 'https://placekitten.com/200/200' name = 'Big Head Morty' status = 'unknown' species = 'Human, Human with giant head' gender = 'male' origin = 'unknown' lastLocation = 'Citadel of Ricks' />
      <Character image = 'https://placekitten.com/200/200' name = 'Commander Rick' status = 'Dead' species = 'Human' gender = 'male' origin = 'unknown' lastLocation = 'Citadel of Ricks' />
      <Character image = 'https://placekitten.com/200/200' name = 'Gene' status = 'Alive' species = 'Human' gender = 'male' origin = 'Earth (Replacement Dimention)' lastLocation = 'Earth (Replacement Dimention)' />
      <Character image = 'https://placekitten.com/200/200' name = 'Big Head Morty' status = 'unknown' species = 'Human, Human with giant head' gender = 'male' origin = 'unknown' lastLocation = 'Citadel of Ricks' />
      <Character image = 'https://placekitten.com/200/200' name = 'Big Head Morty' status = 'unknown' species = 'Human, Human with giant head' gender = 'male' origin = 'unknown' lastLocation = 'Citadel of Ricks' />
      <Character image = 'https://placekitten.com/200/200' name = 'Big Head Morty' status = 'unknown' species = 'Human, Human with giant head' gender = 'male' origin = 'unknown' lastLocation = 'Citadel of Ricks' />
      <Character image = 'https://placekitten.com/200/200' name = 'Big Head Morty' status = 'unknown' species = 'Human, Human with giant head' gender = 'male' origin = 'unknown' lastLocation = 'Citadel of Ricks' />
      <Character image = 'https://placekitten.com/200/200' name = 'Big Head Morty' status = 'unknown' species = 'Human, Human with giant head' gender = 'male' origin = 'unknown' lastLocation = 'Citadel of Ricks' />
    </div>
    <Footer />
    <Characters />
  </React.Fragment>
);

export default App;
