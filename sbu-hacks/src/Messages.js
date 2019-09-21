import React from 'react';
import { ChatFeed, Message } from 'react-chat-ui'
import './App.css';

var sadFacts = ['There are over 2,500 ancient languages that are either already extinct, or in danger of being forgotten forever.','In 1992, scientists discovered the loneliest creature on Earth. It is a whale that has been calling for a mate for two decades. The whale communicates at a frequency not used by any other whales, and so far, has not received a response.', 'The two Mars exploration robots, Curiosity and Opportunity are both on Mars right now. However, they live on opposite sides of the planet, so they will never run into one another. On its one year anniversary, Curiosity was programmed to sing ‘Happy Birthday’ to itself.', 'In 2006, a team of scientific researchers in Iceland were gathering clams in order to study the effects of climate change. They froze the clams, which ended up killing them. They ended up killing the oldest known clam still left alive, nicknamed Ming, which was 507 years old.','Cuckoos lay their eggs in the nests of other species. This tricks mother birds into feeding the cuckoo chicks, which grow large and fat very quickly. Soon enough, they get so big that it forces the real chicks out of the nest.', 'Hundreds of millions of people either live in areas without access to any water,  or live in areas where others can buy water, but they just can’t afford it.', 'Cows have best friends. When the friend, is gone the cow becomes depressed.', 'Whales that sing in the wrong key get lost and are alone in the oc.', 'Answering a distress call from her baby, a mother sloth was seen to sprint a 13 foot per minute.', 'Judith Barsi, who voiced Ducky in The Land Before Time, was murdered by her own father several months before the movie was released.', 'In 2012, one of the most-requested Christmas gifts (by children in the United Kingdom) was a father', 'The Mars Rover celebrates its own birthday by singing Happy Birthday to itself.', 'The number of vacant homes in the US outnumbers the homeless by more than 20-to-1.', 'The 80 richest people in the world own as much as the poorest 3.6 billion people.', 'That 40% of the food produced in the world is wasted.', 'Pigs can feel depression.' , 'Puppies cant see rainbows.', 'The average Congressman spends 85% of his/her time raising funds for the next election.', 'By the time you reach the age of 18, on average, you have approximately 3200-3500 weekends left in your life.', 'Right now is the youngest you will ever be again.' ,'There is enough food to feed every human in the world, but not enough humanity to spread it out.' ]; 
var happyFacts = [ 'Every year, hundreds of new trees grow because of squirrels forgetting where they buried their nuts.', 'Even if theyve never been able to witness it themselves, blind people smile when they are happy. Smiling is a basic human instinct.', 'Cows have best friends and they tend to spend most of their time together.', 'Otters hold hands when they sleep so they dont float away from one another.', 'Also, theres a special pocket in their skin where they carry their favorite rock.', 'Wayne Allwine and Russi Taylor, who respectively voiced Mickey and Minnie Mouse, were married in real life.', 'Rats and mice are ticklish, and even laugh when tickled.', 'The official Space Jam website has not changed since 1996.', 'The voice of Winnie the Pooh and Tigger, Jim Cummings, calls childrens hospitals in his spare time to cheer up sick children.', 'Apollo 17 astronaut Gene Cernan wrote his daughters initials on the surface of the moon. The initials ‘TDC’ are still there, and likely will be for tens of thousands of years.', 'A cat version of the corgi exists: the munchkin cat.', 'A group of flamingos is called a flamboyance.', 'And a group of pugs is called a grumble.', 'A group of cats is called a cloudier.', 'And a group of bunnies is called a fluffle.', 'At one point, very briefly, you were the youngest person on the planet.', 'Sea horses mate for life and travel holding each others tails.', 'Not only do penguins mate for life, but they also spend time finding a pebble to give their mate in order to ‘propose.’', 'Worms communicate by snuggling.', 'Butterflies taste with their feet.', 'Somewhere, someone is having the best day of their life.', 'Norway once knighted a penguin.', 'And baby puffins are called pufflings.', 'During the Christmas Truce of 1914, German and British soldiers played a game of soccer in the ‘no mans land’ between trenches.', 'Seventeen-year-old Jackie Mitchell, one of the first female pitchers in professional baseball, struck out both Babe Ruth and Lou Gehrig in 1931.', 'Baby echidnas are called puggles.', 'There have been studies that show that goats, like us, have accents.', 'Male pups will sometimes let female pups ‘win’ when they play-fight so they can get to know them better.', 'Cats bring you dead animals because they think youre just a crappy cat that cant survive on its own. Cats bring you presents!', 'The elephant shrews closest relative isnt a shrew — its actually an elephant.', 'Red pandas can have tails that grow up to 19 inches — despite being the size of a house cat.', 'Dolphins have names for one another.', 'In Welsh folklore, corgis were the preferred method of transportation for fairies.', 'Theres a competition in Sweden called Kaninhoppning, or rabbit show jumping.', 'Octopuses actually do make gardens by collecting stones and shiny things and arranging them in the sand. Ringo was right.', 'The only member of ZZ Top who does not have a beard is the drummer, Frank Beard.', 'The kingdom of Bhutan uses ‘gross national happiness’ as a key national indicator.', 'When rabbits get really excited and start to jump around, its called a binky.', 'Mister Rogers was given the honors of pouring the wax that made the 1,000,000,000th Crayola crayon.', 'Newborn giant pandas are about the size of a stick of butter.', 'Katy Perry has a cat named Kitty Purry.', 'Canadians eat more doughnuts than any other country.', 'They also eat the most Kraft Mac and Cheese.', 'In April 1930, the BBC reported that there was no news that day, and played piano music instead.', 'You can tickle a penguin.' ]
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
        this.interval = setInterval(() => this.tick(), 7000);
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
                  fontSize: 20,
                  color: 'black'
                  
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