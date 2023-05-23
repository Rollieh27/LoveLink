import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";
const Dashboard = () => {
  const characters = [
    {
      name: "Tom",
      url: "https://randomuser.me/api/portraits/med/men/60.jpg",
      age: 30,
      gender: "Male",
      interests: ["Travel", "Reading"],
    },
    {
      name: "Harry",
      url: "https://randomuser.me/api/portraits/med/men/10.jpg",
      age: 33,
      gender: "Male",
      interests: ["Travel", "Cooking"],
    },
    {
      name: "Matthew",
      url: "https://randomuser.me/api/portraits/med/men/15.jpg",
      age: 27,
      gender: "Male",
      interests: ["Stamp collecting", "Corsage"],
    },
    {
      name: "Pat",
      url: "https://randomuser.me/api/portraits/med/women/34.jpg",
      age: 30,
      gender: "Female",
      interests: ["Pitbull breeding", "Chopping vegetables"],
    },
    {
      name: "Penelope",
      url: "https://randomuser.me/api/portraits/med/women/66.jpg",
      age: 30,
      gender: "Female",
      interests: ["Video games", "Record collecting"],
    },
    {
      name: "Amanda",
      url: "https://randomuser.me/api/portraits/med/women/25.jpg",
      age: 35,
      gender: "Female",
      interests: ["Painting ceramic figurines", "Reading to the blind"],
    },
    {
      name: "Jayk",
      url: "https://randomuser.me/api/portraits/med/men/63.jpg",
      age: 30,
      gender: "Male",
      interests: ["Deep diving", "Selling cocktails on the beach"],
    },
    {
      name: "Dario",
      url: "https://randomuser.me/api/portraits/med/men/71.jpg",
      age: 27,
      gender: "Male",
      interests: ["Movies", "Hiking"],
    },
    {
      name: "Chad",
      url: "https://randomuser.me/api/portraits/med/men/82.jpg",
      age: 29,
      gender: "Male",
      interests: ["Photography", "Speed walking"],
    },
    {
      name: "Isabel",
      url: "https://randomuser.me/api/portraits/med/women/36.jpg",
      age: 30,
      gender: "Female",
      interests: ["Collecting magnets", "Texting"],
    },
    {
      name: "Jocelyn",
      url: "https://randomuser.me/api/portraits/med/women/10.jpg",
      age: 39,
      gender: "Female",
      interests: ["Music", "Art"],
    },
    {
      name: "Phil",
      url: "https://randomuser.me/api/portraits/med/men/53.jpg",
      age: 45,
      gender: "Male",
      interests: ["Coding", "Yoga"],
    },
    {
      name: "Starr",
      url: "https://randomuser.me/api/portraits/med/men/52.jpg",
      age: 26,
      gender: "Other",
      interests: ["Animal lover", "Biking"],
    },
    {
      name: "Roland",
      url: "https://randomuser.me/api/portraits/med/men/15.jpg",
      age: 30,
      gender: "Male",
      interests: ["Swimming", "Track"],
    },
    {
      name: "Bryson",
      url: "https://randomuser.me/api/portraits/med/men/98.jpg",
      age: 30,
      gender: "Other",
      interests: ["Fitness", "Fashion"],
    },
    {
      name: "David",
      url: "https://randomuser.me/api/portraits/med/men/58.jpg",
      age: 39,
      gender: "Male",
      interests: ["Ice skating", "Snow boarding"],
    },
    {
      name: "Augustin",
      url: "https://randomuser.me/api/portraits/med/men/21.jpg",
      age: 30,
      gender: "Male",
      interests: ["Art", "Movies"],
    },
    {
      name: "Alejandra",
      url: "https://randomuser.me/api/portraits/med/women/86.jpg",
      age: 22,
      gender: "Female",
      interests: ["Tap dancing", "Ballet"],
    },
    {
      name: "Thomas",
      url: "https://randomuser.me/api/portraits/med/men/46.jpg",
      age: 23,
      gender: "Male",
      interests: ["Technology", "Crafts"],
    },
    {
      name: "Ben",
      url: "https://randomuser.me/api/portraits/med/men/77.jpg",
      age: 38,
      gender: "Male",
      interests: ["Travel", "Museums"],
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
                <p>Age: {character.age}</p>
                <p>Gender: {character.gender}</p>
                {character.interests && (
                  <p>Interests: {character.interests.join(", ")}</p>
                )}
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
