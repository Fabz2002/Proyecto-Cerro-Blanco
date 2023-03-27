import './commentsSlider.css'
import { useState } from 'react'
function CommentsSlider({ comments }) {
	const [currentSlide, setCurrentSlide] = useState(0)
	const totalSlides = comments.length

	const handlePrevSlide = () => {
		setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides)
	}

	const handleNextSlide = () => {
		setCurrentSlide((currentSlide + 1) % totalSlides)
	}

	return (
		<div className="testimonial-slider">
			<div
				className="testimonial-container"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{comments.map((testimonial, index) => (
					<div className="testimonial-slide" key={index}>
						<div className="testimonial-content">
							<p className="testimonial-text">{testimonial.comment}</p>
							<h2 className="testimonial-author">{testimonial.name}</h2>
						</div>
					</div>
				))}
			</div>
			<button className="testimonial-button" onClick={handlePrevSlide}>
				{'<'}
			</button>
			<button className="testimonial-button" onClick={handleNextSlide}>
				{'>'}
			</button>
		</div>
	)
}
export default CommentsSlider
