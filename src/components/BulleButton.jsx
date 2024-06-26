import React from 'react'

const BulleButton = ({numero, selected, onClick}) => {
  return (
    <button
        type="button"
        onClick={() => onClick(numero)}
        className={`duration-500 lg:w-[51.5px] lg:h-[50.51px] rounded-full flex items-center justify-center xs:w-[42px] xs:h-[42px] ${selected ? 'bg-orange text-white' : 'text-lightGrey bg-darkblue border-darkblue  hover:bg-mediumGrey hover:text-white'}`}
    >
        {numero}
    </button>
  )
}

export default BulleButton