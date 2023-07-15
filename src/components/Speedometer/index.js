import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  speedUp = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }
  speedDown = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="speedo-container">
        <h1 className="speedo-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedo-img"
        />
        <h1 className="speedo-heading">
          Speed is <span>{count}</span>mph
        </h1>
        <p className="speedo-pera">Min Limit is 0mph,Max Limit is 200mph</p>
        <div className="speedo-btn-container">
          <button type="button" className="speed-acce" onClick={this.speedUp}>
            Accelerate
          </button>
          <button
            type="button"
            className="speed-break"
            onClick={this.speedDown}
          >
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
