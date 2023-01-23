import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {value: true}

  onChange = () => {
    this.setState(prevState => ({value: !prevState.value}))
  }

  render() {
    const {value} = this.state

    const buttonText = value ? 'login' : 'logout'
    const headingText = value ? 'Please Login' : 'Welcome User'

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">{headingText}</h1>
          <button className="button1" type="button" onClick={this.onChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
