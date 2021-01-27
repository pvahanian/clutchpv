import React, { useState, useEffect } from "react";
import axios from "axios";
const defaultValues ={
            "gamesPlayed": "Loading",
            "goals": "Loading",
            "assists": "Loading",
            "points": "Loading",
            "plusMinus": "Loading",
}
function Stats() {
  // const history = useHistory()
const [stats, setStats] = useState(defaultValues);
const [moreStats, setMoreStats] = useState(defaultValues);
const [user, setUser] = useState("user1"); // this needs to change to grab the handle of the current athlete page

useEffect(() => {
    axios.get(`/user/${user}`)
    .then((res)=>{
        setStats(res.data.playerStats[0])
        setMoreStats(res.data.user)
        // console.log(res.data.playerStats[0])
    })
    .catch((error)=>{
        console.log(error)
    })
},[user])
return(
    <div>
        <div className="stats-holder">
                    <div  className="stats">Games Played <h3>{stats.gamesPlayed}</h3></div>
                    <div  className="stats">Goals <h3>{stats.goals}</h3></div>
                    <div  className="stats">Assists <h3>{stats.assists}</h3></div>
                    <div  className="stats">Points <h3>{stats.points}</h3></div>
                    <div  className="stats">+ / - <h3>{stats.plusMinus}</h3></div>
                    <div  className="stats">fPTS <h3>Need</h3></div>
        </div>
        {/* <h2>More Stats</h2> */}
        {/* <div className="stats-more">
                    <div  className="morestats">Birth City <h3>{moreStats.birthCity}</h3></div>
                    <div  className="morestats">Birth Country <h3>{moreStats.birthCountry}</h3></div>
                    <div  className="morestats">Birth Month <h3>{moreStats.birthMonth}</h3></div>
                    <div  className="morestats">Other Sports <h3>{moreStats.otherSports}</h3></div>
                    <div  className="morestats">playerHeight <h3>{moreStats.playerHeight}</h3></div>
                    <div  className="morestats">playerWeight <h3>{moreStats.playerWeight}</h3></div>
                    <div  className="morestats">playerNumber <h3>{moreStats.playerNumber}</h3></div>
                    <div  className="morestats">playerPosition <h3>{moreStats.playerPosition}</h3></div>
                    <div  className="morestats">playerShotHand <h3>{moreStats.playerShotHand}</h3></div>
                    <div  className="morestats">playerWeight <h3>{moreStats.playerWeight}</h3></div>
                    <div  className="morestats">teamAgeGroup <h3>{moreStats.teamAgeGroup}</h3></div>
                    <div  className="morestats">teamBirthYear <h3>{moreStats.teamBirthYear}</h3></div>
                    <div  className="morestats">teamName <h3>{moreStats.teamName}</h3></div>
                    <div  className="morestats">teamTier <h3>{moreStats.teamTier}</h3></div>
        </div> */}
    </div>
)
}
export default Stats;