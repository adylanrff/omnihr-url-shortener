import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import FailedModal from '../components/FailedModal'
import Modal from '../components/Modal'
import SuccessModal from '../components/SuccessModal'
import URLShortenerInput from '../components/URLShortenerInput'
import { URLShortenerService } from '../services/URLShortener'

const Home: NextPage = () => {

  // Modals
  const [shouldShowSuccessModal, setShouldShowSuccessModal] = useState(false)
  const [shouldShowFailedModal, setShouldShowFailedModal] = useState(false)
  const onSuccessModalConfirmClicked = () => {
    setShouldShowSuccessModal(false)
  }
  const onFailedModalConfirmClicked = () => {
    setShouldShowFailedModal(false)
  }

  // URL Shorteners
  const [url, setUrl] = useState("")
  const [hash, setHash] = useState("")

  const onURLShortenerSubmit = () => {
    const service = new URLShortenerService()
    service.shortenURL({
      full_url: url
    }).then((data) => {
      setHash(data.hash || "")
      setShouldShowSuccessModal(true)
    }).catch((data) => {
      console.error(data)
      setShouldShowFailedModal(true)
    })
  }

  const onURLShortenerInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUrl(e.target.value)
  }

  return (
    <div className="p-0 ">
      <Head>
        <title>OmniHR URL Shortener</title>
        <meta name="description" content="OmniHR URL Shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-auto self-center p-4 min-h-screen flex">
        <div className='m-auto w-full flex flex-col items-center gap-12'>
          <h1 className="md:text-5xl text-4xl font-bold text-gray-800 text-center">
            OmniHR URL Shortener
          </h1>

          <URLShortenerInput
            onSubmit={onURLShortenerSubmit}
            onInputChange={onURLShortenerInputChange}
          />
        </div>
      </main >

      <footer className="m-auto text-center p-4 underline">
        Made by <a href='https://github.com/adylanrff'>Adylan Roaffa</a>
      </footer>

      <SuccessModal
        show={shouldShowSuccessModal}
        onConfirmClicked={onSuccessModalConfirmClicked}
        hash={hash}
      />

      <FailedModal
        show={shouldShowFailedModal}
        onConfirmClicked={onFailedModalConfirmClicked}
      />
    </div >
  )
}

export default Home
