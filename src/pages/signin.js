import { React, useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import SignIn from '../components/Sigin'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SigninPage = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <SignIn />
      <Footer />
    </>
  )
}

export default SigninPage
