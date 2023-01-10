import React from 'react'
import ExternalLinkFooter from './ExternalLinkFooter'
import './SocialMediaFooter.css'

const SocialMediaFooter:React.FC = () => {
  return (
    <div className="social-media">   
        <ExternalLinkFooter link='https://www.facebook.com/' icon="fa-brands fa-facebook-f" />
        <ExternalLinkFooter link='https://www.instagram.com/' icon="fa-brands fa-instagram" />
        <ExternalLinkFooter link='https://twitter.com/' icon="fa-brands fa-twitter" />
        <ExternalLinkFooter link='https://www.google.com/' icon="fa-brands fa-google" />
        <ExternalLinkFooter link='https://www.linkedin.com/' icon="fa-brands fa-linkedin" />
    </div>
  )
}

export default SocialMediaFooter