
/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready
*/
$(function() {
// Test RSS feeds definitions
describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty
     */
    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });


    /* Test that loops through each feed to see if URL is not empty */
    it('URLs are defined', function() {
        for(i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).not.toBe(0);
        }
    });


    /* Test that loops through each feed to see if names are defined */
     it('Names are defined', function() {
        for(i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length).not.toBe(0);
        }
    });
});


// Test menu functionality
describe('The menu', function() {
       /* Test that ensures the menu element is
        * hidden by default.
        */
    it('Is hidden', function() {
        expect($('body').hasClass('menu-hidden')).toBe(true);
    });

     /* A test that ensures the menu changes
      * visibility when the menu icon is clicked.
      */
    it('Toggles visibility when clicked', function() {
        // Shows menu when clicked
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).not.toBe(true);

        // Hides menu when clicked again
        $('.menu-icon-link').click();
        expect($('body').hasClass('menu-hidden')).toBe(true);
    });
});

// Test initial entries
describe('Initial Entries', function() {
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
    beforeEach(function(callback) {
        loadFeed(0, callback);
    });

    it('Entries are present', function() {
        expect($('.feed .entry').length).not.toBe(0);
    });
});

// Test new feed is loaded
describe('New Feed Selection', function() {
        /* Test that ensures when a new feed is loaded by the loadFeed function 
        that the content changes */

        let initialFeed;
        let newFeed;

        beforeEach(function(done){
            loadFeed(0, function () {
                initialFeed = $('.feed').html();
                done();                
            });
        });

        it('loads new feed', function(done){

            loadFeed(2, function(){
                newFeed = $('.feed').html();
                expect(newFeed).not.toBe(initialFeed);
                done();
            });

        });
});

 
}());
