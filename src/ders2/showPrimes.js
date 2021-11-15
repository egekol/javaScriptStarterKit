function findPrime(numbers) {
    let primelist = []
    for (let i = 0; i < numbers.length; i++) {
        var asd = isPrime(numbers[i])
        if (asd) {
            //console.log(numbers[i])
            primelist.push(numbers[i])
        }
    }
    function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }
    console.log("list: " + primelist);
}
let numbers = [41,75,43,45,79,566]
findPrime(numbers)