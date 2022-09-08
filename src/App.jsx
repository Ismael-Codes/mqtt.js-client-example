import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import mqtt from "precompiled-mqtt";
// import mqtt from 'mqtt'

function App() {

  const options = {
    username: 'ismael',
    password: 'abejareina',
    rejectUnauthorized: false
  };

  // const URL = "mqtt://test.mosquitto.org:8081";

  const URL = "tls:173eaa144cef42b4aeacd8eeb6470ce0.s1.eu.hivemq.cloud:8883";

  // connect to your cluster, insert your host name and port
  // const client = mqtt.connect('wss:173eaa144cef42b4aeacd8eeb6470ce0.s1.eu.hivemq.cloud:8883', options);

  // const client = mqtt.connect({hostname: 'mqtt://test.mosquitto.org', port: 8080});
  const client = mqtt.connect(URL, options);

  // console.log(client)

  // prints a received message
  client.on('message', function (topic, message) {
    console.log(String.fromCharCode.apply(null, message)); // need to convert the byte array to string
  });

  // reassurance that the connection worked
  client.on('connect', () => {
    console.log('Connected!');
  });

  // prints an error message
  client.on('error', (error) => {
    console.log('Error:', error);
  });

  const user = {
    name: 'Jack',
    isMarried: false,
    age: 25,
  }

  const userJSON = JSON.stringify(user);

  client.subscribe('testtopic/2');
  // client.publish('testtopic/2', userJSON);


  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
