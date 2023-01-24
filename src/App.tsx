import React from "react";
import { Bar } from "react-chartjs-2";
// import faker from "faker";
import { data, options } from "./utils";

function App() {
  // console.log(data.labels.map(() => faker.datatype.number({ max: 1000 })));
  return <Bar options={options} data={data} />;
}

export default App;
