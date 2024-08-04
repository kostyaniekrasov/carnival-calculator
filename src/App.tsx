import React, { useState } from "react";
import "./App.css";

type SelectedValues = {
  [key: string]: number;
};

const threeArray = [
  { name: "Prize A", quantity: 1, pointsPerItem: 540, total: 540 },
  { name: "Prize B", quantity: 2, pointsPerItem: 270, total: 540 },
  { name: "Prize C", quantity: 3, pointsPerItem: 180, total: 540 },
  { name: "Prize D", quantity: 4, pointsPerItem: 135, total: 540 },
  { name: "Prize E", quantity: 20, pointsPerItem: 27, total: 540 },
  { name: "Prize F", quantity: 20, pointsPerItem: 27, total: 540 },
  { name: "Prize G", quantity: 30, pointsPerItem: 18, total: 540 },
  { name: "Last Prize", quantity: 1, pointsPerItem: 540, total: 540 },
];

const twoArray = [
  { name: "Prize A", quantity: 1, pointsPerItem: 360, total: 360 },
  { name: "Prize B", quantity: 3, pointsPerItem: 180, total: 540 },
  { name: "Prize C", quantity: 6, pointsPerItem: 120, total: 720 },
  { name: "Prize D", quantity: 40, pointsPerItem: 90, total: 3600 },
  { name: "Prize E", quantity: 40, pointsPerItem: 18, total: 720 },
  { name: "Prize F", quantity: 40, pointsPerItem: 18, total: 720 },
  { name: "Prize G", quantity: 60, pointsPerItem: 12, total: 720 },
  { name: "Last Prize", quantity: 1, pointsPerItem: 360, total: 360 },
];

const oneArray = [
  { name: "Prize A", quantity: 1, pointsPerItem: 270, total: 270 },
  { name: "Prize B", quantity: 2, pointsPerItem: 90, total: 180 },
  { name: "Prize C", quantity: 3, pointsPerItem: 45, total: 135 },
  { name: "Prize D", quantity: 3, pointsPerItem: 27, total: 81 },
  { name: "Prize E", quantity: 19, pointsPerItem: 9, total: 171 },
  { name: "Prize F", quantity: 20, pointsPerItem: 9, total: 180 },
  { name: "Prize G", quantity: 34, pointsPerItem: 6, total: 204 },
  { name: "Last Prize", quantity: 1, pointsPerItem: 270, total: 270 },
];

function App(): JSX.Element {
  const [array, setArray] = useState(threeArray);
  const [selectedValues, setSelectedValues] = useState<SelectedValues>(
    array.reduce((acc, item) => ({ ...acc, [item.name]: 0 }), {})
  );

  const handleSelect = (value: number) => {
    switch (value) {
      case 1:
        setArray(oneArray);
        break;
      case 2:
        setArray(twoArray);
        break;
      case 3:
        setArray(threeArray);
        break;
      default:
        setArray(threeArray);
        break;
    }
    setSelectedValues(
      array.reduce((acc, item) => ({ ...acc, [item.name]: 0 }), {})
    );
  };

  const handleSelectChange = (name: string, value: number) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const totalPoints = array.reduce((total, item) => {
    return total + selectedValues[item.name] * item.pointsPerItem;
  }, 0);

  const reciveTickets = totalPoints / 30;

  return (
    <div className="App">
      <header className="header">
        <label htmlFor="tickets">Choose a lot</label>
        <select
          className="select select--tickets"
          name="tickets"
          id="tickets"
          onChange={(e) => handleSelect(Number(e.target.value))}
        >
          <option value="3">For 3 tickets</option>
          <option value="2">For 2 tickets</option>
          <option value="1">For 1 ticket</option>
        </select>
      </header>

      <div className="inputs">
        {array.map((item) => (
          <div className="input_block" key={item.name}>
            <label className={item.name.replace(/ /g, "-")}>{item.name}</label>
            <select
              className="select"
              value={selectedValues[item.name] || 0}
              onChange={(e) =>
                handleSelectChange(item.name, Number(e.target.value))
              }
            >
              {[...Array(item.quantity + 1).keys()].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="bottom_block">
        <div className="total_points">
          <h2 className="total_points--h2">Total Points: {totalPoints}</h2>
          <div className="total_points--img"></div>
        </div>
        <div className="total_tickets">
          <h2 className="total_tickets--h2">
            Received Tickets: {reciveTickets}
          </h2>
          <div className="total_tickets--img"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
