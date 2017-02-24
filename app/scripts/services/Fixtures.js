(function() {
	function Fixtures() {
		var Fixtures = {};

		var albumVivaldi = {
           title: 'The Four Seasons',
           artist: 'Vivaldi',
           label: 'EMI Classics',
           year: '2012',
           albumArtUrl: '/assets/images/vivaldi.jpg',
           songs: [
           { title: 'The Four Seasons, Concerto No. 4 in F Minor, RV 297, Op. 8 No. 4 _Winter__ I. Allegro non molto', duration: '203', audioUrl: '/assets/music/Winter-I. Allegro non molto' },
           { title: 'The Four Seasons, Concerto No. 4 in F Minor, RV 297, Op. 8 No. 4 _Winter__ III. Allegro', duration: '216', audioUrl: '/assets/music/Winter-III. Allegro' },
           { title: 'The Four Seasons, Concerto No. 1 in E Major, RV 269, Op. 8, No. 1 _Spring__ III. Allegro pastorale', duration: '222', audioUrl: '/assets/music/Spring-III. Allegro pastorale' },
           { title: '01 The Four Seasons, Concerto No. 1 in E Major, RV 269, Op. 8, No. 1 _Spring__ I. Allegro', duration: '260', audioUrl: '/assets/music/Spring-I. Allegro' }
           ]
       };
       
       var albumManu = {
           title: 'Clandestino',
           artist: 'Manu Chao',
           label: 'Virgin Records',
           year: '1998',
           albumArtUrl: '/assets/images/manu.jpg',
           songs: [
           { title: 'Clandestino', duration: '1:01', audioUrl: '/assets/music/Clandestino' },
           { title: 'Mentira', duration: '1:01', audioUrl: '/assets/music/Mentira' },
           { title: 'Mama Call', duration: '1:01', audioUrl: '/assets/music/Mama Call' },
           { title: 'Welcome to Tijuana', duration: '1:01', audioUrl: '/assets/music/Welcome to Tijuana' },
           { title: 'La Despedida', duration: '1:01', audioUrl: '/assets/music/La Despedida' }
           ]
       };

       var albumQwill = {
           title: 'The Past Must Present',
           artist: 'Qwill',
           label: 'Simple Truth Records',
           year: '2010',
           albumArtUrl: '/assets/images/qwill.jpg',
           songs: [
           { title: 'Take the Blame', duration: '1:01', audioUrl: '/assets/music/Take the Blame' },
           { title: 'Learning', duration: '1:01', audioUrl: '/assets/music/Learning' },
           { title: 'Nothing Is Impossible', duration: '1:01', audioUrl: '/assets/music/Nothing Is Impossible' },
           { title: 'Hanging on a Thread', duration: '1:01', audioUrl: '/assets/music/Hanging on a Thread' },
           { title: 'Matter of Time', duration: '1:01', audioUrl: '/assets/music/Matter of Time' }
           ]
       };

       var albumAngels = {
           title: 'Passover',
           artist: 'The Black Angels',
           label: 'Light in the Attic Records',
           year: '2006',
           albumArtUrl: '/assets/images/angels.jpg',
           songs: [
           { title: 'Young Men Dead', duration: '1:01', audioUrl: '/assets/music/Young Men Dead' },
           { title: 'Better Off Alone', duration: '1:01', audioUrl: '/assets/music/Better Off Alone' },
           { title: 'Empire', duration: '1:01', audioUrl: '/assets/music/Empire' },
           { title: 'The Prodigal Sun', duration: '1:01', audioUrl: '/assets/music/The Prodigal Sun' },
           { title: 'The Sniper At the Gates of Heaven', duration: '1:01', audioUrl: '/assets/music/The Sniper At the Gates of Heaven' }
           ]
       };

       Fixtures.getAlbum = function(name) {
           return Fixtures.getCollection().filter(function(album) {
            return album.title === name;
           })[0];
       };

       Fixtures.getCollection = function(numberOfAlbums) {
        // var albums = [];
        // for (var i = 0; i < numberOfAlbums; i++) {
        //     albums.push(albumPicasso);
        // }
        // return albums;
        return [albumVivaldi, albumManu, albumQwill, albumAngels];
    };

    return Fixtures;
}

angular
    .module('blocJams')
    .factory('Fixtures', Fixtures);
})();