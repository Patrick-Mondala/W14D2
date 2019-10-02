import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';

export default class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
        this.pokeId = parseInt(this.props.match.params.id);
        this.state = {}
    }

    componentDidMount(e) {
        // this.poke = this.props.requestSinglePokemon(this.pokeId);
      this.props.requestSinglePokemon(this.pokeId).then(response => {
          console.log(response.pokemon.items)
          this.setState({ poke: response.pokemon.pokemon, items: response.pokemon.items });
        })
    }

    componentDidUpdate(prevProps) {
      if (this.props.match.params.id !== prevProps.match.params.id) {
          this.props.requestSinglePokemon(this.pokeId).then(response => {
              this.setState({ poke: response.pokemon.pokemon, items: response.pokemon.items });
          })
      }
    }

    //{Object.keys(this.state.items).map(item => <ItemDetailContainer item={this.state.items[item]} />)}
    render() {
        if (this.state.poke) {
            return ( <section className="Poke-detail">
                <img src={this.state.poke.image_url}/>
                <h2>{this.state.poke.name}</h2>
                <p>Type: {this.state.poke.poke_type}</p>
                <p>Attack: {this.state.poke.attack}</p>
                <p>Defense: {this.state.poke.defense}</p>
                <p>Moves: {this.state.poke.moves.join(', ')}</p>

                <section className="poke-items">
                    <h3>Items</h3>
                    <section className='item-images'>
                        <ul>
                            {Object.values(this.state.items).map(item => (
                                <li key={item.id}><NavLink to={`/pokemon/${this.state.poke.id}/items/${item.id}`}><img src={item.image_url}></img></NavLink></li>
                            ))}
                        </ul>
                    </section> 
                    <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
                </section>
            </section>
        ) } else {
            return (
                <h1>loading...</h1>
            )
        }
    }
}