import React from 'react'
import CardItem from './CardItem'

import './Cards.css'

const Cards = () => {
	return (
		<div className='cards'>
			<h1>Check out this epic destinations</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cars__items'>
						<CardItem
							src='../images/img-9.jpg'
							text='Explore the hidden waterfall deep inside the Amazon jungle'
							label='Adventure'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards
