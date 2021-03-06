import { Component } from 'react'
import Deck from './Deck.js'
import './App.css'

export default class Playzone extends Component {
  
    constructor(props) {
        super(props);
        const deck = new Deck()
        deck.shuffle()

      // cut the deck into two halves. These should be global variables, so I'm not sure 
      // why I can't access them inside dealComputerCard() function below

        const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
        
        

        // console.log(deck)
        // console.log(computerDeck, playerDeck)

        // I will use these later once I set up scoring
        const CARD_VALUE_MAP = {
          "A": 1,
          "2": 2,
          "3": 3,
          "4": 4,
          "5": 5,
          "6": 6,
          "7": 7,
          "8": 8,
          "9": 9,
          "10": 10,
          "J": 11,
          "K": 12,
          "Q": 13
        }
        

        this.state = {
          inRound: '',
          playerDeck: new Deck(deck.cards.slice(0, deckMidpoint)),
          computerDeck: new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards)),
          dealerNumberOfCards: deck.numberOfCards,
          computerDealerNumberOfCards: 26,
          playerDealerNumberOfCards: 26,
          computerDealerCard: '',
          computerCardOne: '',
          computerCardTwo: '',
          computerCardThree: '',
          computerCardFour: '',
          computerCardFive: '',
          playerDealerCard: '',
          playerCardOne: '',
          playerCardTwo: '',
          playerCardThree: '',
          playerCardFour: '',
          playerCardFive: '',
          discardPile: ''
        }
        
    }

    componentDidMount() {
      this.setState({
        ...this.state,
        inRound: false,
        playerDeck: this.state.playerDeck,
        computerDeck: this.state.computerDeck,
        dealerNumberOfCards: this.state.dealerNumberOfCards,
        computerDealerNumberOfCards: this.state.computerDealerNumberOfCards,
        playerDealerNumberOfCards: this.state.playerDealerNumberOfCards,
        computerDealerCard: {
          suit: '',
          value: ''
        },
        playerDealerCard: {
          suit: '',
          value: ''
        },
        computerCardOne: {
          suit: '',
          value: ''
        },
        computerCardTwo: {
          suit: '',
          value: ''
        },
        computerCardThree: {
          suit: '',
          value: ''
        },
        computerCardFour: {
          suit: '',
          value: ''
        },
        computerCardFive: {
          suit: '',
          value: ''
        },
        playerCardOne: {
          suit: '',
          value: ''
        },
        playerCardTwo: {
          suit: '',
          value: ''
        },
        playerCardThree: {
          suit: '',
          value: ''
        },
        playerCardFour: {
          suit: '',
          value: ''
        },
        playerCardFive: {
          suit: '',
          value: ''
        },
        discardPile: {
          suit: '',
          value: ''
        }
      })
    }

    // when the user clicks on the deck, I want the top card to be moved to the 
    // computerDealerCard slot and display in the DOM

    dealComputerCard = () => {
      // this.inRound = true
      // console.log(this)
      let dealerNumberOfCards = this.state.dealerNumberOfCards
      let computerDealerNumberOfCards = this.state.computerDealerNumberOfCards
      let dealtCard = this.state.computerDeck.pop()
      console.log(dealtCard)
      this.setState({
        ...this.state,
        computerDealerCard: dealtCard,
        dealerNumberOfCards: dealerNumberOfCards - 1,
        computerDealerNumberOfCards: computerDealerNumberOfCards - 1
      })      
      // console.log(dealerNumberOfCards, computerDealerNumberOfCards)
    }

    dealPlayerCard = () => {
      // this.inRound = true
      // console.log(this)
      let dealerNumberOfCards = this.state.dealerNumberOfCards
      let playerDealerNumberOfCards = this.state.playerDealerNumberOfCards
      let dealtCard = this.state.playerDeck.pop()
      console.log(dealtCard)
      this.setState({
        ...this.state,
        playerDealerCard: dealtCard,
        dealerNumberOfCards: dealerNumberOfCards - 1,
        playerDealerNumberOfCards: playerDealerNumberOfCards - 1        
      })  
      
          
    }

    
    joinComputerArmy = () => {
      console.log(this.state.computerCardOne)
      if (this.state.computerCardOne.suit === '' && this.state.computerCardOne.value === '') {
        this.setState({
          ...this.state,
          computerCardOne: this.state.computerDealerCard,
          computerDealerCard: {suit: '', value: ''}
        })
      } else if (this.state.computerCardTwo.suit === '' && this.state.computerCardTwo.value === '') {
        this.setState({
          ...this.state,
          computerCardTwo: this.state.computerDealerCard,
          computerDealerCard: {suit: '', value: ''}
        })
      } else if (this.state.computerCardThree.suit === '' && this.state.computerCardThree.value === '') {
        this.setState({
          ...this.state,
          computerCardThree: this.state.computerDealerCard,
          computerDealerCard: {suit: '', value: ''}
        })
      } else if (this.state.computerCardFour.suit === '' && this.state.computerCardFour.value === '') {
        this.setState({
          ...this.state,
          computerCardFour: this.state.computerDealerCard,
          computerDealerCard: {suit: '', value: ''}
        })
      } else if (this.state.computerCardFive.suit === '' && this.state.computerCardFive.value === '') {
        this.setState({
          ...this.state,
          computerCardFive: this.state.computerDealerCard,
          computerDealerCard: {suit: '', value: ''}
        })
      }
    }

    joinPlayerArmy = () => {
      console.log(this.state.playerCardOne)
      if (this.state.playerCardOne.suit === '' && this.state.playerCardOne.value === '') {
        this.setState({
          ...this.state,
          playerCardOne: this.state.playerDealerCard,
          playerDealerCard: {suit: '', value: ''}
        })
      } else if (this.state.playerCardTwo.suit === '' && this.state.playerCardTwo.value === '') {
        this.setState({
          ...this.state,
          playerCardTwo: this.state.playerDealerCard,
          playerDealerCard: {suit: '', value: ''}
        })
      } else if (this.state.playerCardThree.suit === '' && this.state.playerCardThree.value === '') {
        this.setState({
          ...this.state,
          playerCardThree: this.state.playerDealerCard,
          playerDealerCard: {suit: '', value: ''}
        })
      } else if (this.state.playerCardFour.suit === '' && this.state.playerCardFour.value === '') {
        this.setState({
          ...this.state,
          playerCardFour: this.state.playerDealerCard,
          playerDealerCard: {suit: '', value: ''}
        })
      } else if (this.state.playerCardFive.suit === '' && this.state.playerCardFive.value === '') {
        this.setState({
          ...this.state,
          playerCardFive: this.state.playerDealerCard,
          playerDealerCard: {suit: '', value: ''}
        })
      }
    }

    discardComputerCardOne = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.computerCardOne,
        computerCardOne: {suit: '', value: ''}
      })
    }

    discardComputerCardTwo = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.computerCardTwo,
        computerCardTwo: {suit: '', value: ''}
      })
    }

    discardComputerCardThree = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.computerCardThree,
        computerCardThree: {suit: '', value: ''}
      })
    }

    discardComputerCardFour = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.computerCardFour,
        computerCardFour: {suit: '', value: ''}
      })
    }

    discardComputerCardFive = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.computerCardFive,
        computerCardFive: {suit: '', value: ''}
      })
    }

    discardPlayerCardOne = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.playerCardOne,
        playerCardOne: {suit: '', value: ''}
      })
    }

    discardPlayerCardTwo = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.playerCardTwo,
        playerCardTwo: {suit: '', value: ''}
      })
    }

    discardPlayerCardThree = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.playerCardThree,
        playerCardThree: {suit: '', value: ''}
      })
    }

    discardPlayerCardFour = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.playerCardFour,
        playerCardFour: {suit: '', value: ''}
      })
    }

    discardPlayerCardFive = () => {
      this.setState({
        ...this.state,
        discardPile: this.state.playerCardFive,
        playerCardFive: {suit: '', value: ''}
      })
    }

    // const CARD_VALUE_MAP = {
    //   "A": 1,
    //   "2": 2,
    //   "3": 3,
    //   "4": 4,
    //   "5": 5,
    //   "6": 6,
    //   "7": 7,
    //   "8": 8,
    //   "9": 9,
    //   "10": 10,
    //   "J": 11,
    //   "K": 12,
    //   "Q": 13
    // }

    scoreGame() {
      let CARD_VALUE_MAP = this.CARD_VALUE_MAP
      if (CARD_VALUE_MAP[this.state.computerCardOne.value] + CARD_VALUE_MAP[this.state.computerCardTwo.value] + CARD_VALUE_MAP[this.state.computerCardThree.value] + CARD_VALUE_MAP[this.state.computerCardFour.value] + CARD_VALUE_MAP[this.state.computerCardFive.value] > CARD_VALUE_MAP[this.state.playerCardOne.value] + CARD_VALUE_MAP[this.state.playerCardTwo.value] + CARD_VALUE_MAP[this.state.playerCardThree.value] + CARD_VALUE_MAP[this.state.playerCardFour.value] + CARD_VALUE_MAP[this.state.playerCardFive.value]) {
        return "Player 1 wins the Drag War!"
      } else return "Player 2 wins the Drag War!"
    }

    

    // will implement later
    // isGameOver() {
    //   if (this.state.dealerNumberOfCards === 0) {
    //     this.setState({
    //       ...this.state,
    //       inRound: false
    //     })
        
    //   }
    // }



    render() {
      const computerDealerCard = this.state.computerDealerCard
      const playerDealerCard = this.state.playerDealerCard
      const computerDealerNumberOfCards = this.state.computerDealerNumberOfCards
      const playerDealerNumberOfCards = this.state.playerDealerNumberOfCards
      const computerCardOne = this.state.computerCardOne
      const computerCardTwo = this.state.computerCardTwo
      const computerCardThree = this.state.computerCardThree
      const computerCardFour = this.state.computerCardFour
      const computerCardFive = this.state.computerCardFive
      const playerCardOne = this.state.playerCardOne
      const playerCardTwo = this.state.playerCardTwo
      const playerCardThree = this.state.playerCardThree
      const playerCardFour = this.state.playerCardFour
      const playerCardFive = this.state.playerCardFive
      const discardPile = this.state.discardPile
      

        return (
            <div>
              <div className="player-name">Player 1</div>
              <div className = "computer playspace">
                <button className = "computer-deck deck" onClick = {() => this.dealComputerCard()} >{computerDealerNumberOfCards}</button>
                <div className = "computer-card-slot card-slot dealer-card-slot">
                  <div className = "card" onClick = {() => this.joinComputerArmy()} data-value={"" + computerDealerCard.value + " " + computerDealerCard.suit}>{computerDealerCard.suit}</div>
                </div>
                <div className = "computer-card-slot card-slot card-slot-one">
                  <div className = "card" onClick = {() => this.discardComputerCardOne()} data-value={"" + computerCardOne.value + " " + computerCardOne.suit}>{computerCardOne.suit}</div>
                </div>
                <div className = "computer-card-slot card-slot card-slot-two">
                  <div className = "card" onClick = {() => this.discardComputerCardTwo()} data-value={"" + computerCardTwo.value + " " + computerCardTwo.suit}>{computerCardTwo.suit}</div>
                </div>
                <div className = "computer-card-slot card-slot card-slot-three">
                  <div className = "card" onClick = {() => this.discardComputerCardThree()} data-value={"" + computerCardThree.value + " " + computerCardThree.suit}>{computerCardThree.suit}</div>
                </div>
                <div className = "computer-card-slot card-slot card-slot-four">
                  <div className = "card" onClick = {() => this.discardComputerCardFour()} data-value={"" + computerCardFour.value + " " + computerCardFour.suit}>{computerCardFour.suit}</div>
                </div>
                <div className = "computer-card-slot card-slot card-slot-five">
                  <div className = "card" onClick = {() => this.discardComputerCardFive()} data-value={"" + computerCardFive.value + " " + computerCardFive.suit}>{computerCardFive.suit}</div>
                </div>
              </div>
              <div className = "common-space">            
                <p>Discard Pile</p>    
                <div className = "card-slot discard-pile">
                  <div className = "card" data-value={"" + discardPile.value + " " + discardPile.suit}>{discardPile.suit}</div>
                </div>
                <div className = "message"></div>
                {/* <button className = "score-button" onClick = {() => this.scoreGame()}>Score Game</button> */}
              </div>
              <div className="player-name two">Player 2</div>
              <div className = "player playspace">
                <button className = "player-deck deck" onClick = {() => this.dealPlayerCard()}>{playerDealerNumberOfCards}</button>
                <div className = "player-card-slot card-slot dealer-card-slot">
                  <div className = "card" onClick = {() => this.joinPlayerArmy()} data-value={"" + playerDealerCard.value + " " + playerDealerCard.suit}>{playerDealerCard.suit}</div>
                </div>
                <div className = "player-card-slot card-slot card-slot-one">
                  <div className = "card" onClick = {() => this.discardPlayerCardOne()} data-value={"" + playerCardOne.value + " " + playerCardOne.suit}>{playerCardOne.suit}</div>
                </div>
                <div className = "player-card-slot card-slot card-slot-two">
                  <div className = "card" onClick = {() => this.discardPlayerCardTwo()} data-value={"" + playerCardTwo.value + " " + playerCardTwo.suit}>{playerCardTwo.suit}</div>
                </div>
                <div className = "player-card-slot card-slot card-slot-three">
                  <div className = "card" onClick = {() => this.discardPlayerCardThree()} data-value={"" + playerCardThree.value + " " + playerCardThree.suit}>{playerCardThree.suit}</div>
                </div>
                <div className = "player-card-slot card-slot card-slot-four">
                  <div className = "card" onClick = {() => this.discardPlayerCardFour()} data-value={"" + playerCardFour.value + " " + playerCardFour.suit}>{playerCardFour.suit}</div>
                </div>
                <div className = "player-card-slot card-slot card-slot-five">
                  <div className = "card" onClick = {() => this.discardPlayerCardFive()} data-value={"" + playerCardFive.value + " " + playerCardFive.suit}>{playerCardFive.suit}</div>
                </div>
              </div>
              <div className = "in-game-rules">
            <h4>The Rules:</h4>
            <p>The goal of the game is to create the best Drag Show army! Each player starts with a deck of 26 cards, an empty dealt-card pile, and 5 empty slots for their army. When all the cards have been dealt, the best army wins!</p>
            <p>Battle of the Queens is a 2 player game. So, you can either get a friend to play, or do both players' turns yourself.</p>
            <h5>How to win:</h5>
            <p>When all the cards have been dealt, use the scoring guide below to tally up each players' points. The winner will be whoever has created the best Drag Show by having the most points in their 5-card army, according to the scoring system:</p>
            <ul>
              <li>Q = 13 points: Drag Queen - You MUST have at least one Drag Queen leading your army! If you have no Queens in your hand, you will automatically lose.</li>
              <li>K = 12 points: Drag King - Although there aren't as many in the world, Drag Kings rule too!</li>
              <li>J = 11 points: Emcee - What is a Drag War without a great emcee announcing the performers?!?!</li>
              <li>10 = 10 points: DJ</li>
              <li>9 = 9 points: Lighting Booth</li>
              <li>8 = 8 points: Stage Crew</li>
              <li>7 = 7 points: Makeup Artist</li>
              <li>6 = 6 points: Costumer</li>
              <li>5 = 5 points: Box Office</li>
              <li>4 = 4 points: Bouncer</li>
              <li>3 = 3 points: Clean-up Crew</li>
              <li>2 = 2 points: Bouncer</li>
              <li>A = 1 point: Bartender</li>
            </ul>
            <h5>On your turn...</h5>
            <p>Each turn, you can make 1 and ONLY 1 of the following moves:</p>
            <ul>
              <li>Click on your deck to flip over a card from your deck into your dealt slot</li>
              <li>OR</li>
              <li>Click on your dealt-card pile to move the top card from your dealt slot into your army</li>
              <li>OR</li>
              <li>Click on a card in your army to move it into the discard pile</li>
            </ul>
          </div>
            </div>
        )

    } 
}
