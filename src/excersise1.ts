var primeFactors = function(number){
    var carpan = 0;
    for (let index = 2; index < number; index++) {
      if(number % index == 0)
      {
        carpan ++;
      }
      
    }
    if(carpan >0)
    {
      return false;
    }
  
    else
      return true;
  }

  var compute = function (number){
    var carpanlar = [];
    var j = 0 ;
    for (let index = 2; index <number; index++) {
      if(number % index == 0){
        if(primeFactors(index) == true){
          carpanlar[j] = index;
          j++;
        }
      }
      
    }
  
    for (let index = 0; index < carpanlar.length; index++) {
     console.log(carpanlar[index]);
      
    }
  }

  compute(10);