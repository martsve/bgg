import db from '../utilities/db';

export const CreateCollectionFromUserDetails = async (dbKeys, save) => {
  var all = {};
  for (let key of dbKeys) {
    var games = await db.get(db.DETAILS, key);
    for (let g of games) {
      all[g['@id']] = g;
    }
  }
  let allGames = Object.values(all);
  console.log(allGames[0]);
  allGames = allGames.map(x => CreateGameDataFromBggData(x));
  save(allGames);
}

const approxRank = (rating) => {
  if (rating > 8.5) return 3;
  if (rating > 8) return 15;
  if (rating > 7.5) return 75;
  if (rating > 7) return 200;
  if (rating > 6) return 500;
  if (rating > 5) return 1000;
  if (rating > 4) return 5000;
  if (rating > 3) return 10000;
  if (rating > 2) return 15000;
  return 100000;
}

export const CreateGameDataFromBggData = (data) => {
  let id = data['@id'];

  let name = data.name;
  if (Array.isArray(name)) {
    let filtered = name.filter(n => n["@type"] === "primary")[0];
    name = filtered || name[0];
  }
  name = name["@value"];

  let image = data.thumbnail;
  let year = parseInt(data.yearpublished["@value"], 10);
  let rating = parseFloat(data.stats.rating["@value"]);
  let playtime = parseInt(data.playingtime["@value"], 10);
  let minage = parseInt(data.minage["@value"], 10);
  let minplayers = parseInt(data.minplayers["@value"], 10);
  let maxplayers = parseInt(data.maxplayers["@value"], 10);
  let maxplaytime = parseInt(data.maxplaytime["@value"], 10);
  let minplaytime = parseInt(data.minplaytime["@value"], 10);
  let numowned = parseInt(data.stats["@numowned"], 10);
  let plays = parseInt(data.numplays, 10);
  if (!Array.isArray(data.stats.rating.ranks.rank)) {
    data.stats.rating.ranks.rank = [data.stats.rating.ranks.rank];
  }

  let rank = data.stats.rating.ranks.rank.filter(x => x["@id"] === "1")[0];
  let bggrating = parseFloat(data.stats.rating.average["@value"]);
  if (rank) {
    bggrating = parseFloat(rank["@bayesaverage"]) || bggrating;
    rank = parseFloat(rank["@value"]) || approxRank(bggrating);
  }

  let suggestedPlayers = { best: [], recommended: [], avoid: [] };
  let suggested = data.poll.filter(x => x["@name"] === "suggested_numplayers")[0];
  if (suggested) {
    if (!Array.isArray(suggested.results)) suggested.results = [suggested.results];
    for (var item of suggested.results) {
      let num = item["@numplayers"];
      let votes_best = parseInt(item.result.filter(x => x["@value"] === "Best")[0]["@numvotes"], 10);
      let votes_recommended = parseInt(item.result.filter(x => x["@value"] === "Recommended")[0]["@numvotes"], 10);
      let votes_avoid = parseInt(item.result.filter(x => x["@value"] === "Not Recommended")[0]["@numvotes"], 10);

      if (votes_avoid > votes_best + votes_recommended) {
        if (num.indexOf('+') === -1)
          suggestedPlayers.avoid.push(num);
      }
      else if (votes_best > votes_recommended) suggestedPlayers.best.push(num);
      else suggestedPlayers.recommended.push(num);
    }
  }

  let language = null;
  let langPoll = data.poll.find(x => x["@name"] === "language_dependence");
  if (langPoll) {
    let l1 = parseInt(langPoll.results.result.find(x => x["@value"] === "No necessary in-game text")["@numvotes"], 10);
    let l2 = parseInt(langPoll.results.result.find(x => x["@value"] === "Some necessary text - easily memorized or small crib sheet")["@numvotes"], 10);
    let l3 = parseInt(langPoll.results.result.find(x => x["@value"] === "Moderate in-game text - needs crib sheet or paste ups")["@numvotes"], 10);
    let l4 = parseInt(langPoll.results.result.find(x => x["@value"] === "Extensive use of text - massive conversion needed to be playable")["@numvotes"], 10);
    let l5 = parseInt(langPoll.results.result.find(x => x["@value"] === "Unplayable in another language")["@numvotes"], 10);
    language = (l1 + l2*2 + l3*3 + l4*4 + l5*5) / (l1+l2+l3+l4+l5);
  }

  let group = data.link.filter(x => x["@type"] === "boardgamecategory" || x["@type"] === "boardgamemechanic").map(x => x["@value"]);

  let weight = parseFloat(data.statistics.ratings.averageweight["@value"]);
  let ratings = parseFloat(data.statistics.ratings.usersrated["@value"]);

  let gamedata = {
    id, name, year, rating, playtime, minage, minplayers, maxplayers, maxplaytime, minplaytime, rank, bggrating, suggestedPlayers, image, numowned,
    group,
    weight,
    ratings,
    plays,
    language
  };

  return gamedata;
};
