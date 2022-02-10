## Whole minute dilemma

A music player allows users to choose songs to play, but only in pairs and only pairs of songs with durations that add up to a multiple of 60 seconds (e.g.,60, 120, 180). Given a list of songs durations, calculate the total number of different song pairs that can be chosen.

### Example

```js
n = 3;
songs = [40, 20, 60, 30];
```

One pair of songs can be chosen whose combined duration is a multiple of a whole minute (40+20=60) and the return value would be 1.
while the third song is a single minute long, songs must be chosen in pairs.

### Function Description

Complete the function _playlist_

_playlist_ has the following parameter(s):

_int_ _songs[n]:_ array of integers representing song durations in seconds

### Returns:

*int:*the number of songs pairs that add up to a multiple of a minute

## Constrains

- 1 ≤ n ≤ 10<sup>5</sup>
- 1 ≤ songs[i] ≤ 1000, where 0 ≤ i ≤ n
