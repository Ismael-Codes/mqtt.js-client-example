import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Menu } from './components';
import { useState } from 'react'
import React from 'react';
import * as mqtt from 'react-paho-mqtt';

export default function App() {

  const [client, setClient] = React.useState(null);
  const _topic = ["UAEH/hive"]; //Topic al que quiere conectarse
  const _options = {}; //Options

  React.useEffect(() => {
    _init();
  }, [])

  const _init = () => {
    const c = mqtt.connect("JULIO@broker.hivemq.com", Number(8000), "clientId-", _onConnectionLost, _onMessageArrived); // mqtt.connect(host, port, clientId, _onConnectionLost, _onMessageArrived)
    setClient(c);
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
    try {
      client.connect({
        onSuccess: () => {
          for (var i = 0; i < _topic.length; i++) {
            client.subscribe(_topic[i], _options);
          }
        }
      }); // called when the client connects  
    } catch (error) {
      console.log(error.message);
    }
  }

  const [alignment, setAlignment] = useState('');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <AppBar position="relative" sx={{ bgcolor: '#424242' }}>
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            MQTT
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              MQTT
            </Typography>
            <ToggleButtonGroup
              fullWidth
              value={alignment}
              exclusive
              size='large'
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="conCovid">Con COVID</ToggleButton>
              <ToggleButton value="sinCovid">Sin COVID</ToggleButton>
              <ToggleButton value="ambos">AMBOS</ToggleButton>
            </ToggleButtonGroup>
          </Container>
        </Box>
        <Container sx={{ py: 2, my: 2 }} maxWidth="lm">
          {/* End hero unit */}
          <Grid container>
            <Menu alignment={alignment} />

            {/* <Grid item xs={12}>
             
            </Grid> */}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: '#424242', p: 6, color: 'white' }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          // color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </>
  );
}
