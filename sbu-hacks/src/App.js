import React from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";
import Messages from "./Messages.js";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
        /*this.timerID = setInterval(
          () => this.capture(),
          3000
        );*/
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
    
        let options = {
        uri: uriBase,
        qs: params,
        body: new Buffer(img.replace(/^data:image\/(png|gif|jpeg);base64,/, ''), 'base64'), //uses regex to remove header data and leave image data
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key' : subscriptionKey
            }
        };
        request.post(options, (error, response, body) => {
        if (error) {
            console.log('Error: ', error);
            return;
        }

        let jsonResponse = JSON.stringify(JSON.parse(body), null, '  ');
        var emotionObj = JSON.parse(body)[0].faceAttributes.emotion;
        this.chooseEmotion(emotionObj);
        this.setState({azureResponse: jsonResponse});
            console.log(jsonResponse);
        });
    }
    chooseEmotion = (emotionObj) =>{
        var value;
        var max = 0.0;
        for (var key in emotionObj) {
            if (key == 'neutral') {
                emotionObj[key] *= 0.25;
                console.log(emotionObj[key]);
            }
            if (emotionObj[key] > max) {
                value = key;
                max = emotionObj[key];
            }
                
        }
        this.setState({
            emotion: value
        })
    }

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div id='content'>
                <Row>
                    <div className='col-sm-6'>
                        <div className='mycontent-left'>
                            <div className='card border-secondary' id="left">
                                <div className='card-body'>
                                    <div className="col-xs-auto" align="center"><h1 className="card-title">Take a photo of yourself!</h1></div>
                                    <p className="card-text">Change your facial expression for the camera and click "Take photo". The facial recognition API will detect and respond to your expression!</p>
                                    <div className="col-xs-auto"></div>
                                    <div className="col-xs-auto embed-responsive-16by9" id="thing">
                                        <Webcam
                                            audio={false}
                                            height={400}
                                            ref={this.setRef}
                                            screenshotFormat="image/jpeg"
                                            width={400}
                                            videoConstraints={videoConstraints}
                                        />

                                        <div id='separate'>
                                            <div id='responseDisplay'>Response: {this.state.emotion}</div>
                                            <div id='button'><button onClick={this.capture}>Capture photo</button></div>
                                        </div>
                                    </div>
                                    <div className="col-xs-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-sm-6">
                        <div className="mycontent-right">
                            <div className="card border" id="right">
                                <div className="card-body">
                                    <h1 className="card-title">Your Feed:</h1>
                                    <hr className="border-secondary"></hr>
                                    <p className="card-text"></p>
                                    <Messages emotion={this.state.emotion}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
            
    );
  }
}

export default App;
