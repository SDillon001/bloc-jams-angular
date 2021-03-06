 (function() {
 	function SongPlayer($rootScope, Fixtures, $stateParams) {
 		var SongPlayer = {};

 		/**
        * @desc Information for current album
        * @type {Object}
        */
        var currentAlbum = Fixtures.getAlbum($stateParams.albumName);

		/**
		* @desc Buzz object audio file
		* @type {Object}
		*/
		var currentBuzzObject = null;

		/**
		 * @function setSong
		 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
		 * @param {Object} song
		 */
		 var setSong = function(song) {
		 	if (currentBuzzObject) {
		 		currentBuzzObject.stop();
		 		SongPlayer.currentSong.playing = null;
		 	}

			/**
			* @desc creates a new audio file as currentBuzzObject
			*/
		 	currentBuzzObject = new buzz.sound(song.audioUrl, {
		 		formats: ['mp3'],
		 		preload: true
		 	});

		 	/**
			* @desc adds eventlistener to Buzz object to listen for 'timeupdate'
			* @uses $rootscope
			*/
		 	currentBuzzObject.bind('timeupdate', function() {
		 		$rootScope.$apply(function() {
		 			SongPlayer.currentTime = currentBuzzObject.getTime();
		 		});
		 	});

		 	SongPlayer.currentSong = song;
		 	console.log(currentBuzzObject.getDuration());
		 	SongPlayer.duration = 100;
		 };

		 var seek = function(time) {
		 	if (currentSoundFile) {
		 		currentSoundFile.setTime(time);
		 	}
		 };

		/**
		* @function setSong
		* @desc Stops currently playing song and loads new audio file as currentBuzzObject
		* @param {Object} song
		*/
		var playSong = function(song) {
			currentBuzzObject.play();
			song.playing = true;
		};

 		/**
        * @function stop
        * @desc Pause current song
        * @param {Object} song
        */
        var stopSong = function(song) {
        	currentBuzzObject.stop();
        	song.playing = null;
        };

		/**
		* @desc Get index of song from list of songs
		* @type {Object} song
		* @returns {Number}
		*/
		var getSongIndex = function(song) {
			return currentAlbum.songs.indexOf(song);
		}

 		/**
		* @desc Active song object from list of songs
		* @type {Object}
		*/
		SongPlayer.currentSong = null;

		/**
		* @desc Current playback time (in seconds) of currently playing song
		* @type {Number}
		*/
		SongPlayer.currentTime = null;

		SongPlayer.duration = null;

		/**
		* @desc sets default volume of currently playing song
		* @type {Number}
		*/
		SongPlayer.volume = 80;

 		/**
        * @function play
        * @desc Play current or new song
        * @param {Object} song
        */
        SongPlayer.play = function(song) {
        	song = song || SongPlayer.currentSong;
        	if (SongPlayer.currentSong !== song) {
        		setSong(song);
        		playSong(song);
        	} else if (SongPlayer.currentSong === song) {
        		if (currentBuzzObject.isPaused()) {
        			playSong(song);
        		} 
        	}
        };

 		/**
        * @function pause
        * @desc Pause current song
        * @param {Object} song
        */
        SongPlayer.pause = function(song) {
        	song = song || SongPlayer.currentSong;
        	currentBuzzObject.pause();
        	song.playing = false;
        };

		/**
        * @function previous
        * @desc Set song to previous song in album
        */
        SongPlayer.previous = function() {
        	var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        	currentSongIndex--;

        	if (currentSongIndex < 0) {
        		stopSong();
        		SongPlayer.currentSong.playing = null;
        	} else {
        		var song = currentAlbum.songs[currentSongIndex];
        		setSong(song);
        		playSong(song);
        	}
        };

 		/**
        * @function next
        * @desc Set song to next song in album
        */
        SongPlayer.next = function() {
        	var currentSongIndex = getSongIndex(SongPlayer.currentSong);
        	currentSongIndex++;

        	if (currentSongIndex < 0) {
        		stopSong();
        		SongPlayer.currentSong.playing = null;
        	} else {
        		var song = currentAlbum.songs[currentSongIndex];
        		setSong(song);
        		playSong(song);
        	}
        };

		/**
		* @function setCurrentTime
		* @desc Set current time (in seconds) of currently playing song
		* @param {Number} time
		*/
		SongPlayer.setCurrentTime = function(time) {
			if (currentBuzzObject) {
			currentBuzzObject.setTime(time);
			}
		};

		/**
		* @function setCurrentTime
		* @desc Set current time (in seconds) of currently playing song
		* @param {Number} time
		*/
		SongPlayer.setVolume = function(volume) {
			if (currentBuzzObject) {
			currentBuzzObject.setVolume(volume);
			}
			SongPlayer.volume = volume;
		};

        return SongPlayer;
    };

    angular
	    .module('blocJams')
	    .factory('SongPlayer', ['$rootScope', 'Fixtures', '$stateParams', SongPlayer]);
})();