import React from 'react'
import './Footer.css'
import SocialMediaFooter from '../components/SocialMediaFooter'

const Footer:React.FC = () => {
  return (
    <footer>
      <SocialMediaFooter />
      <div>
          <p>© 2022 Fixxo. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer