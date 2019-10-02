import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions'

const mapStateToProps = (state, ownProps) => {
  const pokeID = parseInt(ownProps.match.params.id);
  let poke = state.entities.pokemon[pokeID]
    // piece of state that container subscribes to
  if (poke) {
    poke = Object.assign(
      {},
      poke
    )
  }
    return {
        poke: poke,
        errors: state.errors
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const pokeID = parseInt(ownProps.match.params.id)
    return {
    requestSinglePokemon: () => dispatch(requestSinglePokemon(pokeID))// dispatch requestSinglePokemon action.
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);