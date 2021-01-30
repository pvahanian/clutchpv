import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadImage from "./uploadImage";
import Stats from "./stats";
import "../App.css";

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
        console.log(res.data.playerCard);

        setAthleteInfo(res.data.playerCard);
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
      <div className="athleteProfile">
        <div className="profileimg">
          <div className="gradient">
            <img
              className="child athleteimg"
              src={athleteInfo.imageUrl}
              alt="athlete profile"
            />
          </div>
          <div className="nameAndImageUpload">
            <h2 className="athleteNames"> {athleteInfo.fName}</h2>
            <h2 className="athleteNames"> {athleteInfo.lName}</h2>
            <div className="athleteNumber"> # {athleteInfo.playerNumber}</div>
          </div>
          <br></br>
        </div>
        <div className="informationHolder">
          <div className="teamHolder">
            <img
              id="athleteLogo"
              src="https://pbs.twimg.com/profile_images/903074788947656704/RujtsmZu_normal.jpg"
              alt="logo"
            ></img>
            <div className="teamInfo">
              <h3>{athleteInfo.teamName}</h3>
              <p>
                {athleteInfo.teamAgeGroup} {athleteInfo.teamTier}
              </p>
            </div>
          </div>

          {UploadImage()}
        </div>
        <Stats />
      </div>
    </div>
  );
}
export default AthleteCard;


{/* <h3 id="playerBioStats">
{athleteInfo.playerPosition}
{} | {athleteInfo.playerHeight} inches |{athleteInfo.playerWeight}{" "}
lb | Age: {2021 - athleteInfo.birthYear} |
</h3> */}