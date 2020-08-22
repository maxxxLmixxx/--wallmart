import React from 'react'
import './Action.scss'

export default function Action({
  image = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYXKeFKxaUwRXQ3h8t2fyrHjbNHHYINPLXjQ&usqp=CAU`,
}) {
  return (
    <div className="action">
      <img src={image}></img>
    </div>
  )
}
