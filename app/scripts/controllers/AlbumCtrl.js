(function() {
     function AlbumCtrl(Fixtures, SongPlayer) {
     	// sets albumData to Fixtures.getAlbum function to provide access to object
     	this.albumData = Fixtures.getAlbum();
     	// sets songPlayer = SongPlayer service to play a song
     	this.songPlayer = SongPlayer;
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
 })();