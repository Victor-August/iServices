import { React, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Services from '../components/Services/index'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const SearchPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <ScrollToTop />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Services />
            <Footer />
        </div>
    )
}

export default SearchPage
