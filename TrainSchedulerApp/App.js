import React, { useState } from 'react';
import './App.css';

function App() {
  const [trains, setTrains] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const trainName = event.target.trainName.value;
    const departureTime = event.target.departureTime.value;

    setTrains([...trains, { trainName, departureTime }]);

    event.target.reset();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Train Schedule App</h1>
      </header>
      <div className="container">
        <form id="schedule-form" onSubmit={handleFormSubmit}>
          <label htmlFor="trainName">Train Name:</label>
          <input type="text" id="trainName" name="trainName" required />

          <label htmlFor="departureTime">Departure Time:</label>
          <input type="time" id="departureTime" name="departureTime" required />

          <input type="submit" value="Add to Schedule" />
        </form>
        <table id="schedule-table">
          <thead>
            <tr>
              <th>Train Name</th>
              <th>Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {trains.map((train, index) => (
              <tr key={index}>
                <td>{train.trainName}</td>
                <td>{train.departureTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
