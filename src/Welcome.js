import React from 'react'

class Welcome extends React.Component {
  render() {
    const todoList = ['1', '2']
    return (
      <div>
        <h1> fmeo </h1>
        <ul>
          {
            todoList.map(item =>
              <li> {item} </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default Welcome