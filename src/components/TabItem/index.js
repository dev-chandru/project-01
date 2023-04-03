import './index.css'

const TabItem = props => {
  const {tabDetails, onUpdateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickingButton = () => {
    onUpdateActiveTabId(tabId)
  }

  const activeIdClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickingButton}
        className={`tab-btn ${activeIdClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
