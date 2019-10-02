import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        return (
            <div className="poke-side">
                <ul className="poke-ul">
                    {this.props
                        .pokemon.map(pokemon => (
                            <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
                        ))}
                </ul>
            </div>
        )
    }
}