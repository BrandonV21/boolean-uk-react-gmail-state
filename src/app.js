import Header from './components/header'

import initialEmails from './data/emails'

import './styles/app.css'

import { useState } from "react"

function App() {
  // Use initialEmails for state
  console.log(initialEmails)
  const [emails, setEmails] = useState(initialEmails)
  const emailsList = emails.map(renderEmail => {
    console.log('Logging:', renderEmail)
    return <li className="email">
    <div className="select">
    <input
      className="select-checkbox"
      type="checkbox"/>
    </div>
    <div className="star">
    <input
      className="star-checkbox"
      type="checkbox"
    />
    </div>
    <div className="sender">{renderEmail.sender}</div>
    <div className="title">{renderEmail.title}</div>
  </li>
  })
  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">{emailsList}</main>
    </div>
  )
}

export default App
