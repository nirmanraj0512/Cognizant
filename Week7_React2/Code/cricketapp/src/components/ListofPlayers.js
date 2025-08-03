import React from 'react'


const ListofPlayers=()=>{
    const players=[
        { name: 'Rohit', score: 85 },
        { name: 'Dhawan', score: 95 },
        { name: 'Virat', score: 100 },
        { name: 'Raina', score: 75 },
        { name: 'Dhoni', score: 74 },
        { name: 'Jadeja', score: 62 },
        { name: 'Bumrah', score: 50 },
        { name: 'Ashwin', score: 78 },
        { name: 'Shami', score: 55 },
        { name: 'Yuvraj', score: 95 },
        { name: 'Zahir', score: 40 }
    ];

    // filter score below 70 
    const lowScore=players.filter(player=>player.score<70);

    return(
        <div>
            <h2>All Players</h2>
            <ul style={{listStyleType:'none',paddingleft:0}}>
                {players.map((player,index)=>(<li key={index}>{player.name}={player.score}</li>))}
            </ul>

            <h2>Players with score below 70</h2>
            <ul style={{listStyleType:'none',paddingleft:0}}>
                {lowScore.map((player,index)=>(
                    <li key={index}>{player.name}-{player.score}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListofPlayers;