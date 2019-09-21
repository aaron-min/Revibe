import React from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";
const request = require('request');
const subscriptionKey = '6ec108bce66e40899ddd7e3486b44368';
const uriBase = 'https://eastus.api.cognitive.microsoft.com/face/v1.0/detect';
const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'emotion'
};

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
            imageUrl:"",
            imgLink: "",
            emotion: ""
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
        this.detectFace(imageSrc);
        this.setState({imgLink: imageSrc});
    };

    detectFace = (img) =>{
    console.log(img);
    
        let options = {
        uri: uriBase,
        qs: params,
        body: new Buffer(img.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64'), //uses regex to remove header data and leave image data
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        };
        console.log("options");
        console.log(options);
        request.post(options, (error, response, body) => {
        if (error) {
            console.log('Error: ', error);
            return;
        }
        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        var emotionObj = JSON.parse(body)[0].faceAttributes.emotion;

        this.chooseEmotion(emotionObj);
        // this.setState({emotion: });
        this.setState({azureResponse: jsonResponse});
            console.log(jsonResponse);
        });
    }
    chooseEmotion = (emotionObj) =>{
        if(emotionObj.happiness>emotionObj.sadness){
            this.setState({
                emotion: "happiness"
            })
        }
        else{
            this.setState({
                emotion: "sadness"
            })
        }
    }

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div id='content'>
                <Webcam
                    audio={false}
                    height={400}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={400}
                    videoConstraints={videoConstraints}
                    />
                    <img width='30%' height='30%'src = {this.state.imgLink}/>
                <button onClick={this.capture}>Capture photo</button>
            <div id='display'>
                <input 
                    type="text" 
                    name="inputImage" 
                    id="inputImage" 
                    onChange={(e) => this.setState({ imageUrl: e.target.value })}
                    />
                <button onClick={() => this.detectFace(this.state.imageUrl)}>Azure Test</button>
            
                <div id='responseDisplay'>Response: {this.state.emotion}</div>
            </div>
        </div>


    );
  }
}

export default App;
