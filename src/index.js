/* eslint-disable jsx-a11y/alt-text */
// Sin React
/* const element = document.createElement('h1');
element.innerText = 'Hola Mundo';
const container = document.getElementById('root');
container.appendChild(element); */

// Con React

/* 
import React from 'react';
import ReactDOM from 'react-dom';
// Como funciona JSX
const user = {
  firtsName: 'Darwin',
  lastName: 'Cumbajin',
  avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu9vInAX-P19Bq0VHqZcPUqtQD5dhBiAlb9mBn5j=s83-c-mo'
}

function getName(user){
  return `${user.firtsName} ${user.lastName}`
}

function getGreeting(user){
  if (user) {
  return <h1> Hola {getName(user)}</h1>
  }
  return <h1> Hola extraño</h1>
}

// Como funciona JSX
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>
) */


import React from 'react'
import ReactDOM from 'react-dom'
import Exercises from './pages/Exercises'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE)
ReactDOM.render(<Exercises/>, container)
