import React from "react";
import { Row } from "reactstrap";
//import { Media } from "reactstrap";
//import "./App.css";
export class App extends React.Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div>
        <div className="page">
          <div className="container">
            <div className="img-holder">
              <img
                src={profileImg}
                alt=".."
                id="img"
                className="rounded-circle"
                style={{ width: 300, height: 300 }}
              ></img>
            </div>
            <input
              type="file"
              name="image-upload"
              id="input"
              accept="image/*"
              onChange={this.imageHandler}
            />

            <div className="label">
              <label htmlFor="input" className="image-upload"></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
