import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post author="Caroline Maia" content="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."/>
      <Post author="Diego" content="Post muito legal"/>
    </div>
  )
}
