import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";
const Dashboard = () => {
  const characters = [
    {
      name: "Tom",
      url: "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg",
      age: 30,
      gender: "Male",
      interests: ["Travel", "Reading"],
    },
    {
      name: "Harry",
      url: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
      age: 33,
      gender: "Male",
      interests: ["Travel", "Cooking"],
    },
    {
      name: "Matthew",
      url: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg",
      age: 27,
      gender: "Male",
      interests: ["Stamp collecting", "Corsage"],
    },
    {
      name: "Pat",
      url: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      age: 30,
      gender: "Female",
      interests: ["Pitbull breeding", "Chopping vegetables"],
    },
    {
      name: "Penelope",
      url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      age: 30,
      gender: "Female",
      interests: ["Video games", "Record collecting"],
    },
    {
      name: "Amanda",
      url: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
      age: 35,
      gender: "Female",
      interests: ["Painting ceramic figurines", "Reading to the blind"],
    },
    {
      name: "Jayk",
      url: "https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg",
      age: 30,
      gender: "Male",
      interests: ["Deep diving", "Selling cocktails on the beach"],
    },
    {
      name: "Dario",
      url: "https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg",
      age: 27,
      gender: "Male",
      interests: ["Movies", "Hiking"],
    },
    {
      name: "Chad",
      url: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg",
      age: 29,
      gender: "Male",
      interests: ["Photography", "Speed walking"],
    },
    {
      name: "Isabel",
      url: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      age: 30,
      gender: "Female",
      interests: ["Collecting magnets", "Texting"],
    },
    {
      name: "Jocelyn",
      url: "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg",
      age: 39,
      gender: "Female",
      interests: ["Music", "Art"],
    },
    {
      name: "Phil",
      url: "https://images.pexels.com/photos/1277631/pexels-photo-1277631.jpeg",
      age: 45,
      gender: "Male",
      interests: ["Coding", "Yoga"],
    },
    {
      name: "Starr",
      url: "https://images.pexels.com/photos/3149036/pexels-photo-3149036.jpeg",
      age: 26,
      gender: "Other",
      interests: ["Animal lover", "Biking"],
    },
    {
      name: "Roland",
      url: "https://images.pexels.com/photos/1222345/pexels-photo-1222345.jpeg",
      age: 30,
      gender: "Male",
      interests: ["Swimming", "Track"],
    },
    {
      name: "Bryson",
      url: "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg",
      age: 30,
      gender: "Other",
      interests: ["Fitness", "Fashion"],
    },
    {
      name: "David",
      url: "https://images.pexels.com/photos/842944/pexels-photo-842944.jpeg",
      age: 39,
      gender: "Male",
      interests: ["Ice skating", "Snow boarding"],
    },
    {
      name: "Augustin",
      url: "https://images.pexels.com/photos/1011529/pexels-photo-1011529.jpeg",
      age: 30,
      gender: "Male",
      interests: ["Art", "Movies"],
    },
    {
      name: "Alejandra",
      url: "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg",
      age: 22,
      gender: "Female",
      interests: ["Tap dancing", "Ballet"],
    },
    {
      name: "Thomas",
      url: "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg",
      age: 23,
      gender: "Male",
      interests: ["Technology", "Crafts"],
    },
    {
      name: "Dylan",
      url: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg",
      age: 38,
      gender: "Male",
      interests: ["Travel", "Museums", "Cats"],
    },
  ];

  const handleLogout = () => {
    window.location.href = "/";
  };
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
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
