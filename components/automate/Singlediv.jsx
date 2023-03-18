import React from "react";
import style from "./automate.module.css";

export class Singlediv extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3lChncjgJ7fwaH9SdsZBF9pHSwbtP7V5sw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRJ2lVfjuGFp9k0ej-4Y_LWNZz25BS3tq46A&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSthe7wlWf84h1xX_bJ-Xdtb_a63QhbEkUJTQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6rXaWbcyx3vi4zhpyRqayF149ipJnfhqXQ&usqp=CAU",
      ],
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 4000);
  }

  render() {
    return (
      <div className={style.dataimage}>
        <img
          src={this.state.images[this.state.currentImage]}
          alt="cleaning images"
        />
      </div>
    );
  }
}