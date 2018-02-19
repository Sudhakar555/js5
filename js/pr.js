function primeSeries()
{
    var result = [];
    var input = document.getElementById("num").value;
    var temp = false;

    result.push(2);
    for (var i=3; i<=input; i++){

        for (var j = 0; j<result.length; j++)     {
            if ( i%result[j] === 0 ){
                temp = true;
            }
        };

        if(temp === false){
            result.push(i);
        }
        temp = false;
        
    };

    document.getElementById("temp").innerHTML = result;
}