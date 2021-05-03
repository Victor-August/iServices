import { React, useState } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import CadForm from '../components/Form'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



const UserRegisterPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <CadForm />
            <Footer />
        </>
    )
}

export default UserRegisterPage
