/**
 *   策略模式: 定义一系列的算法,把它们一个个封装起来,并且使它们可以相互替换
 */

var strategies = {
    "S": function( salary ){
        return salary * 4; 
    },
    "A": function( salary ){ 
        return salary * 3;
    },
    "B": function( salary ){
        return salary * 2; 
    }
};
var calculateBonus = function( level, salary ){ 
    return strategies[level](salary);
};

console.log( calculateBonus( 'S', 20000 ) ); //    80000
console.log( calculateBonus( 'A', 10000 ) ); //    30000