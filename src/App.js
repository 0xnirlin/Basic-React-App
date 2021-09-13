import Hello from './Hello'
import React from 'react'

function App({name, age}) {
  return <div> Hello from app.js {name}. Age = {age}
  <br/>
  <Hello></Hello>
  </div>

}

export default App;
