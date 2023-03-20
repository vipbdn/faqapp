import {Component} from 'react'

import './index.css'

class FaqsItem extends Component {
  state = {isFaqWatched: false}

  toggleFaq = () => {
    this.setState(prevStat => ({isFaqWatched: !prevStat.isFaqWatched}))
  }

  renderAnswer = () => {
    const {faqList} = this.props
    const {isFaqWatched} = this.state
    const {questionText, answerText} = faqList
    if (isFaqWatched === true) {
      return (
        <>
          <hr />
          <p className="answerText">{answerText}</p>
        </>
      )
    }
    return null
  }

  render() {
    const {isFaqWatched} = this.state
    const {faqList} = this.props
    const {questionText, answerText} = faqList
    const imgUrl = isFaqWatched
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const txt = isFaqWatched ? 'minus' : 'plus'

    return (
      <li className="list-container">
        <div className="lii">
          <h1 className="heading1">{questionText}</h1>
          <button type="button" className="btn" onClick={this.toggleFaq}>
            <img src={imgUrl} alt={txt} className="img" />
          </button>
        </div>
        <div>{this.renderAnswer()}</div>
      </li>
    )
  }
}

export default FaqsItem
