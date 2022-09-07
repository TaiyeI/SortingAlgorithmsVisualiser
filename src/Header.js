import React from "react";

const Header = (props) => {
  const { items, setItems, algo, setAlgo, runAlgorithm } = props;

  return (
    <div className="header">
      <div className="title">
        <h1>Sorting Visualiser</h1>
      </div>
      <select
        id="algorithms"
        className="algoselector"
        value={algo}
        onChange={(e) => setAlgo(e.target.value)}
      >
        <option value={0}>Bubble sort</option>
        <option value={1}>Insertion sort</option>
        <option value={2}>One sort</option>
        <option value={3}>two sort</option>
      </select>
      <div className="slidecontainer">
        <h3>Range:</h3>
        <input
          type="range"
          min="1"
          max="100"
          value={items}
          className="slider"
          onChange={(e) => {
            setItems(e.target.value);
          }}
        ></input>
        <h3>{items}</h3>
      </div>
      <button className="sortbutton" onClick={(e) => runAlgorithm()}>
        Sort
      </button>
    </div>
  );
};

export default Header;
