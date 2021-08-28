import './App.css';
import axios from 'axios'
import React, {Component} from 'react'

class App extends Component {

  state = {
    endereco: {},
    cep: ''
  }

  async retornarEndereco(cep) {
    const response = await axios.get(`http://localhost:4000/`+ cep)
    this.setState({endereco: response.data || {} })
  }

  render(){
    return(
      <>
      <div className="container">
        <div className="header">
          {console.log(this.state)}
          <span>Cep:</span>
          <input value={this.state.cep} onChange={(evento)=> this.setState({cep:evento.target.value})} />
          <button onClick={() => this.retornarEndereco(this.state.cep)}>Buscar</button>
        </div>
        <div className="body">
          <field><strong>Cidade: </strong>{this.state.endereco.city}</field>
          <field><strong>Estado: </strong>{this.state.endereco.state}</field>
          <field><strong>Bairro: </strong>{this.state.endereco.neighborhood}</field>
          <field><strong>Rua: </strong>{this.state.endereco.street}</field>
        </div>
      </div>
      </>
    )
  }
}

export default App
