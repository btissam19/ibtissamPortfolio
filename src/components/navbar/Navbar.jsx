import React from 'react'
import "./Navbar.scss"
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'

function Navbar() {
  return (
    <div className='Navbar'>
        <Sidebar/>
        <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/ibtissam-ech-chaibi-57bb9b246/">
            <img src="/linkdin.png" alt="" />
          </a>
          <a href="https://github.com/btissam19">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.instagram.com/ibtissam_ech_chaibi/">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
    </div>
    </div>
  )
}

export default Navbar
