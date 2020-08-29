import React, { useState, useEffect } from 'react'
import './Action.scss'

export default function Action({ text }) {
  const [isClicked, setClicked] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setClicked(false)
    }, 600)
  }, [isClicked])

  return (
    <div className={`server-action ${isClicked ? 'page-action-click-animation' : ''}`} onClick={() => setClicked(true)}>
      <span>{text && text}</span>
    </div>
  )
}
