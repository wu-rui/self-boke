import React from 'react'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <label>留言板</label>
        {
          this.props.message.map((info,index) => 
          <div key={index}>{info}</div>
          )  
        }
        <p>共有{this.props.messageSize}条留言</p>
 
      </div>
    )
  }
}

export default MessageList


// const MessageBox = ( { comments } ) => {
//     return (
//         <div className="">
//             <label>留言列表</label>
//             <ul>
//                 {
//                     comments.map((comment,index) => 
//                         <li key={index}>{comment}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }