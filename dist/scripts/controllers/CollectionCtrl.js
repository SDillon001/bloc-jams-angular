(function() {
     function CollectionCtrl(Fixtures) {
     	// sets albums to Fixtures.getCollection function and sets the number of albums to repeatin ng-repeat
     	this.albums = Fixtures.getCollection(12);
     };
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
 })();