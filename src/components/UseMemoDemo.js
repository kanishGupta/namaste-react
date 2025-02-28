import { useState, useMemo } from "react";

const UseMemoDemo = () => {

const [theme, setTheme] = useState(false);
const [text, setText] = useState(0);


    //const primeNo = findNthPrime(text);
    const primeNo = useMemo(() =>findNthPrime(text), [text]);

    return(
        <div className={"m-4 p-4 w-96 h-96 border border-black " + ( theme && "bg-green-500")}>
           
           <button className="m-4 p-4 border border-red-700 bg-green-300"
           onClick={()=> setTheme(!theme)}>
                Toggle
            </button>
           
           
            <input className="m-4 p-4 w-57 h-12 border border-black"
            type="number"
            value={text}
            onChange={(event)=>setText(event.target.value)}
            >
            </input>

            <div>{primeNo}</div>

        </div>
    );
















    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return true;
      }
      
      function findNthPrime(n) {
        if (n <= 0) return null; // Invalid input
      
        let count = 0; // Number of primes found
        let num = 1;   // Number to check for primality
      
        while (count < n) {
          num++;
          if (isPrime(num)) {
            count++;
          }
        }
      
        return num;
      }

}

export default UseMemoDemo;