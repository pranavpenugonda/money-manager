// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {yourBalance, yourIncome, yourExpenses} = props

  return (
    <div className="money-details-container">
      <div className="money-card1">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="money-container">
          <p className="balance-txt">Your Balance</p>
          <p
            className="money-txt"
            data-testid="balanceAmount"
          >{`Rs ${yourBalance}`}</p>
        </div>
      </div>
      <div className="money-card2">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="money-container">
          <p className="balance-txt">Your Income</p>
          <p
            className="money-txt"
            data-testid="incomeAmount"
          >{`Rs ${yourIncome}`}</p>
        </div>
      </div>
      <div className="money-card3">
        <img
          className="money-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="money-container">
          <p className="balance-txt">Your Expenses</p>
          <p
            className="money-txt"
            data-testid="expensesAmount"
          >{`Rs ${yourExpenses}`}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
