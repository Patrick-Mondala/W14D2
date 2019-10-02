import { connect } from 'react-redux';
import PokemonForm from './pokemon_form';
import { createPokemon } from '../../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon_detail_container';

const mapDispatchToProps = dispatch => ({
    createPokemon: pokemon => dispatch(createPokemon(pokemon))
})

export default connect(
    null,
    mapDispatchToProps
)(PokemonForm);