import React, { Component, useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Octocat } from './components/Octocat'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Octocat />
      </main>
      <Footer />
    </div>
  )
}

export default App
