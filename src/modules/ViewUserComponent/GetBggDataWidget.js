import React, { useState, useEffect } from 'react';
import bgg from '../bgg';
import db from '../utilities/db'

const DELAY = 400;

function toDataURL(src, outputFormat) {
  var img = new Image();
  return new Promise(resolve => {
    img.crossOrigin = 'anonymous';
    img.onload = function () {
      var canvas = document.createElement('CANVAS');
      var ctx = canvas.getContext('2d');
      var dataURL;
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      dataURL = canvas.toDataURL(outputFormat);
      resolve(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
      img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
    }
  });
}

const GetBggDataWidget = ({ name, save, history }) => {
  const [data, setData] = useState(null);
  const [details, setDetails] = useState({});
  const [images, setImages] = useState({});

  useEffect(() => {
    setData(null);
    setDetails({});
    setImages({});
  }, [name]);

  useEffect(() => {
    if (data && Object.entries(details).length === 0) {
      getDetails();
    }
  }, [data, details]);

  /*
    useEffect(() => {
    let isMounted = true; // track whether component is mounted

    request.get(url)
      .then(result => {
        if (isMounted) {
          setState(result);
        }
      });

    return () => {
      // clean up
      isMounted = false;
    };
    // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  }, []); // only on "didMount"
  */

  let saveToStorage = () => {
    let games = data.items.item.map(x => {
      return ({
        ...x,
        ...details[x["@objectid"]].items.item
      });
    });
    console.log(games);
    save(games);
    history.push('/filter/' + name);
  };

  let onClickFetch = () => {
    bgg('collection', {
      username: name,
      subtype: "boardgame",
      excludesubtype: "boardgameexpansion",
      stats: 1,
      own: 1
    })
      .then(function (x) {
        setData(x.data);
      });
  };

  let getNextDetails = (list) => {
    let id = list[0];
    if (!id) {
      // if (details) saveToStorage();
      return;
    }

    bgg('thing', {
      id,
      stats: 1
    })
      .then(function (results) {

        setDetails(state => {
          let newDetails = { ...state };
          newDetails[id] = results.data;
          return newDetails;
        });

        setTimeout(() => getNextDetails(list.slice(1)), results.cache ? 0 : DELAY);
      });
  }

  let getNextImages = async (list) => {
    let url = list[0];
    if (!url) return;

    var cached = await db.get(db.IMAGES, url);

    if (cached) {
      setImages(state => {
        let newDetails = { ...state };
        newDetails[url] = url;
        return newDetails;
      });
      getNextImages(list.slice(1));
    }
    else {
      toDataURL(url)
        .then(function (src) {
          db.add(db.IMAGES, url, src);

          setImages(state => {
            let newDetails = { ...state };
            newDetails[url] = url;
            return newDetails;
          });

          setTimeout(() => getNextImages(list.slice(1)), DELAY);
        });
    }
  }

  let getDetails = async () => {
    let list = [...data.items.item].map(x => x['@objectid']);
    getNextDetails(list);
  };

  let getImages = async () => {
    let list = [...data.items.item].map(x => x['image']);
    getNextImages(list);
  };

  if (!data) {
    onClickFetch();
  }

  return (
    <div className="App">
      {details && data && (<pre>Loading data for games {Object.keys(details).length} of {data.items.item.length}</pre>)}

      {data && details && <button onClick={saveToStorage}>Save</button>}
    </div>
  );
  /*
   <button onClick={onClickFetch}>Fetch</button> 
        {data && <button onClick={getDetails}>Get All Details</button>}
        
      {data && details && <button onClick={getImages}>Get All Images</button>}
      {images && data && (<pre>Images {Object.keys(images).length} of {data.items.item.length}</pre>)}
      {data && (<pre>{JSON.stringify(data, null, 4)}</pre>)}
  */
}

export default GetBggDataWidget;