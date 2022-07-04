import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post 
          author="Caroline Maia"
          content="Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator."/>
        <Post 
          author="Diego"
          content="Post muito legal"/>
        </main>
      </div>
    </div>
  )
}
