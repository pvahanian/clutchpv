import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import UploadImage from "./uploadImage";
import UploadVideo from "./uploadVideo";
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
      })
      .catch((error) => {
        setUser()
        console.log(error);
      });
  }, [user]);

  // function runVideo(props) {
  //   const vidRef = useRef(null);
  //   const handlePlayVideo = () => {
  //     vidRef.current.play();
  //   }
  //   return (
  //     <video ref={vidRef}>
  //       <source src={[YOUR_SOURCE]} type="video/mp4" />
  //     </video>
  //   )
  // }

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
          </div>
          <div className="athleteNumber">
            {" "}
            # {athleteInfo.playerNumber} {UploadImage()}{" "}
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
        </div>
        {/* {setUser("user1")} */}

      </div>
      <Stats />
      {UploadVideo()}{" "}
      

      <video src={athleteInfo.videoUrl} type="video/mp4"></video>

     



    </div>
  );
}
export default AthleteCard;