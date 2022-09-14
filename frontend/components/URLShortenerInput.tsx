import React from 'react'

type Props = {
    onSubmit?: () => void
    onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function URLShortenerInput({ onSubmit, onInputChange }: Props) {
    return (
        <div className="flex flex-col w-full md:w-1/3 items-center gap-5 rounded-lg border border-gray-200 shadow-sm p-5">
            <input
                type="text"
                className="textinput"
                placeholder="https://google.com"
                onChange={onInputChange}
                required
            />
            <button
                className="btn btn-blue"
                type='button'
                onClick={onSubmit}
            >Shorten!</button>
        </div>
    )
}

export default URLShortenerInput