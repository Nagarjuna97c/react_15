import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  decreaseId = () => {
    const {id} = this.state

    let newId = id
    if (id !== 0) {
      newId -= 1
      this.setState({id: newId})
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  addId = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    const lengthOfReviewsList = reviewsList.length - 1

    let newId = id
    if (id !== lengthOfReviewsList) {
      newId += 1
      this.setState({id: newId})
    }
  }

  render() {
    const {reviewsList} = this.props

    const {id} = this.state

    const userReview = reviewsList[id]

    return (
      <div className="main-container">
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <div className="name-and-arrows-container">
            <button
              type="button"
              className="button"
              onClick={this.decreaseId}
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.renderActiveReview(userReview)}
            <button
              type="button"
              className="button"
              testid="rightArrow"
              onClick={this.addId}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
