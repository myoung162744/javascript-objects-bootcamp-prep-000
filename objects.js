var playlist = {
  glassAnimals: 'Aggie',
  macMiller: 'Smile Back'
};

function updatePlaylist(playlist,artist,song) {
  return playlist.assign({}, playlist, { artist: song })
}

function removeFromPlaylist(obj, artist) {
  return delete obj.artist
}
