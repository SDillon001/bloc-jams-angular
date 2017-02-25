(function() {
	function timecode() {
		return function(seconds) {

			var seconds = Number.parseFloat(seconds);
			
			if (Number.isNaN(seconds)) {
				return '-:--';
			}

			var output;

			if (seconds) {
				output = buzz.toTimer(seconds, true);
			}

			return output;
		};
	}

	angular
		.module('blocJams')
		.filter('timecode', timecode);
})();