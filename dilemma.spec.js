const playlist = require("./dilemma");


describe('whole minute dilemma', () => {
  it('should find one pair', () => {
    const songs = [20,40]
    expect(playlist(songs)).toBe(1)
  })
  it('should pair the songs', () => {
    const songs = [40, 20, 50, 10];
    expect(playlist(songs)).toBe(2)
  });
  it('should pair a song in more than one pair', () => {
    // in this case the int 40 is used in two pairs as the first one is 40 + 20
    // and the second one is 40 + 80
    const songs = [40, 20, 80, 10];
    expect(playlist(songs)).toBe(2)
  })
  it('should not find any pair', () => {
    const songs = [10, 30, 40, 15, 70];
    expect(playlist(songs)).toBe(0)
  });
});

