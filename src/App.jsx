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
import { Button } from '@mui/material';

export default function App() {

  const [client, setClient] = React.useState(null);
  const _topic = ["brianelchido"]; //Topic al que quiere conectarse
  const _options = {}; //Options
  const [conCovid, setConCovid] = useState([{ id: 1, NOM: "Brian Cruz Sanchez", PES: 59, EST: 1.76, COV: true }, { id: 2, NOM: "Brian Cruz Sanchez", PES: 59, EST: 1.76, COV: true }, { id: 3, NOM: "Brian Cruz Sanchez", PES: 59, EST: 1.76, COV: true }, { id: 4, NOM: "Brian Cruz Sanchez", PES: 56, EST: 1.74, COV: true }, { id: 5, NOM: "Brian Cruz Sanchez", PES: 39, EST: 1.46, COV: true }, { id: 6, NOM: "Brian Cruz Sanchez", PES: 89, EST: 1.79, COV: true }]);
  const [sinCovid, setSinCovid] = useState([{ id: 7, NOM: "Brian Cruz Sanchez", PES: 59, EST: 1.76, COV: false }]);
  const [show, setShow] = useState([false])
  let helper;
  // { ID: 0, NOM: "", PES: 12.5, EST: 1.649999976, COV: "" }

  React.useEffect(() => {
    // console.clear()
    console.log(conCovid, 'con covid')
  }, [conCovid])

  React.useEffect(() => {
    // console.clear()
    console.log(sinCovid, 'Sin Covid: ')
  }, [sinCovid])

  React.useEffect(() => {
    _init();
  }, [])

  const _init = () => {
    const c = mqtt.connect("broker.mqttdashboard.com", Number(8000), "clientId-", _onConnectionLost, _onMessageArrived); // mqtt.connect(host, port, clientId, _onConnectionLost, _onMessageArrived)
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
    if (message.payloadString.match(/labels:/) == null) {
      helper = JSON.parse(message.payloadString.replace(/ID/, "id"));
      if (helper.COV == true) {
        conCovid.map((option, i) => {
          (option.id != helper.id) && (setConCovid([...conCovid, helper]))
        })
      } else {
        sinCovid.map((option, i) => {
          (option.id != helper.id) && (setSinCovid([...sinCovid, helper]))
        })
        // setSinCovid([...sinCovid, helper])
      }
    }
  }

  // called when subscribing topic(s)
  const _onSubscribe = () => {
    setShow([true])
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

  const _onDisconnect = () => {
    setShow([false])
    client.disconnect();
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
            {
              (show[0])
                ? <Button fullWidth variant='contained' onClick={_onDisconnect}>DESCONECTAR</Button>
                : <Button fullWidth variant='contained' onClick={_onSubscribe}>CONECTAR</Button>
            }
            {(show[0])
              ? <ToggleButtonGroup
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
              : <></>
            }

          </Container>
        </Box>
        <Container sx={{ py: 2, my: 2 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container>
            {
              (show[0]) && (<Menu alignment={alignment} conCovid={conCovid} sinCovid={sinCovid} show={show} />)
            }

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
