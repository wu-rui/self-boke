import React from 'react'
import MessageText from './MessageText'
import MessageList from './MessageList'

class MessageBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      infos: []
    }
    this.addMessage = this.addMessage.bind(this)
  }
  addMessage(info) {
    this.setState({
      infos: [...this.state.infos,info]
    })
  }
  render() {
    const {infos} = this.state
    return (
      <div className="message">
        <MessageText
          addMessage={this.addMessage}
        />
        <MessageList 
          message={infos}
          messageSize={this.state.infos.length}
        />
      </div>
    )
  }
}
export default MessageBox
