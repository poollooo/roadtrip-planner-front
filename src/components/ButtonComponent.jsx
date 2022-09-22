import React from 'react'

const ButtonComponent = ({ width, text }) => {
    return (
        <button
            className={`bg-green-pine ${width} rounded-lg p-2 text-white border-2 border-green-pine hover:bg-white hover:text-green-pine`}
        >
            {text}
        </button>
    )
}

export default ButtonComponent