import React from 'react'

class DigitalClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval( () => {
      this.setState({
       date: new Date()
      })
    },3000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
        <span className="time">{this.state.date.toLocaleTimeString()}</span>     
    )
  }
}
export default DigitalClock