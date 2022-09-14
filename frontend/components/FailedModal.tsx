import React from 'react'
import Modal from './Modal'

type Props = {
    show?: boolean
    onConfirmClicked?: () => void
}

function FailedModal({ show, onConfirmClicked }: Props) {
    return (
        <Modal
            key={"failed-modal"}
            title='Shorten URL Failed'
            show={show}
            onConfirmClicked={onConfirmClicked}
        >
            <p>Please check your URL!</p>
        </Modal>
    )
}

export default FailedModal