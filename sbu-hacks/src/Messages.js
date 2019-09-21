import React from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import './App.css';

var happyFacts = ['January', 'February', 'March']; 
var sadFacts = ['ehwfaioweio hfoiawe hfoaiwe hfioae fhoiawe fhaowei fhaowie foefoie hfoaiwehfawe fhoawie fhaowie fhaowie fhaowie hfoaiwe hfoiawe hfoiaw ehfoiaw ehfoiawe fhoi', 'ouch', 'owie']
var visited = [];
class Messages extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            messages: [
              new Message({
                id: 1,
                message: "Welcome to Revibe!",
              }), 
            ],
            //...
          };
    }

    tick() {
        if (this.props.emotion == "happiness" || this.props.emotion == "surprise") {
            let randIndex = Math.floor(Math.random() * sadFacts.length)
            var joined = this.state.messages.concat(
            new Message({ id: 1, message: sadFacts[randIndex] })          
            );
            console.log("new message pushed.");
            this.setState({ messages: joined })
            sadFacts.splice(randIndex, 1);
        } else if (this.props.emotion == "sadness" || this.props.emotion == "contempt" || this.props.emotion == "anger" || this.props.emotion == "digust" || this.props.emotion == "fear") {
            let randIndex = Math.floor(Math.random() * happyFacts.length)
            var joined = this.state.messages.concat(
            new Message({ id: 1, message: happyFacts[randIndex] })          
            );
            console.log("new message pushed.");
            this.setState({ messages: joined })
            happyFacts.splice(randIndex, 1);
        }
        
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <ChatFeed
            maxHeight={500}
            messages={this.state.messages} // Boolean: list of message objects
            isTyping={this.state.is_typing} // Boolean: is the recipient typing
            hasInputField={false} // Boolean: use our input, or use your own
            showSenderName // show the name of the user who sent the message
            bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
            // JSON: Custom bubble styles
            bubbleStyles={
              {
                text: {
                  fontSize: 20
                  
                },
                chatbubble: {
                  borderRadius: 50,
                  padding: 30
                }
              }
            }
          />
        );
    }
}

export default Messages