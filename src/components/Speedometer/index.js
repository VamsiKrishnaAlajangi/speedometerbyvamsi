import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="Speedometer"
          />
          <h1 className="speed">
            Speed is <span className="speedinkm">{speed}</span>mph
          </h1>
          <p className="limit">Min Limit 0mph, Max Limit 200mph</p>
          <div className="button-container">
            <button
              className="accelerate-button"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="apply-brake"
              type="button"
              onClick={this.onBrake}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
