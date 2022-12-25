import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import hand from "./images/hand.png"

function Main () {
const [voters, setVoters] = useState(0) 
const [round, setRound] = useState(0)
const [votingArray, setVotingArray] = useState([])
const [revealClick, setRevealClick] = useState(false)
const [chameleon, setChameleon] = useState(false)
const [reLook, setReLook] = useState(false)
const [reLookVal, setReLookVal] = useState(0)
const [page, setPage] = useState(1)


function voterSubmit(event) {
    const x = document.getElementById("voters").value
    setVoters(x);
    document.getElementById("voters").value = ""
    votingArrayCreate(x)
    setPage(2)
  }

  var shuffle = function (array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  
  };

function votingArrayCreate(voters) {
  const letters = ['A','B','C','D'];
  const numbers = [1,2,3,4];
  const blank = "";
  const lett = blank.concat(letters[Math.floor((Math.random()*4))]);
  const tile = lett.concat(numbers[Math.floor((Math.random()*4))]);

  const array = [];
  for(let i=0;i<voters-1;i++) {
    array.push(tile);
    }
  array.push('Chameleon'); 
  shuffle(array)
  setVotingArray(array)
}

  

  function goAgain() {
    setRound(0);
    setVoters(0);
    setPage(1)
  }
   
  function revealTile() {
    setRevealClick(true)
    console.log(votingArray[round])
    if (votingArray[round]==='Chameleon') {
      setChameleon(true)
    }
  }
  function hideTile() {
    setRevealClick(false)
    setRound(prevRound =>
      prevRound + 1)   
    setChameleon(false)
    if (round-voters>-2) {
      setPage(3)
    }
  }

  function reShow() {
    const x = document.getElementById("forgottenID").value
    setReLook(true)
    setReLookVal(x)
  }

  function hideReLook() {
    setReLook(false)
    document.getElementById("forgottenID").value = ""
  }

  function newRound() {
    setRound(0);
    votingArrayCreate(voters)
    setPage(2)
    setReLook(false)
    document.getElementById("forgottenID").value = ""

  }

  return (
    <div>  
      <div className='maincontainer' style={{display: page===1? 'block':'none'}}> 
            <label>
            Number of players: <br></br> 
            <input type="text" id="voters" />
            </label>
      <button onClick={voterSubmit} style={{display: page===1? 'block':'none', margin: "0 auto", marginTop: "10px"}}>Submit</button>  
      </div>
      

      <div className='options' style={{display: page===2? 'block':'none'}}>
          <h2>Player # {round+1} </h2>
          <button class="revealButton" onClick={revealTile} style={{display: revealClick===false? 'block':'none'}}> See Tile </button>
          <button class="hideButton" onClick={hideTile} style={{display: revealClick===true? 'block':'none'}}> Hide </button> 
          
          <div style={{display: revealClick===true? 'block':'none'}}>
            {/* <button onClick={hideTile}>Hide</button> */}
            <h3>{votingArray[round]}</h3>
            <div style={{display: chameleon===true? 'block':'none'}}> <p>You've been chosen by the god of disguise, don't let him down</p><img src={hand}/>  </div>
            
            </div>

          <br></br>
          
      </div>
      <button 
          class="centerButton"
          onClick={goAgain} 
          style={ { backgroundColor:'#ed8989', display: page===2? 'block':'none', marginTop: "10px", borderRadius:'5px'}}
          >Change number of players</button> 

    <div className='options' style={{display: page===3? 'block':'none'}}>
      <p>If you forgot the square, type in your position and submit (don't forget to hide when you're done)</p>
      <input type="text" id="forgottenID" />
      <button onClick={reShow}>submit</button>
      <div style={{display: reLook===true? 'block':'none'}}> {votingArray[reLookVal-1]}
      <br></br>
      <button onClick={hideReLook}>Hide</button>  
      </div>
      <br></br> <br></br>
      <button onClick={newRound}>New Round</button>
    </div>


    </div>
  )
}

export default Main;