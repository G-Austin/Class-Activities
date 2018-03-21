import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friends
  }

  removeFriend = id => {
    console.log('Removing a Friend', id);
    const friends = this.state.friends.filter(friend => friend.id !== id);
    console.log('new list of friends', friends);
    this.setState({ friends });
  }

  render() {
    return (

      <Wrapper>
      <h1 className="title">Friends List</h1>
      {this.state.friends.map(friend => {
        return (
          <FriendCard
          removeFriend={this.removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
          />
        )
      })}
      </Wrapper>

    )
  }
}

export default App;
