// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNum = () => {
    this.setState({count: Math.floor(Math.random() * 100)})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNum}
          >
            Generate
          </button>
          <p className="random-number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
