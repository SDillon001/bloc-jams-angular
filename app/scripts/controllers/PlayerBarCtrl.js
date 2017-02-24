(function() {
	function PlayerBarCtrl(Fixtures, SongPlayer, $stateParams) {
		this.albumData = Fixtures.getAlbum($stateParams.albumName);
		this.songPlayer = SongPlayer;
	}
	
	angular
		.module('blocJams')
		.controller('PlayerBarCtrl', ['Fixtures', 'SongPlayer', '$stateParams', PlayerBarCtrl]);
})();