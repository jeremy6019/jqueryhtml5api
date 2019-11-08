onmessage = function(e){
	    console.log('작업시작 ');
	    var sum = 0;
	    for(idx=1; idx<= 2000000000; idx+=1){
	    	sum += idx;
	    }
	    postMessage(sum);
}