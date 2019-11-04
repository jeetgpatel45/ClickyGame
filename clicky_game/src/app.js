import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Content from "./components/content";
import Image from "./components/image";
import Img from "./components/image.json";
import goku from "./images/goku.jpg";
import jerry from "./images/jerry.jpg";
import johnny from "./images/johnny.jpg";
import picachu from "./images/picachu.jpg";
import popayee from "./images/popayee.jpg";
import scobeeDoo from "./images/scobeeDoo.jpg";
import spongebob from "./images/spongebob.jpg";
import tom from "./images/tom.jpg";

class App extends React.Component {

  state = {
    picked: [],
    score: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;

    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        score: this.state.score + 1,
        topscore: this.state.score + 1 > this.state.topscore ? this.state.score + 1 : this.state.topscore,
        message: "score: Good choice!"
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Incorrect: Play again?",
        score: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "goku":
        return `${goku}`
      case "jerry":
        return `${jerry}`
      case "johnny":
        return `${johnny}`
      case "picachu":
        return `${picachu}`
      case "popayee":
        return `${popayee}`
      case "scobeeDoo":
        return `${scobeeDoo}`
      case "spongebob":
        return `${spongebob}`
      case "tom":
        return `${tom}`
      default:
        return `${spongebob}`
    }
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} message={this.state.message} />
        <Header />
        <Content>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg} />
          ))}
        </Content>
      </div>
    )
  }
}

export default App;