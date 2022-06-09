import React from 'react';
import { AiFillStar } from 'react-icons/ai';
    
function Item({
  image, title, rating, price, discount, saving,
}) {
  return (
    <div className="item-div bg-white p-5 rounded-md flex flex-col flex-1 md2:flex-row">
      <img className="max-h-52 w-full object-contain mb-12 md2:w-1/3 md2:mr-6" src={image} alt="Monitor" />
      <div className="text-container">
        <p className='product-title' >{title}</p>
        <div className="ratings flex">
          {Array(rating)
            .fill()
            .map(() => <AiFillStar className="text-orange-400 text-lg" />)
             }
        </div>
        <div className="flex items-center gap-4">
          <h1 className="text-red-700 font-semibold text-xl">{price}</h1>
          <span>{discount} Off</span>
        </div>
        <p>
          <span className="bg-green-500 mr-1">
            Save
            {' '}
            <span>{saving}</span>
            {' '}
          </span>
          with coupon
        </p>
        <p>Save extra with No Cost EMI</p>
        <div className="flex items-center">
          <img className="h-8" src="https://m.media-amazon.com/images/G/01/prime/marketing/slashPrime/amazon-prime-delivery-checkmark._CB659998231_.png" alt="" />
          {' '}
          <span>
            Get
            {' '}
            <strong>FREE</strong>
            {' '}
            delivery
          </span>
        </div>
        <button className='addtocart' >Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
