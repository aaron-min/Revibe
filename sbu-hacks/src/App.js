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
                <p>VIDEO FOR TESTING SCREEN CAPTURE</p><br/>
                <WebcamCapture />
            </div>
        );
    }
}

class WebcamCapture extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            imgLink: "data:image/jpeg;base64,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caNp9EaIqa139wzoXs6Z92wt52P2j2D0XZh4lr+GGbkUxfNPf2fSdW9VYKIYh/ezkWdM8AEcwwfYHrzJXrYcFccdvLx8/Jvl89o9m/W7nEBAQEBAQEBAQEBAQEBAQEBBp9M6tUlXnLGNpbKWPoSjl0hv7jcLK+Gl/MNsfIyY/llxukf7O52XNNMyVvBk143ge80EE+AXFfg/dl3Y/UKz88a/Jz1XoWuh/eU04A4sbtW+bLrlvxbx9HXXk4reLNe+rwmzjhPJ12nyKxnFMeYbRbfgFcPaHmFX4adywa9vtDzSMZtZp6aolyihnk7WxPLfitZa14958QztlpXzMN3Qaj18ubxHTt4mR4e/way48yF004N589nNfnY6+O7rNE6g0kVnTYqp4/m2EQPZGMj+K67MfFpT8XFk5uS3aOzqmNAAAAAAsABYAcgF1ON6QEBAQEBAQEBAQEBAQEBAQEBAQEBAQeHxtdk4A94BUaTEzCE6Pg/lQ/7bPonTCeu3u9x0sbeqxjfdY0fJNQibTP1TKUCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//Z"
        };
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
                    <br/>
                    <img src = {this.state.imgLink}/>
                    <p>{this.state.imgLink}</p>
                <button onClick={this.capture}>Capture photo</button>
            </div>
            

    );
  }
}

export default App;
