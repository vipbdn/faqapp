import {Component} from 'react'
import FaqsItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">FAQS</h1>
          <ul className="ul-container">
            {faqsList.map(eachItem => (
              <FaqsItem faqList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
