import React, { useState, useEffect } from "react";
import axios from "axios";


const defaultValues = {
  gamesPlayed: "Loading",
  goals: "Loading",
  assists: "Loading",
  points: "Loading",
  plusMinus: "Loading",
};

function AthleteCard() {
  // const history = useHistory()
  let [athleteInfo, setAthleteInfo] = useState(defaultValues);
  // const [moreStats, setMoreStats] = useState(defaultValues);

  const [user, setUser] = useState("user1"); // this needs to change to grab the handle of the current athlete page

  useEffect(() => {
    axios
      .get(`/user/`)
      .then((res) => {
        console.log(res.data.playerCard)

        setAthleteInfo(res.data.playerCard)
        // setStats(res.data.playerStats[0])
        // setMoreStats(res.data.user)
        // // console.log(res.data.playerStats[0])
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, [user]);


//   birthCity: "Salt Lake"
// birthCountry: "USA"
// birthMonth: "November"
// birthYear: "2008"
// createAt: "2020-11-17T01:44:13.959Z"
// email: "user1@test.com"
// fName: "Shaeffer"
// handle: "user1"
// imageUrl: "https://firebasestorage.googleapis.com/v0/b/clutch-f0902.appspot.com/o/2153029.jpg?alt=media"
// lName: "Gordon-Carroll"
// otherSports: "Baseball, Golf"
// playerHeight: "64"
// playerNumber: "77"
// playerPosition: "Left Wing"
// playerShotHand: "Right"
// playerWeight: "119"
// teamAgeGroup: "12U"
// teamBirthYear: "2008"
// teamName: "Chicago Mission"
// teamTier: "AAA"
// userId: "msj5i5PpnOewQHPiZAtcMaxb82M2"

// C | 5' 11" | 200 lb | Age: 33 | Pittsburgh Penguins
  return (
    <div>
      <div className="stats-holder">
        <div className="stats">
            
           <img id="athleteimg" src={athleteInfo.imageUrl} alt="athlete profile"/>
           <h2>{athleteInfo.fName} {athleteInfo.lName} | #{athleteInfo.playerNumber}</h2>
           <h3 id="playerBioStats">{athleteInfo.playerPosition}   
               {} | {athleteInfo.playerHeight} inches | 
               {athleteInfo.playerWeight} lb | 
               Age: {2021-athleteInfo.birthYear} | 
               <img id="athleteLogo" src="https://pbs.twimg.com/profile_images/903074788947656704/RujtsmZu_normal.jpg" alt="logo"></img>
               {athleteInfo.teamName}</h3>
        </div>
      </div>
      <h2>More Stats</h2>
      <div className="stats-more">
        <div className="morestats">
          {/* Birth City <h3>{athleteInfo.gamesPlayed}</h3> */}
        </div>
      </div>
    </div>
  );
}
export default AthleteCard;
