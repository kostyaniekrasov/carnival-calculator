import React, { useState } from "react";
import "./App.css";

interface Prize {
  name: string;
  quantity: number;
  pointsPerItem: number;
  type: string;
  image: string;
  defaultValue?: number;
}

interface Category {
  title: string;
  tickets: number;
  items: Prize[];
}

const bigArray: Category[] = [
  {
    title: "Relic core",
    tickets: 3,
    items: [
      {
        name: "Relic Core",
        quantity: 1,
        pointsPerItem: 540,
        type: "A",
        image: "images/relicCore.png",
        defaultValue: 1,
      },
      {
        name: "Panda shards",
        quantity: 3,
        pointsPerItem: 270,
        type: "B",
        image: "images/shardPanda.png",
      },
      {
        name: "Pands shards",
        quantity: 6,
        pointsPerItem: 180,
        type: "C",
        image: "images/shardPanda.png",
      },
      {
        name: "S key",
        quantity: 10,
        pointsPerItem: 135,
        type: "D",
        image: "images/keyS.png",
      },
      {
        name: "S key",
        quantity: 40,
        pointsPerItem: 27,
        type: "E",
        image: "images/keyS.png",
      },
      {
        name: "S key",
        quantity: 40,
        pointsPerItem: 27,
        type: "F",
        image: "images/keyS.png",
      },
      {
        name: "Oil",
        quantity: 60,
        pointsPerItem: 18,
        type: "G",
        image: "images/oil.png",
      },
      {
        name: "Relic Core",
        quantity: 1,
        pointsPerItem: 540,
        type: "Last",
        image: "images/relicCore.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Void chest",
    tickets: 2,
    items: [
      {
        name: "Void chest",
        quantity: 1,
        pointsPerItem: 360,
        type: "A",
        image: "images/chestVoidSelect.png",
        defaultValue: 1,
      },
      {
        name: "Purple equip x3",
        quantity: 2,
        pointsPerItem: 180,
        type: "B",
        image: "images/equipRandom.png",
      },
      {
        name: "S key x3",
        quantity: 3,
        pointsPerItem: 120,
        type: "C",
        image: "images/keyS.png",
      },
      {
        name: "Purple equip x1",
        quantity: 4,
        pointsPerItem: 90,
        type: "D",
        image: "images/equipRandom.png",
      },
      {
        name: "Silver key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "E",
        image: "images/keySilver.png",
      },
      {
        name: "Pet silver key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "F",
        image: "images/keyPetSilver.png",
      },
      {
        name: "Green equip x1",
        quantity: 30,
        pointsPerItem: 12,
        type: "G",
        image: "images/equipRandom.png",
      },
      {
        name: "Void chest",
        quantity: 1,
        pointsPerItem: 360,
        type: "Last",
        image: "images/chestVoidSelect.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "S chest",
    tickets: 3,
    items: [
      {
        name: "S selector x1",
        quantity: 1,
        pointsPerItem: 540,
        type: "A",
        image: "images/chestSSelect.png",
        defaultValue: 1,
      },
      {
        name: "Rand purple equip x3",
        quantity: 2,
        pointsPerItem: 270,
        type: "B",
        image: "images/equipRandom.png",
      },
      {
        name: "S key x10",
        quantity: 3,
        pointsPerItem: 180,
        type: "C",
        image: "images/keyS.png",
      },
      {
        name: "Rand purple equip x1",
        quantity: 4,
        pointsPerItem: 135,
        type: "D",
        image: "images/equipRandom.png",
      },
      {
        name: "S key x1",
        quantity: 20,
        pointsPerItem: 27,
        type: "E",
        image: "images/keyS.png",
      },
      {
        name: "EDF key x1",
        quantity: 20,
        pointsPerItem: 27,
        type: "F",
        image: "images/keyGolden.png",
      },
      {
        name: "Pet golden key x1",
        quantity: 30,
        pointsPerItem: 18,
        type: "G",
        image: "images/keyPetGolden.png",
      },
      {
        name: "S selector x1",
        quantity: 1,
        pointsPerItem: 540,
        type: "Last",
        image: "images/chestSSelect.png",
        defaultValue: 1,
      },
    ],
  },
];

function App(): JSX.Element {
  const initialArr = bigArray.find(
    (category) => category.title === "Relic core"
  );
  const [array, setArray] = useState<Category | null>(initialArr!);

  const initialSelectedValues = array?.items.reduce((acc, item) => {
    acc[item.type] = item.defaultValue ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const [selectedValues, setSelectedValues] = useState<Record<string, number>>(
    initialSelectedValues || {}
  );

  const [selectedValue, setSelectedValue] = useState(0);

  const handleSelectChange = (itemName: string, value: number) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [itemName]: value,
    }));
  };

  const handleSelectTicketsChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSelectedValue(Number(e.target.value));
  };

  const multipliedResult = selectedValue * array!.tickets;

  const calculateTotalPoints = () => {
    if (!array) return 0;

    return array.items.reduce((total, item) => {
      const selectedQuantity = selectedValues[item.type] || 0;
      return total + selectedQuantity * item.pointsPerItem;
    }, 0);
  };

  const totalPoints = calculateTotalPoints();

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

  const receivedTickets = totalPoints / 30;

  const handleCheckboxChange = (itemType: string, isChecked: boolean) => {
    setSelectedValues((prevValues) => {
      const newValues = { ...prevValues };
      const currentItem = array?.items.find((item) => item.type === itemType);
      const itemValue = currentItem?.defaultValue || 0;

      if (isChecked) {
        delete newValues[itemType];
      } else {
        newValues[itemType] = itemValue;
      }

      return newValues;
    });
  };

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
        </div>

        <div className="input__block">
          <div className="num-tickets__block">
            <label htmlFor="num-tickets">Rewards Left:</label>
            <select className="select" onChange={handleSelectTicketsChange}>
              {Array.from({ length: totalQuantity + 1 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
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
        <div className="total">
          <p className="total_points--h2">Total Points: {totalPoints}</p>
          <div className="total_points--img"></div>
        </div>

        <div className="total">
          <p className="total_tickets--h2">Total Spend: {multipliedResult}</p>
          <div className="total_tickets--img"></div>
        </div>

        <div className="total">
          <p className="total_received--h2">
            Received Tickets: {receivedTickets}
          </p>
          <div className="total_tickets--img"></div>
        </div>
        <div className="total">
          <p
            className={
              receivedTickets > multipliedResult ? "green" : "total_tickets--h2"
            }
          >
            Difference Tickets:{receivedTickets > multipliedResult ? "+" : ""}
            {Math.round(receivedTickets - multipliedResult)}
          </p>
          <div className="total_tickets--img"></div>
        </div>
        <div className="total">
          <p className="green">in gems: {multipliedResult * 300}</p>
          <div className="total_gems--img"></div>
        </div>
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
