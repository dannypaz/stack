// Example One - Final
// With this array [blue_object_1, green_object_1, blue_object_2, red_object_1]
// Into this {"blue" => ['blue_object_1, blue_object_2'], "green" => [green_object_1], "red" => [red_object_1]}

var testArray = [
	blue_object_1, 
	green_object_1,
	blue_object_2,
	red_object_1
];

// Initialize store
var testStore = {};

for(let i=0;i<testArray.length;i++){
	if(testStore.hasOwnProperty(i.color)){
		testStore[i.color].push(testArray[i])
	}else {
		var testContainer = [];
		testContainer.push(testArray[i]);
		testStore[i.color] = testContainer;
	}
}

// Example Two - Final
// one.plus.two.equal

(function(){
    'use strict';

    var numbers = function(init_value){
        var _steps = [];

        self.initialize = function(){
            _steps.push(init_value);
            return init_value;
        };
        self.initialize();

        self.plus = function(){
            _steps.push(self._value);
            _steps.push('plus');
            return self;
        };

        self.equals = function(){
            var result = 0;
            for(let i=0;i<_steps.length;i++){
                if(_steps[i] === 'plus')
                    result += (_steps[(i-1)] + _steps[(i+1)]);
                if(_steps[i] === 'minus')
                    result += (_steps[(i-1)] - _steps[(i+1)])
            }
            return result;
        };
    };

    var one = new numbers(1);
    var two = new numbers(2);

    console.log(one.plus().two());
})();