import * as React from "react";
/*import Paper from "@mui/material/Paper";
import {
  Chart,
  ScatterSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";*/
//import { Animation } from "@devexpress/dx-react-chart";

export default class Chart1 extends React.PureComponent {
  constructor(props) {
    super(props);
    const data = [
      { type: props.x1.name, value: props.x1.value, color: "blue" },
      { type: props.x2.name, value: props.x2.value },
    ];
    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const colors = ["orange", "blue"];

    return (
      /*<Paper>
        <Chart data={chartData} width="300" height="400">
          <ArgumentAxis />
          <ValueAxis max={2} />

          <ScatterSeries valueField="value" argumentField="type" />

          {/!*<Animation />*!/}
        </Chart>
      </Paper>*/
      <></>
    );
  }
}
