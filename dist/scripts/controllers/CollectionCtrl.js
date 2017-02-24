(function() {
     function CollectionCtrl(Fixtures, $stateParams) {
     	// sets albums to Fixtures.getCollection function and sets the number of albums to repeatin ng-repeat
     	this.albums = Fixtures.getCollection();
     };
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', '$stateParams', CollectionCtrl]);
 })();