import React, { useState } from 'react';

export const AllFilters = {
  "p": {
    basic: true,
    title: "Quick filter on # players",
    options: [
      { value: '2', action: (list) => list.filter(x => x.minplayers <= 2 && x.maxplayers >= 2 && (x.suggestedPlayers.best.indexOf("2") > -1 || x.suggestedPlayers.recommended.indexOf("2") > -1) && x.suggestedPlayers.avoid.indexOf("2") === -1) },
      { value: '3', action: (list) => list.filter(x => x.minplayers <= 3 && x.maxplayers >= 3 && (x.suggestedPlayers.best.indexOf("3") > -1 || x.suggestedPlayers.recommended.indexOf("3") > -1) && x.suggestedPlayers.avoid.indexOf("3") === -1) },
      { value: '4', action: (list) => list.filter(x => x.minplayers <= 4 && x.maxplayers >= 4 && (x.suggestedPlayers.best.indexOf("4") > -1 || x.suggestedPlayers.recommended.indexOf("4") > -1) && x.suggestedPlayers.avoid.indexOf("4") === -1) },
      { value: '5', action: (list) => list.filter(x => x.minplayers <= 5 && x.maxplayers >= 5 && (x.suggestedPlayers.best.indexOf("5") > -1 || x.suggestedPlayers.recommended.indexOf("5") > -1) && x.suggestedPlayers.avoid.indexOf("5") === -1) },
      { value: '6', action: (list) => list.filter(x => x.minplayers <= 6 && x.maxplayers >= 6 && (x.suggestedPlayers.best.indexOf("6") > -1 || x.suggestedPlayers.recommended.indexOf("6") > -1) && x.suggestedPlayers.avoid.indexOf("6") === -1) },
    ]
  },
  "brain": {
    basic: true,
    title: "Quick filter on brainload",
    options: [
      { value: "easy", name: 'Easy', action: (list) => list.filter(x => x.playtime < 90 && x.weight <= 2.5) },
      { value: "mediun", name: 'Medium', action: (list) => list.filter(x => x.playtime < 180 && x.weight >= 2 && x.weight <= 3.2 && x.group.indexOf("Children's Game") === -1) },
      { value: "heavy", name: 'Heavy', action: (list) => list.filter(x => x.playtime > 60 && x.weight >= 3.2 && x.group.indexOf("Children's Game") === -1) },   
     ]
  },
  "style": {
    basic: true,
    title: "Quick filter on style",
    options: [
      { value: "war", name: 'War', action: (list) => list.filter(x => 
        x.group.indexOf("Party Game") === -1 &&
        x.group.indexOf("Storytelling") === -1 &&
        x.group.indexOf("Wargame") > -1
        ) },
      { value: "party", name: 'Party', action: (list) => list.filter(x => 
        x.group.indexOf("Party Game") > -1 ||
        x.group.join(',').includes("Dexterity")
        ) },
      { value: "euro", name: 'Euro', action: (list) => list.filter(x => 
        x.group.indexOf("Party Game") === -1 &&
        x.group.indexOf("Real-time") === -1 &&
        x.group.indexOf("Bluffing") === -1 &&
        x.group.indexOf("Role Playing") === -1 &&
        x.group.indexOf("Traitor Game") === -1 &&
        x.group.indexOf("Push Your Luck") === -1 &&
        x.group.indexOf("Storytelling") === -1 &&
        x.group.indexOf("Take That") === -1
        ) },   
     ]
  },
  "length": {
    title: "Game length",
    options: [
      { value: 'short', name: 'Short', action: (list) => list.filter(x => x.playtime < 60) },
      { value: 'medium', name: 'Medium', action: (list) => list.filter(x => x.playtime > 45 && x.playtime < 120) },
      { value: 'long', name: 'Long', action: (list) => list.filter(x => x.playtime > 100) },
    ]
  },
  "players": {
    title: "Players",
    options: [
      { value: '1', action: (list) => list.filter(x => x.minplayers <= 1 && x.maxplayers >= 1) },
      { value: '2', action: (list) => list.filter(x => x.minplayers <= 2 && x.maxplayers >= 2) },
      { value: '3', action: (list) => list.filter(x => x.minplayers <= 3 && x.maxplayers >= 3) },
      { value: '4', action: (list) => list.filter(x => x.minplayers <= 4 && x.maxplayers >= 4) },
      { value: '5', action: (list) => list.filter(x => x.minplayers <= 5 && x.maxplayers >= 5) },
      { value: '6', action: (list) => list.filter(x => x.minplayers <= 6 && x.maxplayers >= 6) },
      { value: '7+', action: (list) => list.filter(x => x.maxplayers >= 7) },
    ]
  },
  "weight": {
    title: "Game weight",
    options: [
      { value: 'light', name: 'Light', action: (list) => list.filter(x => x.weight <= 2) },
      { value: 'medlight', name: 'Medium Light', action: (list) => list.filter(x => x.weight >= 1.5 && x.weight <= 2.5) },
      { value: 'med', name: 'Medium', action: (list) => list.filter(x => x.weight >= 2 && x.weight <= 3.5) },
      { value: 'medheavy', name: 'Medium Heavy', action: (list) => list.filter(x => x.weight >= 3 && x.weight <= 4.5) },
      { value: 'heavy', name: 'Heavy', action: (list) => list.filter(x => x.weight >= 4) },
    ]
  },
  "year": {
    title: "Year published",
    options: [
      { value: '2022', action: (list) => list.filter(x => x.year >= 2022 && x.year <= 2022) },
      { value: '2021', action: (list) => list.filter(x => x.year >= 2021 && x.year <= 2021) },
      { value: '2020', action: (list) => list.filter(x => x.year >= 2020 && x.year <= 2020) },
      { value: '2015-2019', action: (list) => list.filter(x => x.year >= 2015 && x.year <= 2019) },
      { value: '2010-2015', action: (list) => list.filter(x => x.year >= 2010 && x.year <= 2015) },
      { value: '2000-2009', action: (list) => list.filter(x => x.year >= 2000 && x.year <= 2009) },
      { value: '1990-1999', action: (list) => list.filter(x => x.year >= 1990 && x.year <= 1999) },
      { value: '0000-1990', action: (list) => list.filter(x => x.year <= 1990) },
    ]
  },
  "played": {
    title: "Played",
    options: [
      { value: 'Rated', action: (list) => list.filter(x => x.rating >= 1) },
      { value: 'Has plays', action: (list) => list.filter(x => x.plays > 0) },
    ]
  },
  "popularity": {
    title: "Popularity",
    options: [
      { value: 'High', action: (list) => list.filter(x => x.numowned >= 75000) },
      { value: 'Medium', action: (list) => list.filter(x => x.numowned >= 35000 && x.numowned < 75000) },
      { value: 'Low', action: (list) => list.filter(x => x.numowned > 10000 && x.numowned < 35000) },
      { value: 'Very Low', action: (list) => list.filter(x => x.numowned < 10000) },
    ]
  },
  "best": {
    title: "Best at",
    options: [
      { value: '1', action: (list) => list.filter(x => x.suggestedPlayers.best.indexOf("1") > -1) },
      { value: '2', action: (list) => list.filter(x => x.suggestedPlayers.best.indexOf("2") > -1) },
      { value: '3', action: (list) => list.filter(x => x.suggestedPlayers.best.indexOf("3") > -1) },
      { value: '4', action: (list) => list.filter(x => x.suggestedPlayers.best.indexOf("4") > -1) },
      { value: '5', action: (list) => list.filter(x => x.suggestedPlayers.best.indexOf("5") > -1) },
      { value: '6', action: (list) => list.filter(x => x.suggestedPlayers.best.indexOf("6") > -1) },
      { value: '7+', action: (list) => list.filter(x => x.suggestedPlayers.best.indexOf("7") > -1) },
    ]
  },
  "rec": {
    title: "Recommended at",
    options: [
      { value: '1', action: (list) => list.filter(x => x.suggestedPlayers.recommended.indexOf("1") > -1) },
      { value: '2', action: (list) => list.filter(x => x.suggestedPlayers.recommended.indexOf("2") > -1) },
      { value: '3', action: (list) => list.filter(x => x.suggestedPlayers.recommended.indexOf("3") > -1) },
      { value: '4', action: (list) => list.filter(x => x.suggestedPlayers.recommended.indexOf("4") > -1) },
      { value: '5', action: (list) => list.filter(x => x.suggestedPlayers.recommended.indexOf("5") > -1) },
      { value: '6', action: (list) => list.filter(x => x.suggestedPlayers.recommended.indexOf("6") > -1) },
      { value: '7+', action: (list) => list.filter(x => x.suggestedPlayers.recommended.indexOf("7") > -1) },
    ]
  },
  "avoid": {
    title: "Avoid at",
    options: [
      { value: '1', action: (list) => list.filter(x => x.suggestedPlayers.avoid.indexOf("1") > -1) },
      { value: '2', action: (list) => list.filter(x => x.suggestedPlayers.avoid.indexOf("2") > -1) },
      { value: '3', action: (list) => list.filter(x => x.suggestedPlayers.avoid.indexOf("3") > -1) },
      { value: '4', action: (list) => list.filter(x => x.suggestedPlayers.avoid.indexOf("4") > -1) },
      { value: '5', action: (list) => list.filter(x => x.suggestedPlayers.avoid.indexOf("5") > -1) },
      { value: '6', action: (list) => list.filter(x => x.suggestedPlayers.avoid.indexOf("6") > -1) },
      { value: '7+', action: (list) => list.filter(x => x.suggestedPlayers.avoid.indexOf("7") > -1) },
    ]
  },
  "type": {
    title: "Game Type",
    options: [
      { value: 'party', name: 'Party Game', action: (list) => list.filter(x => x.group.indexOf("Party Game") > -1) },
      { value: 'Miniatures', name: 'Miniatures', action: (list) => list.filter(x => x.group.indexOf("Miniatures") > -1) },
      { value: 'Real-time', name: 'Real-time', action: (list) => list.filter(x => x.group.indexOf("Real-time") > -1) },
      { value: 'Educational', name: 'Educational', action: (list) => list.filter(x => x.group.indexOf("Educational") > -1) },
      { value: 'child', name: "Children's Game", action: (list) => list.filter(x => x.group.indexOf("Children's Game") > -1) },
      { value: 'Wargame', name: 'Wargame', action: (list) => list.filter(x => x.group.indexOf("Wargame") > -1) },
      { value: 'Dice', name: 'Dice', action: (list) => list.filter(x => x.group.indexOf("Dice") > -1) },
    ]
  },
  "category": {
    title: "Game Category",
    options: [
      { value: 'bluff', name: 'Bluffing', action: (list) => list.filter(x => x.group.indexOf("Bluffing") > -1) },
      { value: 'neg', name: 'Negotiation', action: (list) => list.filter(x => x.group.indexOf("Negotiation") > -1) },
      { value: 'Dexterity', name: 'Dexterity', action: (list) => list.filter(x => x.group.join(',').includes("Dexterity")) },
      { value: 'Deduction', name: 'Deduction', action: (list) => list.filter(x => x.group.indexOf("Deduction") > -1) },
      { value: 'Memory', name: 'Memory', action: (list) => list.filter(x => x.group.indexOf("Memory") > -1) },
      { value: 'Political', name: 'Political', action: (list) => list.filter(x => x.group.indexOf("Political") > -1) },
      { value: 'Role Playing', name: 'Role Playing', action: (list) => list.filter(x => x.group.indexOf("Role Playing") > -1) },
      { value: 'Real-Time', name: 'Real-Time', action: (list) => list.filter(x => x.group.indexOf("Real-Time") > -1) },
    ]
  },
  "team": {
    title: "Player interaction",
    options: [
      { value: 'team', name: 'Team-Based', action: (list) => list.filter(x => x.group.indexOf("Team-Based Game") > -1) },
      { value: 'traitor', name: 'Traitor', action: (list) => list.filter(x => x.group.indexOf("Traitor Game") > -1) },
      { value: 'hidden', name: 'Hidden Roles', action: (list) => list.filter(x => x.group.indexOf("Hidden Roles") > -1) },
      { value: 'Negotiation', name: 'Negotiation', action: (list) => list.filter(x => x.group.indexOf("Negotiation") > -1) },
      { value: 'Trading', name: 'Trading', action: (list) => list.filter(x => x.group.indexOf("Trading") > -1) },
      { value: 'Player Elimination', name: 'Player Elimination', action: (list) => list.filter(x => x.group.indexOf("Player Elimination") > -1) },
      { value: 'Cooperative Game', name: 'Cooperative', action: (list) => list.filter(x => x.group.indexOf("Cooperative Game") > -1) },
    ]
  },
  "mechanic": {
    title: "Game Mechanic",
    options: [
      { value: 'Auction', name: 'Auction', action: (list) => list.filter(x => x.group.join(',').includes("Auction")) },
      { value: 'Victory Points', name: 'Victory Points', action: (list) => list.filter(x => x.group.join(',').includes("Victory Points")) },
      { value: 'Drafting', name: 'Drafting', action: (list) => list.filter(x => x.group.join(',').includes("Drafting")) },
      { value: 'Worker Placement', name: 'Worker Placement', action: (list) => list.filter(x => x.group.join(',').includes("Worker Placement")) },
      { value: 'Area Majority', name: 'Area Majority', action: (list) => list.filter(x => x.group.join(',').includes("Area Majority")) },
      { value: 'Pick-up and Deliver', name: 'Pick-up and Deliver', action: (list) => list.filter(x => x.group.indexOf("Pick-up and Deliver") > -1) },
      { value: 'Dice Rolling', name: 'Dice Rolling', action: (list) => list.filter(x => x.group.indexOf("Dice Rolling") > -1) },
      { value: 'Push Your Luck', name: 'Push Your Luck', action: (list) => list.filter(x => x.group.indexOf("Push Your Luck") > -1) },
      { value: 'Tile Placement', name: 'Tile Placement', action: (list) => list.filter(x => x.group.indexOf("Tile Placement") > -1) },
      { value: 'take', name: 'Take-that', action: (list) => list.filter(x => x.group.indexOf("Take That") > -1) },
      { value: 'deckbuild', name: 'Deck, Bag, and Pool Building', action: (list) => list.filter(x => x.group.join(',').includes(" Building")) },
    ]
  },
  "setup": {
    default: ["-Legacy Game", "-Campaign Game"],
    title: "Game Setup",
    options: [
      { value: 'Simultaneous', name: 'Sixmultaneous Action Selection', action: (list) => list.filter(x => x.group.indexOf("Simultaneous Action Selection") > -1) },
      { value: 'Deck Construction', name: 'Deck Construction', action: (list) => list.filter(x => x.group.indexOf("Deck Construction") > -1) },
      { value: 'Variable Player Powers', name: 'Variable Player Powers', action: (list) => list.filter(x => x.group.indexOf("Variable Player Powers") > -1) },
      { value: 'Legacy Game', name: 'Legacy Game', action: (list) => list.filter(x => x.group.indexOf("Legacy Game") > -1) },
      { value: 'Campaign Game', name: 'Campaign/Scenario Game', action: (list) => list.filter(x => x.group.join(',').includes("Campaign Game")) },
    ]
  },
  "lang": {
    title: "Langauge Dependency",
    options: [
      { value: "1", name: 'No necessary in-game text', action: (list) => list.filter(x => x.language <= 2) },
      { value: "2", name: 'Some necessary text - easily memorized or small crib sheet', action: (list) => list.filter(x => x.language > 1.75 && x.language < 2.75) },
      { value: "3", name: 'Moderate in-game text - needs crib sheet or paste ups', action: (list) => list.filter(x => x.language > 2.5 && x.language < 3.75) },
      { value: "4", name: 'Extensive use of text - massive conversion needed to be playable', action: (list) => list.filter(x => x.language > 3.5 && x.language < 4.33) },
      { value: "5", name: 'Unplayable in another language', action: (list) => list.filter(x => x.language >= 4) },
    ]
  },
};

const toggle_filter = (key, value, filters, change) => {
  let newFilter = { ...filters };

  if (isActiveFilter(newFilter, key, value)) {
    var v = value.replace(/^-/g, '');
    let prev = newFilter[key].find(x => x === v || x === "-"+v);
    newFilter[key] = newFilter[key].filter(x => x !== prev);
    if (prev !== value) newFilter[key].push(value);
    if (newFilter[key].length === 0) {
      delete newFilter[key];
    }
  }
  else {
    if (!newFilter[key]) newFilter[key] = [];
    newFilter[key].push(value);
  }

  let queryString = Object.entries(newFilter).map(x => x[0] + "=" + encodeURIComponent(x[1].join(','))).join('&');
  change(queryString);
};

export const applyFilters = (collection, filters) => {
  let list = [...collection];
  for (const [key, values] of Object.entries(filters)) {
    let group = AllFilters[key];

    let remValues = values.filter(x => x.startsWith("-")).map(x => x.replace('-',''));
    let removeActiveFilters = group.options.filter(x => x.value && remValues.indexOf(x.value) > -1);
    if (removeActiveFilters.length) {
      let remaining = new Set(list);
      for (let f of removeActiveFilters) {
        let toRemove = f.action(list);
        for (let val of toRemove) remaining.delete(val);
      }
      list = Array.from(remaining.values());
    }

    let union = new Set();
    let activeFilters = group.options.filter(x => values.indexOf(x.value) > -1);
    if (activeFilters.length) {
      for (let f of activeFilters) {
        let filtered = f.action(list);
        for (let val of filtered) union.add(val);
      }
      list = Array.from(union.values());
    }
  }
  return list;
};

export const isActiveFilter = (filters, key, value) => {
  if (!filters[key]) return false;
  var v = value.replace(/^-/g, '');
  if (filters[key].indexOf(v) > -1) return "+";
  if (filters[key].indexOf("-" + v) > -1) return "-";
  return false;
};

const rightClick = (event, key, value, filters, change) => {
  event.preventDefault();
  event.stopPropagation();
  toggle_filter(key, value, filters, change);
  return false;
};

export const getDefaultFilters = () => {
  //return [];
  return Object.entries(AllFilters).filter(f => f[1].default).map(f => ({
    key: f[0],
    value: f[1].default
  }));
}

export const FilterCollectionWidget = ({ filters, change }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='filterlists'>
      {Object.entries(AllFilters).filter(f => showMore || f[1].basic === true).map(f =>
        <div className='card' key={f[0]}>
          <h3>{f[1].title}</h3>
          <ul>
            {f[1].options.map(o =>
              <li key={o.value}><button
                onContextMenu={(event) => rightClick(event, f[0], "-" + o.value, filters, change)}
                onClick={() => toggle_filter(f[0], o.value, filters, change)}
                className={ (isActiveFilter(filters, f[0], o.value) === "+" ? "selected" : null) + " " + (isActiveFilter(filters, f[0], "-"+o.value) === "-" ? "disselected" : null)}
               >{o.name || o.value}</button></li>
            )}
          </ul>
        </div>
      )}
        <div className='card'><button onClick={() => setShowMore(!showMore)}>{showMore ? "<<" : ">>"}</button></div>
    </div>);
};
