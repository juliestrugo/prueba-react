import React, { Component } from 'react'
import axios from 'axios';
export class App extends Component {
  state = {
    ubicaciones: []
  }
  componentDidMount = async () => {
    const { data } = await axios.get('http://localhost:3000/home');
    console.log(data);
    this.setState({
      ubicaciones: data
    })
  }
  click = async () => {
    try {
      const { data } = await axios.post('http://localhost:3000/home', {
        
          "nombre" : "manuela",
          "latitud": 762134578145,
          "longitud": 873693,
          "descripcion" : "una desc",
          "contacto" : "contaco",
          "tipo" : "perro",
          "creador" : "alguien"
          
      })
      console.log(data);

    } catch (error) {
      console.error(error.response.data.message)
    }
  }
  render() {
    return (
      <div>
        {this.state.ubicaciones.map((ubi) => {
          return (
            <div key={ubi._id}>
              {ubi.nombre} {' - '}
              {ubi.descripcion}
            </div>
          )
        })}
        <button onClick={() => this.click()}>
          Holis
        </button>
      </div>
    )
  }
}

export default App
