import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Accelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  Brake = () => {
    this.setState(prevState =>
      prevState.count < 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">Speedometer</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="Speedometer"
          />
          <h2 className="heading2">
            Speed is <span>{count}mph</span>
          </h2>
          <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div>
            <button
              className="button btn1"
              onClick={this.Accelerate}
              type="button"
            >
              Accelerate
            </button>
            <button className="button btn2" onClick={this.Brake} type="button">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
