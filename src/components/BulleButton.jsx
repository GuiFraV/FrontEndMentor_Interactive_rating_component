import React from 'react'

const BulleButton = ({numero, selected, onClick}) => {
  return (
    <button
        typze="button"
        onClick={() => onClick(numero)}
        className={`duration-500 w-[51.5px] h-[50.51px] rounded-full flex items-center justify-center ${selected ? 'bg-orange text-white' : 'text-lightGrey bg-darkblue border-darkblue  hover:bg-mediumGrey hover:text-white'}`}
    >
        {numero}
    </button>
  )
}

export default BulleButton