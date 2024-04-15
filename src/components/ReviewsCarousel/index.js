import {Component} from 'react'

import './index.css'

const ReviewsOut = props => {
  const {reviewsList, indexElement, indexNumber} = props

  let leftcount = 1
  const leftArrow = () => {
    if (indexNumber === 0) {
      indexElement(indexNumber)
    } else {
      const newIndex = indexNumber - leftcount

      indexElement(newIndex)
      leftcount -= 1
    }
  }

  let rightcount = 1
  const rightArrow = () => {
    if (indexNumber === reviewsList.length - 1) {
      indexElement(indexNumber)
    } else {
      const newIndex = indexNumber + rightcount
      indexElement(newIndex)
      rightcount += 1
    }
  }

  const {imgUrl, userName, companyName, description} = reviewsList[indexNumber]

  return (
    <div className="reviews-container">
      <button className="button" type="button" onClick={leftArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
          alt="left arrow"
        />
      </button>
      <div className="reviews">
        <img className="image" src={imgUrl} alt={userName} />
        <h3 className="name">{userName}</h3>
        <p>{companyName}</p>
        <p className="paragraph">{description}</p>
      </div>
      <button className="button" type="button" onClick={rightArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
          alt="right arrow"
        />
      </button>
    </div>
  )
}

class ReviewsCarousel extends Component {
  state = {indexNumber: 0}

  indexElement = newIndex => {
    this.setState({indexNumber: newIndex})
  }

  render() {
    const {indexNumber} = this.state
    const {reviewsList} = this.props
    return (
      <div className="bg-contaienr">
        <h1 className="header">Reviews</h1>
        <div className="reviews-contaienr">
          <ReviewsOut
            reviewsList={reviewsList}
            indexElement={this.indexElement}
            indexNumber={indexNumber}
          />
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
