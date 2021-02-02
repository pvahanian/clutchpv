import React, { useState, useEffect } from "react";
import axios from "axios";
const defaultValues = {
  gamesPlayed: "Loading",
  goals: "Loading",
  assists: "Loading",
  points: "Loading",
  plusMinus: "Loading",
};
function Stats() {
  // const history = useHistory()
  const [stats, setStats] = useState(defaultValues);
  const [moreStats, setMoreStats] = useState(defaultValues);
  const [user, setUser] = useState("user1"); // this needs to change to grab the handle of the current athlete page
 
  
  useEffect(() => {
    axios
      .get(`/user/${user}`)
      .then((res) => {
        setStats(res.data.playerStats[0]);
        setMoreStats(res.data.user);
        // console.log(res.data.playerStats[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);
  return (
    <div>
      <div className="statContainer">
        <div className="stats-holder">
          <div className="stats">
            GP <h3>{stats.gamesPlayed}</h3>
          </div>
          <div className="stats">
            G <h3>{stats.goals}</h3>
          </div>
          <div className="stats">
            A <h3>{stats.assists}</h3>
          </div>
          <div className="stats">
            PTS <h3>{stats.points}</h3>
          </div>
          <div className="stats">
            + / - <h3>{stats.plusMinus}</h3>
          </div>
          {/* <div  className="stats">fPTS <h3>Need</h3></div> */}
        </div>
      </div>
      <div className="bioStats">
        <div className="bioStatsTable">
          <div className="morestats">
            Position 
          <h3>{moreStats.playerPosition}</h3>
          </div>
          <div className="morestats">
            Shot Hand <h3>{moreStats.playerShotHand}</h3>
          </div>
          <div className="morestats">
            Birth Year <h3>{2021- moreStats.teamBirthYear}</h3>
          </div>
          <div className="morestats">
            Height <h3>{moreStats.playerHeight}</h3>
          </div>
          <div className="morestats">
            Weight <h3>{moreStats.playerWeight}</h3>
          </div>
          <div className="morestats">
            Birth Place <h3>{moreStats.birthCity}, {moreStats.birthCountry}</h3>
          </div>
          {/* 
                    <div  className="morestats">Birth Month <h3>{moreStats.birthMonth}</h3></div>
                    <div  className="morestats">Other Sports <h3>{moreStats.otherSports}</h3></div>
                    <div  className="morestats">playerWeight <h3>{moreStats.playerWeight}</h3></div>
                    <div  className="morestats">playerNumber <h3>{moreStats.playerNumber}</h3></div>
                    <div  className="morestats">teamAgeGroup <h3>{moreStats.teamAgeGroup}</h3></div>
                    <div  className="morestats">teamName <h3>{moreStats.teamName}</h3></div>
                    <div  className="morestats">teamTier <h3>{moreStats.teamTier}</h3></div>
         */}
        </div>
      </div>
    </div>
  );
}
export default Stats;
