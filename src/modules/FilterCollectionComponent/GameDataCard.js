import React from 'react';

export const GameDataCard = ({ data }) => {
  // let imgData = data.image && await db.get(db.IMAGES, data.image);

  return (<div className='gamecard'>
    {data.image && <div className='thumbnail'><img src={data.image} alt="Thumbnail for game" style={{ maxWidth: "100%", maxHeight: "200px" }} /></div>}
    <div className='heading'>
      <span className='rank'>#{data.rank}</span> <span className='title'>{data.name}</span> <span className='year'>({data.year})</span>
    </div>
    <div className='details'>
      <span className='rating'>Rating {data.bggrating}</span> <br />
      <span className='playtime'>{data.playtime} min</span> <br />
      <span className='weight'>Weight {data.weight}</span> <br />
      <span className='players'>
        Players {data.minplayers} to {data.maxplayers}<br />
        Best at {data.suggestedPlayers.best.join(',')} <br />
        Recommended at {data.suggestedPlayers.recommended.join(',')}
      </span>
    </div>
  </div>)
};

export default GameDataCard;