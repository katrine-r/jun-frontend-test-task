import React, { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import HorseRacingList from "./components/HorseRacingList/HorseRacingList";
import { getFilteredList, getHorseRacingResults } from "./store/actions/horseRacing";
import Horse from "./icons/Horse";

const socket = io.connect('http://localhost:3002');

function App() {

  const dispatch = useDispatch()
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  const { horseRacing, filteredList, ratingHorseRacing} = useSelector((state) => state.horseRacing)

  const colorItem = [
    { name: "Princess Diana", color: "#F25E86" }, 
    { name: "Cricket", color: "#55C1D9" }, 
    { name: "Rebel", color: "#F2BF5E" }, 
    { name: "Lucy", color: "#7648D9" }, 
    { name: "Lacey", color: "#71D98B" }, 
    { name: "Ginger", color: "#F28066" }
  ]

  useEffect(() => {
    socket.emit('start');
    socket.on('ticker', function(response) {
      console.log(response)
      dispatch(getHorseRacingResults(response))
      dispatch(getFilteredList(response));
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

  useEffect(() => {
      filteredList.map((i, index) => {
        if (i.distance < 1000) {
          dispatch(getFilteredList([
            ...horseRacing.sort((a, b) => {
              return b.distance - a.distance;
            })
          ]));
        } 
        else if (ratingHorseRacing.length === horseRacing.length) {
          dispatch(getFilteredList([
            ...ratingHorseRacing.sort((a, b) => {
              return b.index - a.index;
            })
          ]))
        }
      })
  }, [horseRacing])

  const sendPing = () => {
    socket.emit('ping');
  }

  return (
    <div className="App">
      <div className="Title">
        <Horse />
        <h1>Horse Racing</h1>
      </div>
      <div>
        <HorseRacingList colorItem={colorItem} />
      </div>
    </div>
  );
}

export default App;
