// Write your JS code here
import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {first: '', second: '', status: false, show1: false, show2: false}

  onFirst = event => {
    this.setState({first: event.target.value})
  }

  onSecond = event => {
    this.setState({second: event.target.value})
  }

  onApplied = event => {
    event.preventDefault()
    const {second, first} = this.state
    if (second.length > 0 && first.length > 0) {
      this.setState({status: true, first: '', second: ''})
    }
    if (second.length === 0) {
      this.setState({show2: true})
    }
    if (first.length === 0) {
      this.setState({show1: true})
    }
  }

  onAnother = () => {
    this.setState({status: false, show1: false, show2: false})
  }

  onFisrtName = () => {
    const {first, second} = this.state
    if (second.length > 0 && first.length > 0) {
      this.setState({show1: false, show2: false})
    } else if (first.length === 0) {
      this.setState({show1: true})
    }
  }

  onLastName = () => {
    const {first, second} = this.state
    if (second.length > 0 && first.length > 0) {
      this.setState({show1: false, show2: false})
    } else if (second.length === 0) {
      this.setState({show2: true})
    }
  }

  render() {
    const {first, second, status, show1, show2} = this.state
    const head1 = show1 ? 'on-none' : ''
    const head2 = show2 ? 'on-none' : ''
    const data1 = (
      <form className="form-box" onSubmit={this.onApplied}>
        <label htmlFor="first">FIRST NAME</label>
        <input
          className={head1}
          type="text"
          value={first}
          id="first"
          placeholder="First name"
          onChange={this.onFirst}
          onBlur={this.onFisrtName}
        />
        {show1 ? <p className="para">Required</p> : ''}

        <label htmlFor="last">LAST NAME</label>
        <input
          className={head2}
          type="text"
          value={second}
          id="last"
          placeholder="Last name"
          onChange={this.onSecond}
          onBlur={this.onLastName}
        />
        {show2 ? <p className="para">Required</p> : ''}
        <div className="btn-box">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    )
    const data2 = (
      <div className="form-box box-text">
        <img
          className="ima"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <div className="btn-box">
          <button className="btn" onClick={this.onAnother}>
            Submit Another response
          </button>
        </div>
      </div>
    )

    return (
      <div className="box">
        <h1>Registration</h1>

        {status ? data2 : data1}
      </div>
    )
  }
}

export default RegistrationForm
