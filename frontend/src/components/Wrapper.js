import React from 'react'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'

export default function Wrapper({ header, navigation, children }) {
  return (
    <div className="wrapper fadeInScale">
      { header ? <Header /> : "" }
      {children}
      { navigation ? <Navigation /> : "" }
    </div>
  )
}
