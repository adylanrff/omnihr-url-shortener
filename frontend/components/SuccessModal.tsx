
import React from 'react'
import Modal from './Modal'

type Props = {
    show?: boolean
    onConfirmClicked?: () => void
    hash?: string
}

function SuccessModal({ show, onConfirmClicked, hash }: Props) {
    return (
        <Modal
            key={"success-modal"}
            title='URL Shortened!'
            show={show}
            onConfirmClicked={onConfirmClicked}
        >
            <p>You can access your URL at
                <a className="hover:underline text-blue-600 hover:text-blue-700" href={`localhost:3000/${hash}`}> localhost:3000/{hash} </a></p>
        </Modal>
    )
}

export default SuccessModal