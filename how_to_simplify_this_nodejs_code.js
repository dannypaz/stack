    function data(cb) {
       getData(cb);
    }

    function printData(data) {
      console.log("printing " + data)   
    }

    function getData (cb) {

        console.log("getting data");

        setTimeout(function(){
            console.log("finishing data");
            cb("this is the data") // calling printData
        }), 3000;
    }

    data(printData);


function data(cb) {

  var myData = getData();  // You
  cb(myData);
}

function printData(data) {

    console.log("printing " + data)   
}

function getData () {

    console.log("getting data");

    setTimeout(function(){
        console.log("finishing data");
        return "this is the data"
    }), 3000;
}

data(printData);