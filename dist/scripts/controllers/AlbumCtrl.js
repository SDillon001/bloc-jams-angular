(function() {
     function AlbumCtrl(Fixtures, SongPlayer, $stateParams) {
     	// sets albumData to Fixtures.getAlbum function to provide access to object
   		var albumName = albumName || $stateParams.albumName;
     	this.albumData = Fixtures.getAlbum(albumName);
     	// sets songPlayer = SongPlayer service to play a song
     	this.songPlayer = SongPlayer;
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$stateParams', AlbumCtrl]);
 })();