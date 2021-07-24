import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    return this.props.pets.map((pet, index) => {if(pet.type === this.props.value || this.props.value === 'all'){return <Pet index={index} handleIsAdopted={this.props.handleIsAdopted} name={pet.name} petType={pet.type} age={pet.age} weight={pet.weight} isAdopted={pet.isAdopted} key={pet.id} gender={pet.gender}/>}})
  }

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
