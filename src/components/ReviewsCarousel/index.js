import {Component} from 'react'

import './index.css'

const ReviewsOut = props => {
  const {
    reviewsDetailsList,
    updateWithRightClick,
    updateWithLeftClick,
    usernameDetails,
  } = props

  const reviewsItem = reviewsDetailsList.filter(
    eachItem => usernameDetails === eachItem.username,
  )
  console.log(reviewsItem)
  const indexDetails = reviewsDetailsList.indexOf(...reviewsItem)

  const review = reviewsDetailsList[indexDetails]
  const {imgUrl, username, companyName, description} = review

  const leftArrow = () => {
    let newReview = ''
    if (indexDetails !== 0) {
      newReview = reviewsDetailsList[indexDetails - 1]
    }
    updateWithLeftClick(newReview.username)
  }

  const rightArrow = () => {
    let newReview = ''
    if (indexDetails !== reviewsDetailsList.length - 1) {
      newReview = reviewsDetailsList[indexDetails + 1]
    }
    updateWithRightClick(newReview.username)
  }

  return (
    <li className="reviews">
      <img className="image" src={imgUrl} alt={username} />
      <div className="username-button-container">
        <button
          className="button"
          type="button"
          onClick={leftArrow}
          date-testid={leftArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <p className="name">{username}</p>
        <button
          className="button"
          type="button"
          onClick={rightArrow}
          date-testid={rightArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
      <p>{companyName}</p>
      <p className="paragraph">{description}</p>
    </li>
  )
}

class ReviewsCarousel extends Component {
  state = {username: 'Wade Warren'}

  updateWithLeftClick = usernameId => {
    if (usernameId !== undefined) {
      this.setState({username: usernameId})
    }
  }

  updateWithRightClick = usernameId => {
    if (usernameId !== undefined) {
      this.setState({username: usernameId})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {username} = this.state

    return (
      <div className="bg-container">
        <h1 className="header">Reviews</h1>
        <ul className="reviewItem-container">
          <ReviewsOut
            updateWithRightClick={this.updateWithRightClick}
            updateWithLeftClick={this.updateWithLeftClick}
            reviewsDetailsList={reviewsList}
            usernameDetails={username}
          />
        </ul>
      </div>
    )
  }
}

export default ReviewsCarousel
