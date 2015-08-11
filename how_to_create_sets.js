var mySet = [1,2,"HELLOOOOO"];
var mySet2 = ["hi", 1];

// Takes 2 Arrays
// array properties: shift
var intersection_destructive = function(a, b)
{
  var result = [];
  while( a.length > 0 && b.length > 0 )
  {
    if      (a[0] < b[0] ){ b.shift(); }
    else if (a[0] > b[0] ){ b.shift(); }
    else /* they're equal */
    {
      result.push(a.shift());
      b.shift();
    }
  }

  return result;
};

var result = intersection_destructive(mySet, mySet2);
console.log(result); // equals [1]