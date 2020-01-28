import React, { Component } from 'react';
import styles from './main.css';

export default class Character extends Component {
  render(){
    const { name, status, species, gender, origin, lastLocation, image } = this.props;
    return <>
      <div className={styles.character}>
        <img src={image}></img>
        <ul>
          <h3>{name}</h3>
        </ul>
        <ul>
          <li>STATUS</li> 
          <li>{status}</li>
        </ul>
        <ul>
          <li>SPECIES</li> 
          <li>{species}</li>
        </ul>
        <ul>
          <li>GENDER</li>
          <li>{gender}</li>
        </ul>
        <ul>
          <li>ORIGIN</li> 
          <li>{origin}</li>
        </ul>
        <ul>
          <li>LAST-LOCATION</li>
          <li>{lastLocation}</li>
        </ul>
      </div>
    </>;
  }
}
