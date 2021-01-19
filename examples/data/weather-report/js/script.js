"use strict";

/*****************

Weather Report
Pippin Barr

Like a very limited Siri, this application listens to your voice and will
tell you the weather if you ask it just right. Has instructions so you can
ask it just right.

Uses:

MetaWeather API:
https://www.metaweather.com/api/

CORS anywhere heroku app for testing on localhost:
https://cors-anywhere.herokuapp.com/

annyang!:
https://www.talater.com/annyang/

ResponsiveVoice:
http://responsivevoice.org/

******************/

// URL for the weather API
const METAWEATHER_API_BASE_URL = `https://www.metaweather.com/api/location/`;
// Specific city code for Montreal
const MONTREAL_CODE = `3534`;
const CALLBACK = `gotWeatherData`;
// URL for the CORS anywhere app that allows us to test this program on local host
// while we're developing it
const CORS_ANYWHERE = `https://cors-anywhere.herokuapp.com/`;

// URLS to access the MetaWeather API via CORS Anywhere
const METAWEATHER_API_URL = `${CORS_ANYWHERE}${METAWEATHER_API_BASE_URL}${MONTREAL_CODE}`;

// Voice settings for the fake Siri (I think of him as Murray)
const VOICE_NAME = `UK English Male`;
const VOICE_PARAMS = {
  rate: 0.8,
  pitch: 0.5
}

// Has the user clicked to start (polite for playing sound)
let started = false;
// Has the user got Murray's attention yet?
let attention = false;

/**
Creates a canvas, sets up annyang, and sets default text options
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    // Set the two commands for Murray
    let commands = {
      "excuse me": getAttention,
      "tell me the weather": getWeather
    };
    annyang.addCommands(commands);
    annyang.start();
  }
  // Default text formatting
  textSize(24);
  textAlign(CENTER);
  fill(255, 255, 0);
}


/**
Displays appropriate instructions text depending on the program state
*/
function draw() {
  background(0);

  if (started) {
    if (annyang) {
      if (!attention) {
        text(`Say "Excuse me?"`, width / 2, height / 2);
      }
      else {
        text(`Say "Tell me the weather."`, width / 2, height / 2);
      }
    }
    else {
      text(`Please use Chrome on a desktop computer.`, width / 2, height / 2)
    }
  }
  else {
    text(`Click to start.`, width / 2, height / 2)
  }
}

/**
Called by annyang if the user says "Excuse me". Responds with a voice and sets
the attention state.
*/
function getAttention() {
  // Ignore the user if they haven't clicked
  if (!started) {
    return;
  }
  attention = true;
  responsiveVoice.speak(`Yes?`, VOICE_NAME, VOICE_PARAMS);
}

/**
Called by annyang if the user asks for the weather. Tries to get the weather.
*/
function getWeather() {
  // Ignore the user if they haven't clicked and/or haven't said excuse me yet
  if (!started || !attention) {
    return;
  }
  // Ask the API for the JSON data about the current weather
  // tell it to call our gotWeatherData function when it's loaded
  loadJSON(METAWEATHER_API_URL, gotWeatherData);

  // Play for time...
  responsiveVoice.speak(`Let's see...`, VOICE_NAME, VOICE_PARAMS);
}

/**
Called when the weather data is loaded. Gets the current forecast and speaks it.
*/
function gotWeatherData(data) {
  // Extract the current forecast from the data
  // consolidated_weather contains a five day forecast in an array
  // we want the first element in the array (0) because it's for today
  // weather_state_name has the simple language forecast
  let forecast = data.consolidated_weather[0].weather_state_name;
  responsiveVoice.speak(forecast, VOICE_NAME, VOICE_PARAMS);
}

/**
Starts the program
*/
function mousePressed() {
  started = true;
}