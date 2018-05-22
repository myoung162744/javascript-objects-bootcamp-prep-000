var playlist = {
  glassAnimals: 'Aggie',
  macMiller: 'Smile Back'
};

function updatePlaylist(obj,artist,song) {
  return obj.assign({}, obj, { artist: song })
}

function removeFromPlaylist(obj, artist) {
  return delete obj.artist
}
