import React from 'react'

const NameCrad = (props) =>{
  const {name, number, isHUman, tags } = props
  return (
    <div className="alert alert-success ">
    <h1 className="alert-heading">姓名：{name}</h1>
    <ul>
      <li>电话：：{number}</li>
      <li>{ isHUman ? '人类':'外星人'}</li>
      <p>
        { tags.map((tag,index)=>(
          <span key={index} className="badge badge-pill badge-primary">{tag}</span> 
        )
        )}
      </p>
    </ul>
  </div>
  )
}
export default NameCrad