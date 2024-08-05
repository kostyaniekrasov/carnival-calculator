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
    tickets: 2,
    items: [
      {
        name: "Relic Core",
        quantity: 1,
        pointsPerItem: 360,
        type: "A",
        image: "images/relicCore.png",
        defaultValue: 1,
      },
      {
        name: "Panda shards x5",
        quantity: 3,
        pointsPerItem: 180,
        type: "B",
        image: "images/shardPanda.png",
      },
      {
        name: "Pands shards x3",
        quantity: 6,
        pointsPerItem: 120,
        type: "C",
        image: "images/shardPanda.png",
      },
      {
        name: "S key x3",
        quantity: 10,
        pointsPerItem: 90,
        type: "D",
        image: "images/keyS.png",
      },
      {
        name: "S key x2",
        quantity: 40,
        pointsPerItem: 18,
        type: "E",
        image: "images/keyS.png",
      },
      {
        name: "S key x1",
        quantity: 40,
        pointsPerItem: 18,
        type: "F",
        image: "images/keyS.png",
      },
      {
        name: "Oil x100",
        quantity: 60,
        pointsPerItem: 12,
        type: "G",
        image: "images/oil.png",
      },
      {
        name: "Relic Core",
        quantity: 1,
        pointsPerItem: 360,
        type: "Last",
        image: "images/relicCore.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Panda shards",
    tickets: 3,
    items: [
      {
        name: "Panda shards x20",
        quantity: 1,
        pointsPerItem: 540,
        type: "A",
        image: "images/shardPanda.png",
        defaultValue: 1,
      },
      {
        name: "Shards selector x20",
        quantity: 2,
        pointsPerItem: 270,
        type: "B",
        image: "images/shardSelect.png",
      },
      {
        name: "Shards selector x15",
        quantity: 3,
        pointsPerItem: 180,
        type: "C",
        image: "images/shardSelect.png",
      },
      {
        name: "Panda shards x3",
        quantity: 4,
        pointsPerItem: 135,
        type: "D",
        image: "images/shardPanda.png",
      },
      {
        name: "EDF key x1",
        quantity: 20,
        pointsPerItem: 27,
        type: "E",
        image: "images/keyGolden.png",
      },
      {
        name: "Collectible key x1",
        quantity: 20,
        pointsPerItem: 27,
        type: "F",
        image: "images/keyCollectible.png",
      },
      {
        name: "Silver key x1",
        quantity: 30,
        pointsPerItem: 18,
        type: "G",
        image: "images/keySilver.png",
      },
      {
        name: "Panda shards x20",
        quantity: 1,
        pointsPerItem: 540,
        type: "Last",
        image: "images/shardPanda.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Panda full set",
    tickets: 2,
    items: [
      {
        name: "Panda costume",
        quantity: 1,
        pointsPerItem: 360,
        type: "A",
        image: "images/pandaFullSuit.png",
        defaultValue: 1,
      },
      {
        name: "Shard selector x10",
        quantity: 2,
        pointsPerItem: 180,
        type: "B",
        image: "images/shardSelect.png",
      },
      {
        name: "Panda shards x3",
        quantity: 3,
        pointsPerItem: 120,
        type: "C",
        image: "images/shardPanda.png",
      },
      {
        name: "Panda shards x2",
        quantity: 4,
        pointsPerItem: 90,
        type: "D",
        image: "images/shardPanda.png",
      },
      {
        name: "EDF key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "E",
        image: "images/keyGolden.png",
      },
      {
        name: "Collectible key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "F",
        image: "images/keyCollectible.png",
      },
      {
        name: "Silver key x1",
        quantity: 30,
        pointsPerItem: 12,
        type: "G",
        image: "images/keySilver.png",
      },
      {
        name: "Panda shards x10",
        quantity: 1,
        pointsPerItem: 360,
        type: "Last",
        image: "images/shardPanda.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Common full set",
    tickets: 2,
    items: [
      {
        name: "Common costume",
        quantity: 1,
        pointsPerItem: 360,
        type: "A",
        image: "images/commonFullSuit.png",
        defaultValue: 1,
      },
      {
        name: "Shard selector x10",
        quantity: 2,
        pointsPerItem: 180,
        type: "B",
        image: "images/shardSelect.png",
      },
      {
        name: "Shard selector x5",
        quantity: 3,
        pointsPerItem: 120,
        type: "C",
        image: "images/shardSelect.png",
      },
      {
        name: "Common shard x3",
        quantity: 4,
        pointsPerItem: 90,
        type: "D",
        image: "images/shardCommon.png",
      },
      {
        name: "EDF key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "E",
        image: "images/keyGolden.png",
      },
      {
        name: "Collectible key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "F",
        image: "images/keyCollectible.png",
      },
      {
        name: "Silver key x1",
        quantity: 30,
        pointsPerItem: 12,
        type: "G",
        image: "images/keySilver.png",
      },
      {
        name: "Shard selector x25",
        quantity: 1,
        pointsPerItem: 360,
        type: "Last",
        image: "images/shardSelect.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Common hat",
    tickets: 1,
    items: [
      {
        name: "Common hat",
        quantity: 1,
        pointsPerItem: 270,
        type: "A",
        image: "images/Head_5066.png",
        defaultValue: 1,
      },
      {
        name: "Shard selector x5",
        quantity: 3,
        pointsPerItem: 90,
        type: "B",
        image: "images/shardSelect.png",
      },
      {
        name: "Shard selector x2",
        quantity: 6,
        pointsPerItem: 45,
        type: "C",
        image: "images/shardSelect.png",
      },
      {
        name: "Common shard x1",
        quantity: 10,
        pointsPerItem: 27,
        type: "D",
        image: "images/shardCommon.png",
      },
      {
        name: "EDF key x1",
        quantity: 30,
        pointsPerItem: 9,
        type: "E",
        image: "images/keyGolden.png",
      },
      {
        name: "Revival token x1",
        quantity: 30,
        pointsPerItem: 9,
        type: "F",
        image: "images/revivalCoin.png",
      },
      {
        name: "Silver key x1",
        quantity: 40,
        pointsPerItem: 6,
        type: "G",
        image: "images/keySilver.png",
      },
      {
        name: "Shard selctor x15",
        quantity: 1,
        pointsPerItem: 270,
        type: "Last",
        image: "images/shardSelect.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Common suit",
    tickets: 1,
    items: [
      {
        name: "Common suit",
        quantity: 1,
        pointsPerItem: 270,
        type: "A",
        image: "images/Body_5166.png",
        defaultValue: 1,
      },
      {
        name: "Shard selector x5",
        quantity: 3,
        pointsPerItem: 90,
        type: "B",
        image: "images/shardSelect.png",
      },
      {
        name: "Shard selector x2",
        quantity: 6,
        pointsPerItem: 45,
        type: "C",
        image: "images/shardSelect.png",
      },
      {
        name: "Common shard x1",
        quantity: 10,
        pointsPerItem: 27,
        type: "D",
        image: "images/shardCommon.png",
      },
      {
        name: "EDF key x1",
        quantity: 30,
        pointsPerItem: 9,
        type: "E",
        image: "images/keyGolden.png",
      },
      {
        name: "Revival token x1",
        quantity: 30,
        pointsPerItem: 9,
        type: "F",
        image: "images/revivalCoin.png",
      },
      {
        name: "Silver key x1",
        quantity: 40,
        pointsPerItem: 6,
        type: "G",
        image: "images/keySilver.png",
      },
      {
        name: "Shard selctor x15",
        quantity: 1,
        pointsPerItem: 270,
        type: "Last",
        image: "images/shardSelect.png",
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
    title: "Tech part selector",
    tickets: 3,
    items: [
      {
        name: "Tech part selector x1",
        quantity: 1,
        pointsPerItem: 540,
        type: "A",
        image: "images/techPartYellowSelect.png",
        defaultValue: 1,
      },
      {
        name: "Random yellow tech x1",
        quantity: 2,
        pointsPerItem: 270,
        type: "B",
        image: "images/techPartRandom.png",
      },
      {
        name: "Up to gold tech x15",
        quantity: 3,
        pointsPerItem: 180,
        type: "C",
        image: "images/techPartUpToGold.png",
      },
      {
        name: "Random purple tech x1",
        quantity: 4,
        pointsPerItem: 135,
        type: "D",
        image: "images/techPartRandom.png",
      },
      {
        name: "S key x1",
        quantity: 20,
        pointsPerItem: 27,
        type: "E",
        image: "images/keyS.png",
      },
      {
        name: "Tech part key x1",
        quantity: 20,
        pointsPerItem: 27,
        type: "F",
        image: "images/keyTechPart.png",
      },
      {
        name: "Pet golden key x1",
        quantity: 30,
        pointsPerItem: 18,
        type: "G",
        image: "images/keyPetGolden.png",
      },
      {
        name: "Tech part selector x1",
        quantity: 1,
        pointsPerItem: 540,
        type: "Last",
        image: "images/techPartYellowSelect.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Tech part random 1",
    tickets: 2,
    items: [
      {
        name: "Random yellow tech x1",
        quantity: 1,
        pointsPerItem: 360,
        type: "A",
        image: "images/techPartRandom.png",
        defaultValue: 1,
      },
      {
        name: "Random purple tech x3",
        quantity: 2,
        pointsPerItem: 180,
        type: "B",
        image: "images/techPartRandom.png",
      },
      {
        name: "Tech part key x10",
        quantity: 3,
        pointsPerItem: 120,
        type: "C",
        image: "images/keyTechPart.png",
      },
      {
        name: "Random purple tech x1",
        quantity: 4,
        pointsPerItem: 90,
        type: "D",
        image: "images/techPartRandom.png",
      },
      {
        name: "S key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "E",
        image: "images/keyS.png",
      },
      {
        name: "Tech part key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "F",
        image: "images/keyTechPart.png",
      },
      {
        name: "Up to green tech x3",
        quantity: 30,
        pointsPerItem: 12,
        type: "G",
        image: "images/techPartUpToGreen.png",
      },
      {
        name: "Random yellow tech x1",
        quantity: 1,
        pointsPerItem: 360,
        type: "Last",
        image: "images/techPartRandom.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Tech part random 2",
    tickets: 1,
    items: [
      {
        name: "Random yellow tech x1",
        quantity: 1,
        pointsPerItem: 270,
        type: "A",
        image: "images/techPartRandom.png",
        defaultValue: 1,
      },
      {
        name: "Random purple tech x3",
        quantity: 3,
        pointsPerItem: 90,
        type: "B",
        image: "images/techPartRandom.png",
      },
      {
        name: "Tech part key x5",
        quantity: 6,
        pointsPerItem: 45,
        type: "C",
        image: "images/keyTechPart.png",
      },
      {
        name: "Random purple tech x1",
        quantity: 10,
        pointsPerItem: 27,
        type: "D",
        image: "images/techPartRandom.png",
      },
      {
        name: "Silver key x1",
        quantity: 40,
        pointsPerItem: 9,
        type: "E",
        image: "images/keySilver.png",
      },
      {
        name: "Pet silver key x1",
        quantity: 40,
        pointsPerItem: 9,
        type: "F",
        image: "images/keyPetSilver.png",
      },
      {
        name: "Random green tech x1",
        quantity: 60,
        pointsPerItem: 6,
        type: "G",
        image: "images/techPartRandom.png",
      },
      {
        name: "Random yellow tech x1",
        quantity: 1,
        pointsPerItem: 270,
        type: "Last",
        image: "images/techPartRandom.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Pet selector",
    tickets: 3,
    items: [
      {
        name: "Yellow pet selector x1",
        quantity: 1,
        pointsPerItem: 540,
        type: "A",
        image: "images/petYellowSelect.png",
        defaultValue: 1,
      },
      {
        name: "Yellow pet random x1",
        quantity: 2,
        pointsPerItem: 270,
        type: "B",
        image: "images/petRandom.png",
      },
      {
        name: "Pet golden key x15",
        quantity: 3,
        pointsPerItem: 180,
        type: "C",
        image: "images/keyPetGolden.png",
      },
      {
        name: "Pet crystal x1",
        quantity: 4,
        pointsPerItem: 135,
        type: "D",
        image: "images/petCrystal.png",
      },
      {
        name: "Purple toy random x1",
        quantity: 20,
        pointsPerItem: 27,
        type: "E",
        image: "images/petToyPurpleRandom.png",
      },
      {
        name: "Pet golden key x1",
        quantity: 20,
        pointsPerItem: 27,
        type: "F",
        image: "images/keyPetGolden.png",
      },
      {
        name: "EDF key x1",
        quantity: 30,
        pointsPerItem: 18,
        type: "G",
        image: "images/keyGolden.png",
      },
      {
        name: "Pet crystal x10",
        quantity: 1,
        pointsPerItem: 540,
        type: "Last",
        image: "images/petCrystal.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Pet random 1",
    tickets: 2,
    items: [
      {
        name: "Random yellow pet x1",
        quantity: 1,
        pointsPerItem: 360,
        type: "A",
        image: "images/petRandom.png",
        defaultValue: 1,
      },
      {
        name: "Random purple pet x3",
        quantity: 2,
        pointsPerItem: 180,
        type: "B",
        image: "images/petRandom.png",
      },
      {
        name: "Pet golden key x6",
        quantity: 3,
        pointsPerItem: 120,
        type: "C",
        image: "images/keyPetGolden.png",
      },
      {
        name: "Random purple pet x1",
        quantity: 4,
        pointsPerItem: 90,
        type: "D",
        image: "images/petRandom.png",
      },
      {
        name: "Purple toy random x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "E",
        image: "images/petToyPurpleRandom.png",
      },
      {
        name: "Pet golden key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "F",
        image: "images/keyPetGolden.png",
      },
      {
        name: "EDF key x1",
        quantity: 30,
        pointsPerItem: 12,
        type: "G",
        image: "images/keyGolden.png",
      },
      {
        name: "Pet crystal x6",
        quantity: 1,
        pointsPerItem: 360,
        type: "Last",
        image: "images/petCrystal.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Pet random 2",
    tickets: 1,
    items: [
      {
        name: "Random yellow pet x1",
        quantity: 1,
        pointsPerItem: 270,
        type: "A",
        image: "images/petRandom.png",
        defaultValue: 1,
      },
      {
        name: "Random purple pet x3",
        quantity: 3,
        pointsPerItem: 90,
        type: "B",
        image: "images/petRandom.png",
      },
      {
        name: "Pet golden key x5",
        quantity: 6,
        pointsPerItem: 45,
        type: "C",
        image: "images/keyPetGolden.png",
      },
      {
        name: "Random purple pet x1",
        quantity: 10,
        pointsPerItem: 27,
        type: "D",
        image: "images/petRandom.png",
      },
      {
        name: "Spec ops ticket x1",
        quantity: 40,
        pointsPerItem: 9,
        type: "E",
        image: "images/specOpsTicket.png",
      },
      {
        name: "Pet silver key x1",
        quantity: 40,
        pointsPerItem: 9,
        type: "F",
        image: "images/keyPetSilver.png",
      },
      {
        name: "Blue toy random x3",
        quantity: 60,
        pointsPerItem: 6,
        type: "G",
        image: "images/petToyBlueRandom.png",
      },
      {
        name: "Pet crystal x6",
        quantity: 1,
        pointsPerItem: 270,
        type: "Last",
        image: "images/petCrystal.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Collectible selector",
    tickets: 3,
    items: [
      {
        name: "Collectible selector",
        quantity: 1,
        pointsPerItem: 540,
        type: "A",
        image: "images/collectibleYellowSelect.png",
        defaultValue: 1,
      },
      {
        name: "Random collectible",
        quantity: 2,
        pointsPerItem: 270,
        type: "B",
        image: "images/collectibleYellowRandom.png",
      },
      {
        name: "Collectible key x15",
        quantity: 3,
        pointsPerItem: 180,
        type: "C",
        image: "images/keyCollectible.png",
      },
      {
        name: "Purple select collect x3",
        quantity: 4,
        pointsPerItem: 135,
        type: "D",
        image: "images/collectiblePurpleSelect.png",
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
        name: "Collectible key x1",
        quantity: 30,
        pointsPerItem: 18,
        type: "G",
        image: "images/keyCollectible.png",
      },
      {
        name: "Collectible selector",
        quantity: 1,
        pointsPerItem: 540,
        type: "Last",
        image: "images/collectibleYellowSelect.png",
        defaultValue: 1,
      },
    ],
  },
  {
    title: "Collectible random 1",
    tickets: 2,
    items: [
      {
        name: "Random collectible",
        quantity: 1,
        pointsPerItem: 360,
        type: "A",
        image: "images/collectibleYellowRandom.png",
        defaultValue: 1,
      },
      {
        name: "Purple rand collect x3",
        quantity: 2,
        pointsPerItem: 180,
        type: "B",
        image: "images/collectiblePurpleRandom.png",
      },
      {
        name: "Collectible key x10",
        quantity: 3,
        pointsPerItem: 120,
        type: "C",
        image: "images/keyCollectible.png",
      },
      {
        name: "Purple rand collect x1",
        quantity: 4,
        pointsPerItem: 90,
        type: "D",
        image: "images/collectiblePurpleRandom.png",
      },
      {
        name: "Collectible key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "E",
        image: "images/keyCollectible.png",
      },
      {
        name: "EDF key x1",
        quantity: 20,
        pointsPerItem: 18,
        type: "F",
        image: "images/keyGolden.png",
      },
      {
        name: "Pet golden key x1",
        quantity: 30,
        pointsPerItem: 12,
        type: "G",
        image: "images/keyPetGolden.png",
      },
      {
        name: "Random collectible",
        quantity: 1,
        pointsPerItem: 360,
        type: "Last",
        image: "images/collectibleYellowRandom.png",
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

          <div className="ticket__block">
            {`${array?.tickets}x`}
            <div className="img--ticket"></div>
          </div>
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
