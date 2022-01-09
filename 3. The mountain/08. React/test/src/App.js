import React, {useEffect, useState} from "react"
import logo from './logo.svg'
import './App.css'
import Hello from "./hello.jsx"
import axios from "axios"

const App = () => {
  const [jokes, setJokes] = useState([])
  const [load, setLoad]= useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    axios.get("http://api.icndb.com/jokes")
         .then(res => {
           setJokes(res.data)
           setLoad(true)
         })
         .catch(err => {
           setError(err.message)
           setLoad(true)
         })
  }, [])

  if (load) {
    return (
      <ul>{error ? <li>error.message</li> : jokes.value.map(fact => <li class="joke" id={fact.id}>{fact.joke}</li>)}</ul>
    )
  }
  else {
    return (
      <div>Loading...</div>
    )
  }
}

export default App
