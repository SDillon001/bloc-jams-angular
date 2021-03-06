(function() {
	/**
	* @function seekBar
	* @desc Define seekbar / volume bar interaction
	* @param $document
	*/
	function seekBar($document) {

		/**
		* @var caluculatePercent
		* @desc calculate seekbar's value
		*/
		var calculatePercent = function(seekBar, event) {
			var offsetX = event.pageX - seekBar.offset().left;
			var seekBarWidth = seekBar.width();
			var offsetXPercent = offsetX / seekBarWidth;
			offsetXPercent = Math.max(0, offsetXPercent);
			offsetXPercent = Math.min(1, offsetXPercent);
			return offsetXPercent;
		};

		/**
		* @directive
		* @desc Define seekbar directive options
		*/
		return {
			templateUrl: '/templates/directives/seek_bar.html',
			replace: true,
			restrict: 'E',
			scope: { 
				onChange: '&'
			},

			link: function(scope, element, attributes) {
				scope.value = 0;
				scope.max = 100;

				var seekBar = $(element);

				attributes.$observe('value', function(newValue) {
					scope.value = newValue;
				});

				attributes.$observe('max', function(newValue) {
					scope.max = newValue;
				});

				var percentString = function () {
					var value = scope.value;
					var max = scope.max;
					var percent = value / max * 100;
					return percent + "%";
				};

				scope.fillStyle = function() {
					return {width: percentString()};
				};

				scope.thumbStyle = function() {
					return {left: percentString()};
				};

				/**
				* @function
				* @desc update seek bar pos on click
				*/
				scope.onClickSeekBar = function(event) {
					var percent = calculatePercent(seekBar, event);
					scope.value = percent * scope.max;
					notifyOnChange(scope.value);
				};

				/**
				* @function
				* @desc track seek bar thumb on drag
				*/
				scope.trackThumb = function() {
					$document.bind('mousemove.thumb', function(event) {
						var percent = calculatePercent(seekBar, event);
						scope.$apply(function() {
							scope.value = percent * scope.max;
							notifyOnChange(scope.value);
						});
					});

					$document.bind('mouseup.thumb', function() {
						$document.unbind('mousemove.thumb');
						$document.unbind('mouseup.thumb');
					});
				};

				var notifyOnChange = function(newValue) {
					if (typeof scope.onChange === 'function') {
					scope.onChange({value: newValue});
					}
				};
			}
		};
	};
	
	angular
		.module('blocJams')
		.directive('seekBar', ['$document', seekBar]);
})();