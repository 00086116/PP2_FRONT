import React from 'react'
import {Helmet} from 'react-helmet';
export default function SEO(prop:{title: string}): JSX.Element {
   
    return ( 
      
    <Helmet>
      <meta charSet="utf-8" />
      <title>{prop.title}</title>
    
  </Helmet>
  )
   
  }
  
