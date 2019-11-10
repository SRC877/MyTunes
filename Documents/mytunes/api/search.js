const apiPrefix = 'https://itunes.apple.com/';

export default async ({
  query
}) => {
  const uri = `${apiPrefix}/search?term=${query}`;
 // console.log('search begin, uri =', uri);
  const res = await fetch(uri, {
    method: 'GET'
  });
  const json = await res.json();
  //console.log('search got json', json);

  if (!res.ok) {
    return [];
  }

  const {results} = json;
 // console.log('search result',results);
  // const items = json.tracks.items;
  return results.map(result => ({
    id: result.trackId,
    title: result.trackName,
    album: result.collectionName,
    imageUri: result.artworkUrl100
  }));
 // console.log('search end');
};
