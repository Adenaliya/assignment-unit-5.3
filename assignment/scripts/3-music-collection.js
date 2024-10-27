console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];
console.log('whats in my collection',myCollection);
function addToCollection(collection, title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };
    collection.push(album);
    return album;
};

addToCollection(myCollection, 'lett the world know', 'mgm lett', 2022);
addToCollection(myCollection, 'realer 2', 'youngboy Neverbroke again', 2022);
addToCollection(myCollection, 'letter 2 my brother', 'lil kee', 2022);
addToCollection(myCollection, 'el toro 2', 'est gee', 2023);
addToCollection(myCollection, 'humble as ever', 'hunxho', 2023);
addToCollection(myCollection, 'certified lover boy', 'drake', 2022);

console.log('what in my collection now' , myCollection);

function showCollection(collection) {
  for (let album of collection) {
      console.log(album.title + " by " + album.artist + ", published in " + album.yearPublished);
  }
}
showCollection(myCollection);

function findByArtist(collection, artist) {
  let artistAlbums = []; 
  for (let i = 0; i < collection.length; i++) {
      if (collection[i].artist === artist) {
          artistAlbums.push(collection[i]);
      }
  }
  return artistAlbums; 
};
console.log(findByArtist(myCollection, 'mgm lett',));
console.log(findByArtist(myCollection, 'lil baby'));
console.log('mgm let is in my array and lil baby is not');








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
