// http://stackoverflow.com/questions/31906780/how-to-force-garbage-collection-in-a-production-nodejs-app-that-has-a-infinite-r
// OP Kept changing the question
// He had asked how to create an infinite loop that didn't swallow memory...
// Would not post his code.

var InfiniteLoop = require('infinite-loop');

var scrapeTheData = function(){
  console.log('scrape');
};

var loop = new InfiniteLoop();
loop.add(scrapeTheData);
loop.run();

