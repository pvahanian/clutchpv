import React, { useState, useEffect } from "react";
import axios from "axios";
const defaultValues = {
  gamesPlayed: "...",
  goals: "...",
  assists: "...",
  points: "...",
  plusMinus: "...",
};


function Stats() {
  // const history = useHistory()
  const [stats, setStats] = useState(defaultValues);
  const [moreStats, setMoreStats] = useState(defaultValues);
  const [user, setUser] = useState("user1"); // this needs to change to grab the handle of the current athlete page
  let [bioStatsChoice, setbioStatsChoice] = useState("bioStatsOff"); // this needs to change to grab the handle of the current athlete page
  // let [statHighlight, statHighlight] = useState("stats"); // this needs to change to grab the handle of the current athlete page
  // let [statsArray, setStatsArray] = useState([]); // this needs to change to grab the handle of the current athlete page
  // let [stats, setStats] = useState("bioStatsOff"); // this needs to change to grab the handle of the current athlete page
  let [callcounter, setcallCounter] = useState(0)

  const statsData = [
    {"title": "", "dataToggleFunction": logToScreen, "stats": "Bio"}, 
    {"title": "GP", "dataToggleFunction": addToggleFunctionHere, "stats": stats.gamesPlayed}, 
    {"title": "G", "dataToggleFunction": addToggleFunctionHere, "stats": stats.goals}, 
    {"title": "A", "dataToggleFunction": addToggleFunctionHere, "stats": stats.assists}, 
    {"title": "PTS", "dataToggleFunction": addToggleFunctionHere, "stats": stats.points}, 
    {"title": "+ / -", "dataToggleFunction": addToggleFunctionHere, "stats": stats.plusMinus}
  ]


  useEffect(() => {
    axios
      .get(`/user/${user}`)
      .then((res) => {
        console.log("attempted to get stats")
        setStats(res.data.playerStats[0]);
        setMoreStats(res.data.user);
        setUser();
        console.log(stats);
      })
      .catch((error) => {
        setcallCounter(callcounter+1)
        console.log("error counter",callcounter);
        console.log(error);
      });
  }, [user]);

  function logToScreen() {
    if (bioStatsChoice === "bioStatsOff") {
      setbioStatsChoice("bioStats");
    } else {
      setbioStatsChoice("bioStatsOff");
    }
  }
  function addToggleFunctionHere(i) {
  }
  function betterHighlight(incomingId) {
    for (let i = 0; i < statsData.length; i++) {
      let highlighter = document.getElementById(i);
      if (incomingId === i) {
        if (highlighter.classList.length === 1) {
          highlighter.classList.add("on");
        } else {
          highlighter.classList.remove("on");
        }
      } else {
        highlighter.classList.remove("on");
      }
    }
  }

  return (
    <div>
      <div className="statContainer">
        <div className="stats-holder">

        {
            statsData.map((dataIter, index) => {
              return (
                <div className="stats" onClick={() => {dataIter.dataToggleFunction(); betterHighlight(index);}} id={index}>
                  <span>{dataIter.title}</span> <h3>{dataIter.stats}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={bioStatsChoice}>
        <div className="bioStatsTable">
          <div className="morestats">
            Position
            <h3>{moreStats.playerPosition}</h3>
          </div>
          <div className="morestats">
            Shot Hand <h3>{moreStats.playerShotHand}</h3>
          </div>
          <div className="morestats">
            Birth Year <h3>{2021 - moreStats.teamBirthYear}</h3>
          </div>
          <div className="morestats">
            Height <h3>{moreStats.playerHeight}</h3>
          </div>
          <div className="morestats">
            Weight <h3>{moreStats.playerWeight}</h3>
          </div>
          <div className="morestats">
            Birth Place{" "}
            <h3>
          {moreStats.birthCity}, {moreStats.birthCountry}
            </h3>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Stats;
