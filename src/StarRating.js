import React from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating=  ()=>{

	const [rating, setRating] = React.useState(null)
	// const [hover, setHover]= React.useState(null)

	return <div className="">

		{[...Array(5)].map((star,i)=>{

			let ratingValue = i+1;

			return <label key={`star`+i}>
				<input type="radio" name ="rating" value={ratingValue} onClick={()=> rating !== ratingValue ? setRating(ratingValue): setRating(0)} />
				<FaStar 
					size={100} 
					className="star" 
					color={ratingValue <= (/*hover || */rating) ? "#ffc107 " : "e4e5e9"}
					// onMouseEnter= {()=>setHover(ratingValue)}
					// onMouseLeave= {()=>setHover(null)}
				/>
			</label>

		})}

	</div>
}

export default StarRating