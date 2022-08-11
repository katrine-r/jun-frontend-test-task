import React, { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import { useDispatch } from "react-redux";
import HorseRacingList from "./components/HorseRacingList/HorseRacingList";
import { getHorseRacingResults } from "./store/actions/horseRacing";

const socket = io.connect('http://localhost:3002');

function App() {

  const dispatch = useDispatch()
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {

    socket.emit('start');
    socket.on('ticker', function(response) {
      console.log(response)
      dispatch(getHorseRacingResults(response))
    });

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  return (
    <div className="App">
      <h1 className="Title">Horse Racing</h1>
      <div>
        <HorseRacingList />
      </div>
    </div>
  );
}

export default App;
