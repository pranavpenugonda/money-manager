import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialHistoryList = []
// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    historyList: initialHistoryList,
    yourIncome: 0,
    yourExpenses: 0,
    yourBalance: 0,
  }

  onDeleteTransaction = id => {
    const {historyList} = this.state
    const deletedTransaction = historyList.find(
      transaction => transaction.id === id,
    )
    const {type, amount} = deletedTransaction
    const intAmount = parseInt(amount)

    if (type === 'Income') {
      this.setState(prevState => ({
        historyList: prevState.historyList.filter(
          transaction => transaction.id !== id,
        ),
        yourIncome: prevState.yourIncome - intAmount,
        yourBalance: prevState.yourBalance - intAmount,
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        historyList: prevState.historyList.filter(
          transaction => transaction.id !== id,
        ),
        yourExpenses: prevState.yourExpenses - intAmount,
        yourBalance: prevState.yourBalance + intAmount,
      }))
    }
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {title, amount, type} = this.state
    const intAmount = parseInt(amount)

    if (type === 'Income') {
      this.setState(prevState => ({
        historyList: [
          ...prevState.historyList,
          {id: uuidv4(), title, amount, type},
        ],
        title: '',
        amount: '',
        yourIncome: prevState.yourIncome + intAmount,
        yourBalance: prevState.yourBalance + intAmount,
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        historyList: [
          ...prevState.historyList,
          {id: uuidv4(), title, amount, type},
        ],
        title: '',
        amount: '',
        yourExpenses: prevState.yourExpenses + intAmount, // Update yourExpenses and yourBalance
        yourBalance: prevState.yourBalance - intAmount,
      }))
    }
  }

  onSelectType = event => {
    // console.log(event.target.value)

    this.setState({type: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  render() {
    const {
      historyList,
      title,
      amount,
      yourBalance,
      yourIncome,
      yourExpenses,
    } = this.state
    // console.log(type)
    return (
      <div className="bg-container">
        <div className="name-card">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="greeting-txt">
            Welcome back to your{' '}
            <span className="money-manager-txt">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          yourBalance={yourBalance}
          yourIncome={yourIncome}
          yourExpenses={yourExpenses}
        />
        <div className="bottom-container">
          <div className="add-transaction-card">
            <h1 className="add-app-heading">Add Transaction</h1>
            <form className="form-element" onSubmit={this.onAddTransaction}>
              <label className="input-element-title" htmlFor="title">
                TITLE
              </label>
              <input
                value={title}
                id="title"
                type="text"
                placeholder="TITLE"
                className="input-element"
                onChange={this.onChangeTitle}
              />
              <label className="input-element-title" htmlFor="amount">
                AMOUNT
              </label>
              <input
                value={amount}
                id="amount"
                type="text"
                placeholder="AMOUNT"
                className="input-element"
                onChange={this.onChangeAmount}
              />
              <label className="input-element-title" htmlFor="type">
                TYPE
              </label>
              <select className="input-element" onChange={this.onSelectType}>
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.displayText}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="add-app-heading">History</h1>
            <div className="bottom-sub-container">
              <p className="history-cont-sub-heading">Title</p>
              <p className="history-cont-sub-heading">Amount</p>
              <p className="history-cont-sub-heading">Type</p>
            </div>
            <ul className="ul-container">
              {historyList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transactionDetails={eachTransaction}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
