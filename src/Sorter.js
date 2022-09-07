import React from "react";

const Sorter = (props) => {
  const { dataArray, checkingIndexes } = props;

  return (
    <div className="mainstage">
      <div className="sorter">
        {dataArray.map((data, index) => {
          let backgroundColor = "#2ca6a4";
          if (checkingIndexes.includes(index)) {
            backgroundColor = "#ff729f";
          }
          return (
            <div
              key={index}
              className="div"
              style={{
                width: 100 / dataArray.length - 0.4 + "%",
                height: 0.6 * data + "%",
                backgroundColor,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Sorter;
