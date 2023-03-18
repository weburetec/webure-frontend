import React from "react";
import style from "./automate.module.css";

export class Divdata extends React.Component {
  constructor(props) {
    super(props);
    this.switchBorder = this.switchBorder.bind(this);
    // this.newBorder =
    this.state = {
      currentBorder: 0,
      automatedata: [
        {
          id: 0,
          title: "Startup solution",
          data: "We help startups build product MVPS, set up teams, and access new technologies",
          time: "4000",
        },
        {
          id: 1,
          title: "Product Companices",
          data: "Our technical capabiliteis help accelerate product development & delivery",
          time: "8000",
        },
        {
          id: 2,
          title: "Digital Agencies",
          data: "We help digital agencies manage talent shortage and export expertise. ",
          time: "12000",
        },
        {
          id: 3,
          title: "Enterprises",
          data: "Our 360 enterprise solutions range from product development to modenization.",
          time: "16000",
        },
      ],
    };
  }

  switchBorder() {
    // console.log(this.state.currentBorder);
    if (this.state.currentBorder < this.state.automatedata.length - 1) {
      this.setState({
        currentBorder: this.state.currentBorder + 1,
      });
    } else {
      this.setState({
        currentBorder: 0,
      });
    }
    return this.currentBorder;
  }

  componentDidMount() {
    setInterval(this.switchBorder, 4000);
  }

  render() {
    return (
      <div className={style.rightdiv}>
        {this.state.automatedata &&
          this.state.automatedata.map((e) => (
            <div
              className={style.singledatadiv}
              style={
                e.id === this.state.currentBorder
                  ? { border: "2px solid #581C87" }
                  : null
              }
            >
              <h1>{e.title}</h1>
              <p>{e.data}</p>
            </div>
          ))}
      </div>
    );
  }
}