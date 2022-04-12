import React, { useState } from "react";
import * as V from "victory";
import "./plot.css";
import {
  VictoryLine,
  VictoryChart,
  VictoryClipContainer,
  VictoryScatter,
  VictoryLabel,
} from "victory";
const BasicPlot = ({ tempResult }) => {
  const [isHumidityVisible, setHumidityVisible] = useState(true);
  const [isTempVisible, setTempVisible] = useState(true);

  const humidityHandlder = () => {
    setHumidityVisible(false);
  };

  const tempHandlder = () => {
    setTempVisible(false);
  };
  const clearStats = () => {
    setHumidityVisible(true);
    setTempVisible(true);
  };
  return (
    <div className="graphContainer">
      <VictoryChart>
        {isTempVisible && (
          <VictoryLine
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
            }
            style={{
              data: {
                stroke: "#c43a31",
                strokeWidth: 1,
                strokeLinecap: "round",
              },
            }}
            data={tempResult}
            x={0}
            y={"temp_f"}
          />
        )}
        {isHumidityVisible && (
          <VictoryLine
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 5, right: 10 }} />
            }
            style={{
              data: { stroke: "blue", strokeWidth: 1, strokeLinecap: "round" },
            }}
            data={tempResult}
            x={0}
            y={"humidity"}
          />
        )}
        <VictoryScatter
          domain={[-10, 10]}
          data={[{ x: -10, y: 5 }]}
          labels={() => ["Temperature", "humidity"]}
          labelComponent={
            <VictoryLabel
              dy={-20}
              textAnchor="start"
              backgroundPadding={[3, { left: 20, right: 20 }, { left: 20 }]}
              backgroundStyle={[
                { fill: "red", opacity: 0.2 },
                { fill: "blue", opacity: 0.2 },
              ]}
            />
          }
        />
      </VictoryChart>
      <button className="customButton-blue" onClick={humidityHandlder}>
        Hide Humidity Stats
      </button>
      <button className="customButton-red" onClick={tempHandlder}>
        Hide Temperature Stats
      </button>
      <butt className="customButton-green" onClick={clearStats}>
        Clear{" "}
      </butt>
    </div>
  );
};

export default BasicPlot;
