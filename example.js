/*
 * Copyright 2021 HiveMQ GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const mqtt = require('mqtt');

// your credentials
const options = {
  username: '<>',
  password: '<>',
};

// connect to your cluster, insert your host name and port
const client = mqtt.connect('tls:173eaa144cef42b4aeacd8eeb6470ce0.s1.eu.hivemq.cloud:8883', options);

// prints a received message
client.on('message', function(topic, message) {
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
client.publish('testtopic/2', userJSON);