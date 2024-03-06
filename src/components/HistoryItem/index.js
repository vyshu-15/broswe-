import React from 'react'

import './index.css'

const HistoryItem = props => {
  const {historyItems, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItems
  const handleDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="ListItem">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button testid="delete" onClick={handleDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
