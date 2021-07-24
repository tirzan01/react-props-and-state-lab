import React from 'react'

import Filters from './Filters'
import Pet from './Pet'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all',
        newType: 'all'
      }
    }
  }

  fetchAnimal = () => {
    if(this.state.pets.length === 0){
    fetch('/api/pets')
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
        this.setState({
          pets: [...json],
        })
      })
      return 
    }
      this.setState({
        pets: this.state.pets,
        filters:{
          ...this.state.filters,
          type: this.state.filters.newType
        }
      })
  }

  filterAnimalType = newValue => {
    this.setState({
      filters: {
        ...this.state.filters,
        newType: newValue
      }
    })
  }

  handleIsAdopted = index => {
    console.log('adopted')
    this.state.pets[index].isAdopted = true
    this.setState({
      pets: this.state.pets
    })
  }

  render() {
    return (
      
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filterAnimalType={this.filterAnimalType} fetchAnimal={this.fetchAnimal} confirmFilterAnimalType={this.props.confirmFilterAnimalType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser value={this.state.filters.type} pets={this.state.pets} handleIsAdopted={this.handleIsAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
