'use strict'

function sumofprimes(num){
    var totalsumofprimes = 0;
var num = input('enter');
    for (var i = 2; i <= num; i++){
        if (primenumber(i)){
            totalsumofprimes+=i;
        }
    }
    return totalsumofprimes;
    
}

function sumofprimes(num){
	var totalsumofprimes =0;
	if(typeof(num)==String){// if the supply is a String
		return false;{
			if (num < 0){ //if the supply is a negative
				return false;
			}
		}
	}
}

function primenumber(num) {
    for (var x = 2; x < num; x++){
        if (num % x === 0){// if the supply is zero
            return false;
        }
		
		}
		return true;
		
    }


	
    

