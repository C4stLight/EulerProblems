function multiplesOf3and5(number) {

  let multiples = [];
  for(let x = 0; x < number; x++){
    if(x % 3 == 0 || x % 5 == 0){
      multiples.push(x);
    }// end if
  }// end for

  let adder = 0;
  for(let i = 0; i < multiples.length; i++){
    adder += multiples[i];
  }
  return adder;
}

console.log(multiplesOf3and5(1000));
