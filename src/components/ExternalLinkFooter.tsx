import React from 'react'

interface Props {
  link: string,
  icon: string
}

const ExternalLinkFooter:React.FC<Props> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i> 
    </a>
  )
}

export default ExternalLinkFooter