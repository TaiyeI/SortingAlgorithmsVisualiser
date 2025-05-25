import { useEffect, useState } from "react";
import Header from "./Header";
import Sorter from "./Sorter";

const App = () => {
  const [items, setItems] = useState(4);
  const [algo, setAlgo] = useState(0);
  const [dataArray, setDataArray] = useState([50, 20, 11, 70]);
  const [checkingIndexes, setCheckingIndexes] = useState([]);

  const createArray = () => {
    let temparray = [];
    for (let i = 0; i < items; i++) {
      let divHeight = 1 + Math.floor(Math.random() * 99);
      temparray.push(divHeight);
    }
    setDataArray(temparray);
  };

  const waitTime = (delay = 300) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  const bubbleSort = async () => {
    let unsorted = true;
    let arraylength = dataArray.length - 1;
    let tempdata = Array.from(dataArray);
    while (unsorted === true) {
      unsorted = false;
      for (let i = 0; i < arraylength; i++) {
        setCheckingIndexes([i, i + 1]);
        if (tempdata[i] > tempdata[i + 1]) {
          unsorted = true;
          let swapvalue = tempdata[i];
          tempdata[i] = tempdata[i + 1];
          tempdata[i + 1] = swapvalue;
          // console.log(tempdata);
          setDataArray(Array.from(tempdata));
          await waitTime(50);
        }
      }
    }
  };

  const InsertionSort = async () => {
    let arraylength = dataArray.length;
    let temparray = Array.from(dataArray);
    let sortedindexes = [];
    for (let i = 1; i < arraylength; i++) {
      let current = temparray[i];
      while (i > 0 && temparray[i - 1] > current) {
        temparray[i] = temparray[i - 1];
        i -= 1;
      }
      temparray[i] = current;
      sortedindexes.push(i);
      setDataArray(Array.from(temparray));
      await waitTime(50);
      setCheckingIndexes(sortedindexes);
    }
  };

  const myAlgorithms = [bubbleSort, InsertionSort];

  const runAlgorithm = () => {
    myAlgorithms[algo]();
  };

  useEffect(() => {
    createArray();
  }, [items]);

  return (
    <div className="App">
      <Header
        items={items}
        setItems={setItems}
        algo={algo}
        setAlgo={setAlgo}
        runAlgorithm={runAlgorithm}
      />
      <Sorter dataArray={dataArray} checkingIndexes={checkingIndexes} />
    </div>
  );
};

export default App;
