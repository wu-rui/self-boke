import React from 'react'
import './css/MessageText.css'
class MessageText extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleSubmit(event) {
    this.props.addMessage(this.message.value)
    this.message.value = ''
    event.preventDefault()
  }
  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label className="wen-an">写下你的留言吧~</label>
        <input 
          type="text"
          placeholder="请输入"
          className="form-control"
          ref={(message) => { this.message = message }}
          />
          <button className="btn btn-primary m-4" type="submit">留言</button>
        </div>
      </form>
    )
  }
}

export default MessageText