import React from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";

class App extends React.Component {
    componentDidMount(){
    }
    render() {
        return(
            <div>
                <WebcamCapture />
            </div>
        );
    }
}

class WebcamCapture extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgLink: ""
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.capture(),
          3000
        );
      }
      
    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setState({imgLink: imageSrc});
    };

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div>
                <Webcam
                    audio={false}
                    height={400}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={400}
                    videoConstraints={videoConstraints}
                    />
                    <img src = {this.state.imgLink}/>
                <button onClick={this.capture}>Capture photo</button>
            </div>


    );
  }
}

export default App;
