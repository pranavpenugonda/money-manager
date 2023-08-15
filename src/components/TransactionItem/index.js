// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const handleDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="list-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button
        type="button"
        className="dlt-btn"
        data-testid="delete"
        onClick={handleDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="dlt-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
