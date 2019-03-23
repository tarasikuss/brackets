module.exports = function check(expr,bracketsConfig){
    let holder = []
    let openBrackets = []
    let closedBrackets = []
    var mass = expr.split("");
    for (var j=0; j<bracketsConfig.length; j++){
    	openBrackets.push(bracketsConfig[j][0])
    	closedBrackets.push(bracketsConfig[j][1])
	}
    for(var i=0; i<mass.length; i++){
    	
        if(openBrackets.includes(mass[i])){
            holder.push(mass[i])
            if (closedBrackets.includes(mass[i])){
            	let openPair = openBrackets[openBrackets.indexOf(mass[i])]
	    		if(holder[holder.length - 1] === openPair){
                	holder.pop();
	            }else{ 
	                return false
	            }
	    	}
        }else if(closedBrackets.includes(mass[i])){
            let openPair = openBrackets[closedBrackets.indexOf(mass[i])]
            if(holder[holder.length - 1] === openPair){
                holder.pop();
            }else{ 
                holder.push(mass[i])
                break 
            }
        }
    }
    if (holder.length === 0){
    	return true;
    }
    else {
    	return false
    }
}