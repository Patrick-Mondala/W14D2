import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from '../components/pokemon/pokemon_index_container';
import { HashRouter, Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

//Root
export default ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <div className="poke-root">
                <Route path="/" component={PokemonIndexContainer} />
                <Route path="/pokemon/:id" component={PokemonDetailContainer} />
            </div>
        </HashRouter>
    </Provider>
);