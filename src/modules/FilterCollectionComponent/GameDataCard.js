import React from 'react';

const getIcon = (n, min, max, suggested) => {
  if (n < min || n > max)  return;

  let color = "gray";
  let N = n >= 7 ? "7+" : "" + n;
  let bold = "inherit";

  if (suggested.best.indexOf(N) > -1) { color = "lightgreen"; bold = "bold"; }
  else if (suggested.recommended.indexOf(N) > -1) color = "lightblue";
  else if (suggested.avoid.indexOf(N) > -1) color = "pink";

  return <span className="playerNum"><span className="circle" style={{"color": color }}>&#9210;</span><span className="count" style={{"font-weight": bold }}>{N}</span></span>
};

export const GameDataCard = ({ data }) => {
  // let imgData = data.image && await db.get(db.IMAGES, data.image);
  return (<div className='gamecard'>
    {data.image && <div className='thumbnail'><img src={data.image} alt="Thumbnail for game" style={{ maxWidth: "100%", maxHeight: "200px" }} /></div>}
    <div className='heading'>
      <span className='rank'>#{data.rank}</span> <span className='title'>{data.name}</span> <span className='year'>({data.year})</span>
    </div>
    <div className='details'>
      <span className='rating'>Rating {Math.round(data.bggrating * 100) / 100}</span> <br />
      <span className='playtime'>{data.playtime} min</span> <br />
      <span className='weight'>Weight {Math.round(data.weight * 100) / 100}</span> <br />
      <span className='players'>
        <span>Players </span>
        {getIcon(1, data.minplayers, data.maxplayers, data.suggestedPlayers)}
        {getIcon(2, data.minplayers, data.maxplayers, data.suggestedPlayers)}        
        {getIcon(3, data.minplayers, data.maxplayers, data.suggestedPlayers)}
        {getIcon(4, data.minplayers, data.maxplayers, data.suggestedPlayers)}
        {getIcon(5, data.minplayers, data.maxplayers, data.suggestedPlayers)}
        {getIcon(6, data.minplayers, data.maxplayers, data.suggestedPlayers)}
        {getIcon(7, data.minplayers, data.maxplayers, data.suggestedPlayers)}

      </span>
    </div>
  </div>)
  /*

        Players {data.minplayers} to {data.maxplayers}<br />
        Best at {data.suggestedPlayers.best.join(',')} <br />
        Recommended at {data.suggestedPlayers.recommended.join(',')}
*/
};

export default GameDataCard;