function fibonacciGenerator (n) {
        var sequence = [];
        //Write your code here:
        for(var i = 0; i <= n; i++){
            if (i === 0){
                sequence.push(0)
            } else if (i == 1) {
                sequence.push(1)
            } else {
                var nextNum = sequence[i - 1] + sequence[i - 2];
                sequence.push(nextNum);
            }
        }
        return (sequence);
    }
    let result = fibonacciGenerator(7);
    console.log(result);
    //Output : [0,1,1,2,3,5,8,13]