/*

 * Complete the 'playlist' function below.

 *

 * The function is expected to return a LONG_INTEGER.

 * The function accepts INTEGER_ARRAY songs as parameter.

 */


/* function playlist(songs) {
  var obj = {};
  var count = 0;

  // loop through array and mod each value and insert it into a dictionary
  songs.forEach((elem, index) =>  obj[elem] = index);

  console.log(obj)
  
  return count;
} */

function playlist(songs) {
  let count= 0
  for (let i = 0; i < songs.length; i++) {
    for (let j = i + 1; j < songs.length; j++){
      if ((songs[i] + songs[j]) % 60 === 0) {
          count ++
        }
      }
   }
  return count
};

module.exports = playlist;
