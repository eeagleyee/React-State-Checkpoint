import { useState } from "react";
import React, { Component } from "react";

// Class-based component
class App extends Component {
  // State initialization
  state = {
    // Initializing person object with profile information
    person: {
      fullName: "ANOLIEFO Joseph Izuchukwu",
      bio: "Hails from Dunukofia LGA of Anambra State, 3rd born child out of a family of 6, age 25, HND Chemistry/Biochemistry certified, PGDE certified, Msc in view, UI/UX, Tech Enthusiast",
      imgSrc:
        "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/348267086_1692535104536294_3094636771302416784_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iooZ24W0hQgAX_UE6DE&_nc_ht=scontent-los2-1.xx&oh=00_AfBOlU_3iL1SwCgttDpDdcN8CwM8IwGSiC5Ep_Cz0xrUjQ&oe=655E9DDC",
      profession: "Nigerian Airforce || Full Stack Web Developer",
    },
    show: false, // Toggling flag for displaying profile
    intervalId: null, // ID for the time interval
    elapsedTime: 0, // Elapsed time since component mount
  };

  // Lifecycle method: Runs after component mounts
  componentDidMount() {
    // Calculate time interval since component mounted
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000); // Update every 1 second

    this.setState({ intervalId });
  }

  // Lifecycle method: Runs before component unmounts
  componentWillUnmount() {
    // Clear the interval when the component is unmounted to avoid memory leaks
    clearInterval(this.state.intervalId);
  }

  // Function to toggle the 'show' state
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  // Render method for displaying the UI
  render() {
    // Destructuring state variables
    const { person, show, elapsedTime } = this.state;

    // Splitting the full name into separate variables

    // Splitting the full name into an array based on spaces and storing it in 'names'
    const names = person.fullName.split(" ");

    // Extracting the first name from the 'names' array and storing it in 'firstName'
    const firstName = names[0];

    // Combining the remaining elements (from index 1 to the end) of 'names' array into a string separated by spaces and storing it in 'middleLastName'
    const middleLastName = names.slice(1).join(" ");

    return (
      <div
        style={{
          // Styling for the main container
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >
        {/* Button for toggling profile visibility */}
        <button
          style={{
            // Styling for the toggle button
            padding: "10px 20px",
            backgroundColor: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
          onClick={this.toggleShow}
        >
          {/* Toggle button text */}
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Conditional rendering of profile based on 'show' flag */}
        {show && (
          <div
            style={{
              // Styling for the profile container
              border: "1px solid #ccc",
              padding: "20px",
              width: "300px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            {/* Displaying first and middle/last names */}
            <h1
              style={{
                // Styling for the name display
                color: "#333",
                borderBottom: "1px solid #ccc",
                marginBottom: "3px",
                display: "inline-block",
              }}
            >
              {/* First name */}
              {names[0]}
              <br />
              {/* Middle and last names */}
              {names.slice(1).join(" ")}
            </h1>

            {/* Profile image */}
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{
                // Styling for the profile image
                width: "200px",
                borderTopLeftRadius: "50px",
                marginBottom: "2px",
              }}
            />

            {/* Bio section */}
            <p style={{ fontStyle: "italic", color: "#666" }}>{person.bio}</p>

            {/* Profession section */}
            <p style={{ fontWeight: "bold", color: "#444" }}>
              Profession: {person.profession}
            </p>
          </div>
        )}

        {/* Displaying elapsed time */}
        <p style={{ marginTop: "20px", color: "#888" }}>
          Time elapsed since mount: {elapsedTime} seconds
        </p>
      </div>
    );
  }
}

// Exporting the App component
export default App;
