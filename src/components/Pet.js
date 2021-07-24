import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card" key={this.props.key}>
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.name}
            {this.props.gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">{this.props.petType}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted === true && <button className="ui disabled button">Already adopted</button>}
          {this.props.isAdopted === false && <button className="ui primary button" onClick={e => this.props.handleIsAdopted(this.props.index)}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
