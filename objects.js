var playlist = {
  glass animals: 'Aggie',
  mac miller: 'Smile Back'
};

function updatePlaylist(obj,artist,song) {
  return obj.assign({}, obj, { [artist]: song })
}

function removeFromPlaylist(obj, artist) {
  return delete obj.artist
}
