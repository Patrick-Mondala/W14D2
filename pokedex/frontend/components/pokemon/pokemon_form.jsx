import React from 'react';

export default class PokemonForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {name: "", attack: "", defense: "", pokeType: "", moves: [], image_url: ""};
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onChange(field) {
        return e => {
            this.setState({[field]: e.target.value});
        }
    }
    
    onSubmit(e){
        e.preventDefault();
        this.props.createPokemon(this.state);
        this.setState({ name: "", attack: "", defense: "", pokeType: "", moves: [], image_url: "" })
        
    }

    render() {
        <div class="poke-form">
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange("name")} type="text" name="pokemon[name]" placeholder="name"/>
                <input onChange={this.onChange("image_url")} type="text" name="pokemon[image_url]" placeholder="Image Url" />
                <select name="pokemon[type]">
                  <option value="fire"> fire </option>
                  <option value="electric"> electric</option>
                  <option value="normal"> normal</option>
                  <option value="ghost"> ghost</option>
                  <option value="psychic"> psychic</option>
                  <option value="water"> water</option>
                  <option value="bug"> bug</option>
                  <option value="dragon"> dragon</option>
                  <option value="grass"> grass</option>
                  <option value="fighting"> fighting</option>
                  <option value="ice"> ice</option>
                  <option value="flying"> flying</option>
                  <option value="poison"> poison</option>
                  <option value="ground"> ground</option>
                  <option value="rock"> rock</option>
                  <option value="steel"> steel</option>
                </select>
                <input type="submit" value="Create Pokeman"/>
            </form>
        </div>
    }
}