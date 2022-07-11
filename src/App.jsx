import { useState } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';


// author: {avatar_url: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-01 20:00:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/CarolMaiaP.png',
      name: 'Caroline Maia',
      role: 'Desenvolovedora Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae rutrum sem. Etiam a euismod tellus. Morbi maximus ut orci ac tincidunt. Ut at velit vitae nisl imperdiet sodales ac sed lacus. Suspendisse pharetra sagittis tellus. 🚀' },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-07-11 16:45:00'),
  },
];

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
