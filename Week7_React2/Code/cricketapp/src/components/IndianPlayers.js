import React from 'react';

const IndianPlayers=()=>{
    const oddTeam=["Virat","Rohit","Hardik","Bumrah","Dhawan"];
    const evenTeam=["Dhoni","Laxman","Pant","Raina","Jaddu"]


//Deconstructing
const [firstOdd,secondOdd,...restOdd]=oddTeam;
const [firstEven,secondEven,...restEven]=evenTeam;

//merging T20 and Ranji

const T20players=["Virat","Rohit","Dhoni"];
const Ranjiplayers=["Jaddu","Pujara","Raina"];


const allPlayers=[...T20players,...Ranjiplayers];

return(
    <div>
        {/* ///ODD TEAM */}
        <h2>Odd Team Players</h2>
        <ul style={{listStyleType:'none',paddingleft:0}}>
            <li>{firstOdd}</li>
            <li>{secondOdd}</li>
            {restOdd.map((player,idx)=>(
                <li key={idx}>
                    {player}
                </li>
            ))}
        </ul>

        {/* //EVEN TEAM */}
        <h2>Even Team Players</h2>
        <ul style={{listStyleType:'none',paddingleft:0}}>
            <li>{firstEven}</li>
            <li>{secondEven}</li>
            {restEven.map((player,idx)=>(
                <li key={idx}>
                    {player}
                </li>
        ))}
        </ul>

        {/* //All Players are merged */}
        <h2>All Players Merged from T20 and Ranji</h2>
        <ul style={{listStyleType:'none',paddingleft:0}}>
            {allPlayers.map((player,idx)=>(
                <li key={idx}>{player}</li>
            ))}
        </ul>
    </div>
);
};

export default IndianPlayers;