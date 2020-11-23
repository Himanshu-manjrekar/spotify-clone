// import react from 'react';
import Login from './Login';
import './App.css';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
    }

    console.log("this is the token", token);
  }, []);
  return (
    <div className="app">
      {/* <h1>  lets go </h1> */}
      {/* Spofity Logo */}
      {token ? (<h1>Spotify Insider</h1>) : (<Login />)}

    </div>
  );
}

export default App;