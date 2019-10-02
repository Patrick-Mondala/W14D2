import { connect } from 'react-redux';
import { selectAllPokemon } from '../../reducers/selectors';
import { requestAllPokemon, requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
    // piece of state that container subscribes to
    pokemon: selectAllPokemon(state),
    errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    requestAllPokemon: () => dispatch(requestAllPokemon()),// dispatch requestAllPokemon action.
    requestSinglePokemon: pokemon => dispatch(requestSinglePokemon(pokemon))// dispatch requestAPokemon action.
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonIndex);