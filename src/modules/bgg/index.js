import parseXml from './xml2json';
import db from '../utilities/db';

var bgg_config = {
  cachePrefix: 'Cache_',
  baseUrl: "https://boardgamegeek.com/xmlapi2/"
};

var DELAY = 350;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchUntil = (url, retries = 5, mult = 2.5) => {
  return new Promise(async (resolve, reject) => {
    for (var retryN = 0; retryN < retries; retryN++) {
      try {
        var result = await fetch(url);
        if (result.status === 200) {
          resolve(result);
          return;
        }
        else {
          DELAY += 25;
          await sleep(DELAY * Math.pow(mult, retryN));
          continue;
        }
      }
      catch {
        DELAY += 25;
        await sleep(DELAY * Math.pow(mult, retryN));
        continue;
      }
    }
    reject();
  });
}

const bgg = async (path, queryParams) => {
  let url = bgg_config.baseUrl + path;
  if (queryParams) {
    var qs = Object.entries(queryParams).map( ([key, value]) => key + "=" + value);
    if (qs.length && url.indexOf('?') === -1) {
      url = url + "?";
    }

    url = url + qs.join('&');
  }

  let cache = await db.get(db.CACHE, bgg_config.cachePrefix + url);
  if (cache) {
    return Promise.resolve({ 
      data: JSON.parse(cache),
      cache: true
    });
  }

  return fetchUntil(url)
    .then(x => x.text())
    .then(x => parseXml(x))
    .then(x => {
      var obj = JSON.parse(x);
      db.add(db.CACHE, bgg_config.cachePrefix + url, x);
      return { data: obj, cache: false };
    });
};

export default bgg;
