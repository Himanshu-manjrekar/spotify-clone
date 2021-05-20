import react from 'react';
import Login from './Login';
import Player from './Player';
import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

    // console.log("this is the token", token);



  }, []);
  // console.log('person', user);
  // console.log('alien', token)
  return (
    <div className="app">
      {/* <h1>  lets go </h1> */}
      {/* Spofity Logo */}
      {token ? <Player spotify={spotify} /> : (<Login />)}

    </div>
  );
}

export default App;
