import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import mqtt from "precompiled-mqtt";
import React from 'react';

import * as mqtt from 'react-paho-mqtt';

function App() {

  const [client, setClient] = React.useState(null);
  const _topic = ["brianelchido"]; //Topic al que quiere conectarse
  const _options = {}; //Options

  React.useEffect(() => {
    _init();
  }, [])

  const _init = () => {
    const c = mqtt.connect("broker.mqttdashboard.com", Number(8000), "clientId-", _onConnectionLost, _onMessageArrived); // mqtt.connect(host, port, clientId, _onConnectionLost, _onMessageArrived)
    setClient(c);
  }

  // called when sending payload
  const _sendPayload = () => {
    const payload = mqtt.parsePayload("Hello", "World"); // topic, payload
    client.send(payload);
  }

  // called when client lost connection
  const _onConnectionLost = responseObject => {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost: " + responseObject.errorMessage);
    }
  }

  // called when messages arrived
  const _onMessageArrived = message => {
    console.log("onMessageArrived: " + message.payloadString);
  }


  // called when subscribing topic(s)
  const _onSubscribe = () => {
    client.connect({
      onSuccess: () => {
        for (var i = 0; i < _topic.length; i++) {
          client.subscribe(_topic[i], _options);
        }
      }
    }); // called when the client connects
  }

  // called when subscribing topic(s)
  const _onUnsubscribe = () => {
    for (var i = 0; i < _topic.length; i++) {
      client.unsubscribe(_topic[i], _options);
    }
  }

  // called when disconnecting the client
  const _onDisconnect = () => {
    client.disconnect();
  }

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          style={{ color: 'white' }}
          onClick={_onSubscribe}>
          <h1>Subscribe Topic</h1>
        </button>
        <button
          style={{ color: 'white' }}
          onClick={_sendPayload}>
          <h1>Send Message</h1>
        </button>
      </header>
    </div>
  )
}

export default App
