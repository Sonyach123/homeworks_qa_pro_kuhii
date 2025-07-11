function pow(a, b) {
  let res = 1; 

  for (let i = 0; i < b; i = i + 1) {
    res = res * a; 
  }

  return res;
}

let answer = pow(2, 3); 
console.log(answer); 