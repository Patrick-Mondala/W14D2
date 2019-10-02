import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ pokemon }) => (
  <li className="poke-ul" >
      <NavLink to={`/pokemon/${pokemon.id}`}>
        <span>{pokemon.id}</span>
        <img className="poke-img" src={pokemon.image_url} />
        <span>{pokemon.name}</span>
      </NavLink>
  </li>
)
