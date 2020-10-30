import fetch from "node-fetch"; // telepítendő `npm install -s node-fetch`
import settings from "../../modules/settings.js";
//import the filesystem module




let name = 'Elvis';
let url = settings.url + ':' + settings.port + '/hello/' + name;
console.log('Fetching ' + url);


fetch(url)
    .then(res => res.text())
    .then(text => console.log("Our server said: " + text)); 
    

