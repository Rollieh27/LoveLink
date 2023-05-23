import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";
const Dashboard = () => {
  const characters = [
    {
      name: "Bearded Japanese Man",
      url: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Harry Potter",
      url: "https://i.imgur.com/DKSuJL3.png",
    },
    {
      name: "Monica Rambeau",
      url: "https://i.imgur.com/DKSuJL3.png",
    },
    {
      name: "Peter Parker",
      url: "https://i.imgur.com/DKSuJL3.png",
    },
    {
      name: "Penelope Cruz",
      url: "https://i.imgur.com/DKSuJL3.png",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Dashboard;
