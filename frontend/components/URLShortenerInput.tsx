import React, { RefObject } from 'react'

type Props = {
    inputRef?: RefObject<HTMLInputElement>
    onSubmit?: () => void
}

function URLShortenerInput({ inputRef, onSubmit }: Props) {
    return (
        <div className="flex flex-col w-full md:w-1/3 items-center gap-5 rounded-lg border border-gray-200 shadow-sm p-5">
            <input
                type="text"
                ref={inputRef}
                className="textinput"
                placeholder="https://google.com"
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