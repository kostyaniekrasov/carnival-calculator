import React, { useState } from "react";
import "./App.css";
import { bigArray, Category } from "./array";

function App(): JSX.Element {
  const initialArr = bigArray.find(
    (category) => category.title === "Relic core"
  );
  const [array, setArray] = useState<Category | null>(initialArr!);

  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheckboxChange = (itemType: string, isChecked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemType]: isChecked,
    }));
  };

  const initialSelectedValues = array?.items.reduce((acc, item) => {
    acc[item.type] = item.defaultValue ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const [selectedValues, setSelectedValues] = useState<Record<string, number>>(
    initialSelectedValues || {}
  );

  const handleSelectChange = (itemName: string, value: number) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [itemName]: value,
    }));
  };

  const calculateTotalPoints = () => {
    if (!array) return 0;

    return array.items.reduce((total, item) => {
      const selectedQuantity = selectedValues[item.type] || 0;
      return total + selectedQuantity * item.pointsPerItem;
    }, 0);
  };

  const totalPoints = calculateTotalPoints();

  const calculateSubtractedPoints = () => {
    if (!array) return 0;

    return array.items.reduce((total, item) => {
      const isChecked = checkedItems[item.type];
      const selectedQuantity = selectedValues[item.type] || 0;
      const points = selectedQuantity * item.pointsPerItem;

      return isChecked ? total - points : total;
    }, totalPoints);
  };

  const subtractedPoints = calculateSubtractedPoints();

  console.log(subtractedPoints);

  const handleSelect = (selectedTitle: string) => {
    const selectedArray = bigArray.find(
      (category) => category.title === selectedTitle
    );
    setArray(selectedArray || null);
  };

  const calculateTotalQuantity = (category: Category | null): number => {
    if (category === null) return 0;

    const items = category.items;
    const lastItemIndex = items.length - 1;

    return items
      .slice(0, lastItemIndex)
      .reduce((total, item) => total + item.quantity, 0);
  };

  const totalQuantity = calculateTotalQuantity(array);

  const receivedTickets = subtractedPoints / 30;

  const sumSelectedValues = array!.items
    .filter((item) => item.type !== "Last")
    .reduce((acc, item) => {
      const value = selectedValues[item.type] || 0;
      return acc + value;
    }, 0);

  const multipliedResult = sumSelectedValues * array!.tickets;

  const difference = Math.round(receivedTickets - multipliedResult);

  return (
    <div className="App">
      <header className="header">
        <div className="select__block">
          <label className="label" htmlFor="categories">
            Choose a category
          </label>
          <select
            className="select select--categories"
            name="categories"
            id="categories"
            onChange={(e) => handleSelect(e.target.value)}
          >
            {bigArray.map((category, index) => (
              <option key={index} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>

          <div className="ticket__block">
            {`${array?.tickets}x`}
            <div className="img--ticket"></div>
          </div>
        </div>

        <div className="input__block">
          <div className="num-tickets__block">
            <label htmlFor="num-tickets">{`Rewards Left: ${sumSelectedValues}`}</label>
          </div>
          <p>/{totalQuantity}</p>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Image</th>
            <th>Left / Max</th>
            <th>Not selling?*</th>
          </tr>
        </thead>
        <tbody>
          {array &&
            array.items.map((item) => (
              <tr>
                <td
                  className={`${item.type}`}
                >{`${item.type}: ${item.name}`}</td>
                <td>
                  <img src={item.image} className="item-img" alt="zalupa" />
                </td>
                <td>
                  <div className="td_title">
                    <select
                      className="select"
                      value={
                        selectedValues[item.type] !== undefined
                          ? selectedValues[item.type]
                          : item.defaultValue || 0
                      }
                      onChange={(e) =>
                        handleSelectChange(item.type, Number(e.target.value))
                      }
                    >
                      {Array.from({ length: item.quantity + 1 }, (_, i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                    <p>{`/ ${item.quantity}`}</p>
                  </div>
                </td>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onChange={(e) =>
                      handleCheckboxChange(item.type, e.target.checked)
                    }
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div className="bottom__blocks">
        <table className="custom-table">
          <thead>
            <tr>
              <th></th>
              <th>
                <div className="total_points--img"></div>
              </th>
              <th>
                <div className="total_tickets--img"></div>
              </th>
              <th>
                <div className="total_gems--img"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Spent</td>
              <td>{totalPoints}</td>
              <td>{multipliedResult}</td>
              <td>{multipliedResult * 300}</td>
            </tr>
            <tr>
              <td>Amount Returned</td>
              <td>{subtractedPoints}</td>
              <td>{receivedTickets}</td>
              <td>{receivedTickets * 300}</td>
            </tr>
            <tr>
              <td>Amount Gained/Lost</td>
              <td>{totalPoints - subtractedPoints}</td>
              <td>
                {receivedTickets > multipliedResult ? "+" : ""}
                {difference}
              </td>
              <td>
                {receivedTickets > multipliedResult ? "+" : ""}
                {receivedTickets * 300 - multipliedResult * 300}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer>
        <div className="logo_block">
          <p className="logo">Survivor.io Ukraine</p>
          <div className="logo--img"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
