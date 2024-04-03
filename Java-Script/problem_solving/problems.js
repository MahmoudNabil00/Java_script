// let firstArray = [1,2,4,6,8,10,5]
// let secondArray = [3,5,6,1,9,10]
// function getCommonElement(arr1,arr2){
//   let obj = {}
//   for(let i = 0 ; i<arr1.length;i++){
//     obj[arr1[i]]=true
//   }
//   let duplicateElement = []
//   for(let j = 0 ; j<arr2.length;j++){
//     if(obj.hasOwnProperty(arr2[j])){
//       duplicateElement.push(arr2[j])
//     }
//   }
//   return duplicateElement
// }
// console.log(getCommonElement(firstArray,secondArray))

// -----------------https://leetcode.com/problems/two-sum/-----------------------

// let arr = [2,5,5,11]
// let target = 10   // [1,2]

// //traditional solution ---

// function twoSum(arr,target){
//   let resultAsIndices = []
//   for(let i = 0 ; i<arr.length;i++){
//     for(let j= i+1 ; j<arr.length;j++){
//       if(arr[i]+arr[j]==target){
//         resultAsIndices.push(i,j)
//         return resultAsIndices
//       }
//     }
//   }
// }
// console.log(twoSum(arr,target))

//Hash Table ------------------

// function twoSum(arr,target){
//   let resultAsIndices = []
//   let hashTable = {}
//   for(let i = 0 ; i<arr.length;i++){
//     hashTable[arr[i]] = true
//   }
// }
// console.log(twoSum(arr,target))

// --------------------------https://leetcode.com/problems/roman-to-integer/-----------------------\

//[I, V, X, L, C, D , M] we have 7 symbols

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// 4  -> IV
// 9  -> IX
//40  -> XL
//90  -> XC
//400 -> CD
//900 -> CM

// Range [1-4000]

// function romanToInteger(string){
//   let splittingArray = string.split('')
//   specialCaseArray = ['IV','IX','XL','XC','CD','CM']
//   let secondCounter  = 0
//   let finalResult = []
//   let integerResult = null
//   for(let i = 0 ; i < splittingArray.length ; i++){
//     let mergedString = splittingArray[i]+splittingArray[i+1]
//     if(specialCaseArray.includes(mergedString)){
//       i++ ;
//       finalResult.push(mergedString);
//     }else{
//       finalResult.push(splittingArray[i]);
//     }
//     console.log(finalResult)
//     switch(finalResult[secondCounter]){
//       case 'I':
//         integerResult+=1
//         secondCounter++;
//         break;
//       case 'V':
//         integerResult+=5
//         secondCounter++;
//         break;
//       case 'X':
//         integerResult+=10
//         secondCounter++;
//         break;
//       case 'L':
//         integerResult+=50
//         secondCounter++;
//         break;
//       case 'C':
//         integerResult+=100
//         secondCounter++;
//         break;
//       case 'D':
//         integerResult+=500
//         secondCounter++;
//         break;
//       case 'M':
//         integerResult+=1000
//         secondCounter++;
//         break;
//       case 'IV':
//         integerResult+=4
//         secondCounter++;
//         break;
//       case 'IX':
//         integerResult+=9
//         secondCounter++;
//         break;
//       case 'XL':
//         integerResult+=40
//         secondCounter++;
//         break;
//       case 'XC':
//         integerResult+=90
//         secondCounter++;
//         break;
//       case 'CD':
//         integerResult+=400
//         secondCounter++;
//         break;
//       case 'CM':
//         integerResult+=900
//         secondCounter++;
//         break;
//     }
//   }
//   return integerResult
// }
// console.log(romanToInteger('MMDL'))

//-*-*-*-*-*-*-*-*-*-*-*-*recursion multiplication*-*-*-*-*-*-*-*-*-*-*-*

// function recursion(arr,i=0,mul=arr[0]){
//   let index = i
//   let initialArr = arr
//   let result = i==0 ? mul : mul*arr[i]
//   // result =
//   if(index == initialArr.length-1){
//     return result
//   }else{
//     index+=1
//     return recursion(initialArr,index,result)
//   }
// }
// console.log(recursion([1,2,3,4,2]))

//-*-*-*-*-*-*-*-*-*-*-*-*88. Merge Sorted Array*-*-*-*-*-*-*-*-*-*-*-*
/*
    - two array sorted as ascending order
    - m and n represent the number of the element in the each array
    -Requirements :
    - Merge nums1 and nums2 into a single array sorted in non-decreasing order 
    */
// nums1 has a length of m + n
// n elements are set to 0 and should be ignored. nums2 has a length of n.

// function merge(nums1, m, nums2, n) {
//     if(m===0){
//         nums1[0]=[1]
//         return nums1
//     }
//     nums1.push(...nums2)
//     console.log(nums1)
//     nums1.splice(n,n)
//     console.log(nums1)
//     nums1.sort((a, b)=>  a - b);
//     return nums1
// };

// let arr1 = [1,2,3]
// let arr2 = [2,5,6]
// let m = arr1.length
// let n = arr2.length
// arr1.push(...Array(arr2.length).fill(0))
// // console.log(merge(arr1,m,arr2,n))
// console.log(merge([0],0,[1],1))

//-*-*-*-*-*-*-*-*-*-*-*Pyramid Shape*-*-*-*-*-*-*-*-*-*-*-*
// function PyramidShape(row){
//     let concatString = []
//     let numberOfSpaces = row
//     let between = 0
//     for(let i = 0 ; i<row;i++){
//         if(i!==0){
//             ++between
//             concatString.push('\n')
//             --numberOfSpaces
//         }
//         for(let j = 0 ; j<numberOfSpaces;j++){
//             j+1==numberOfSpaces ? concatString.push('*') : concatString.push(' ')
//         }
//         if(between!=0){
//             for(let k = 0 ;k < between ; k++ ){
//                 concatString.push(' ','*')
//             }
//         }
//     }
//     console.log(concatString)
//     return concatString.join('')
// }
// console.log(PyramidShape(5))

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

//-*-*-*-*-*-*-*-*-*-*-*20. Valid Parentheses (Stack)*-*-*-*-*-*-*-*-*-*-*-*
// instructions
// --Open brackets must be closed by the same type of brackets.
// --Open brackets must be closed in the correct order.
// --Every close bracket has a corresponding open bracket of the same type.
// var isValidParentheses = function(brackets) {
//     let hashTable = {
//         ')' : '(',
//         '}' : '{',
//         ']' : '[',
//     }
//     let order = 1
//     let validSymbolsBrackets = ['(',')','{','}', '[',']']
//     let separateBrackets = brackets.split('')
//     console.log(separateBrackets)
//     if(separateBrackets.length === 0 || separateBrackets.length === 1) return false;
//     for(let i = separateBrackets.length-1 ; i>=0 ; i--){
//         i =  separateBrackets.length-1
//         order = 0
//         if(!validSymbolsBrackets.includes(separateBrackets[i])) return false;
//         if(separateBrackets[i] == '(' || separateBrackets[i] == '[' || separateBrackets[i] == '{') {return false}
//         else{
//             let closeBracket = separateBrackets[i]
//             let step = 0
//             if(separateBrackets.length==0) return true
//             loop2: for(let j = i - 1 ; j >= 0 ; j--){
//                 if(separateBrackets[j] == closeBracket){
//                     step++
//                 }
//                 if(hashTable[closeBracket] == separateBrackets[j] && (order % 2 == 0 || order == 0) && step==0){
//                     separateBrackets.splice(i,1)
//                     separateBrackets.splice(j,1)
//                     // i = separateBrackets.length-1
//                     if(separateBrackets.length==0){
//                         return true
//                     }
//                     break loop2;
//                 }
//                 if(hashTable[closeBracket] == separateBrackets[j] && step == 0 && order % 2 == 0){
//                     separateBrackets.splice(i,1)
//                     separateBrackets.splice(j,1)
//                     // i = separateBrackets.length-1
//                     if(separateBrackets.length==0){
//                         return true
//                     }
//                     break loop2;
//                 }
//                 if(step>0 && hashTable[closeBracket] == separateBrackets[j]){
//                     step--
//                     order++
//                 }
//                 else{
//                     order++
//                     if(j==0){
//                         return false
//                     }
//                 }
//             }
//         }
//     }
//     return true
// };
// console.log(isValidParentheses('()({[]})'));

// function isValidParentheses(bracket){
//     let validSymbolsBrackets = ['(',')','{','}', '[',']']
//     const hashTable = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
//     }
//     stack = []
//     let separateBrackets = bracket.split('')
//     if(separateBrackets.length % 2 != 0 || separateBrackets.length == 0){return false}
//     for(let i = 0 ; i < separateBrackets.length ; i++){
//         if(!validSymbolsBrackets.includes(separateBrackets[i])) {return false};
//         if(separateBrackets[i] == '(' || separateBrackets[i] == '[' || separateBrackets[i] == '{'){
//             stack.push(separateBrackets[i])
//         }
//         else if(separateBrackets[i] == ')' || separateBrackets[i] == ']' || separateBrackets[i] == '}'){
//             if(hashTable[stack[stack.length-1]] == separateBrackets[i]){
//                 stack.pop()
//             }else{
//                 return false
//             }
//         }
//     }
//     if(stack.length != 0){return false}
//     return true
// }
// console.log(isValidParentheses('((((('))

//-*-*-*-*-*-*-*-*-*-*-*-*217. Contains Duplicate *-*-*-*-*-*-*-*-*-*-*-*
//-- return true if any value appears twice at least
//-- else return false

// var containsDuplicate = function(nums) {
//     let hashMap = {}
//     for(let i = 0 ; i < nums.length ; i++){
//         if(hashMap[nums[i]]){return true}
//         hashMap[nums[i]] = true
//     }
//     return false
// };
// console.log(containsDuplicate([1,2,3]))

//-*-*-*-*-*-*-*-*-*-*-*-* 242. Valid Anagram *-*-*-*-*-*-*-*-*-*-*-*

// return true if (t) is anagram of (s)

// var isAnagram = function(s, t) {
//     let anagramObj = {}
//     let anagramComparison = {}
//     if(s.length !== t.length){return false}
//     for(let letter of s){
//         if(anagramObj.hasOwnProperty(letter)){
//             anagramObj[letter] = anagramObj[letter] + 1
//         }else{
//             anagramObj[letter] = 1
//         }

//     }
//     for(let letter of t){
//         if(anagramComparison.hasOwnProperty(letter)){
//             anagramComparison[letter] = anagramComparison[letter] + 1
//         }else{
//             anagramComparison[letter] = 1
//         }

//     }
//     console.log([anagramObj,anagramComparison]);
//     for(let letter of t){
//         if(anagramObj.hasOwnProperty(letter)){
//             if(anagramObj[letter] == anagramComparison[letter]){
//                 continue ;
//             }else{
//                 return false
//             }
//         }else{
//             return false
//         }
//     }
//     return true
// };
// console.log(isAnagram("rat","cat"))

//-*-*-*-*-*-*-*-*-*-*-*-* 125. Valid Palindrome *-*-*-*-*-*-*-*-*-*-*-*

// var isPalindrome = function(s) {
//     s = s.replace(/[^a-zA-Z0-9]/g, '');
//     let splittingArray = s.split('')
//     console.log(splittingArray);
//     for(let i = 0 , j = splittingArray.length-1 ; i < splittingArray.length;i++,j--){
//         if(splittingArray[i].toLowerCase()==splittingArray[j].toLowerCase()){
//             continue ;
//         }else{
//             return false
//         }
//     }
//     return true
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"))

//-*-*-*-*-*-*-*-*-*-*-*-*  121. Best Time to Buy and Sell Stock (Sliding Window)*-*-*-*-*-*-*-*-*-*-*-*

//SlideWindow Algorithm ::--

// function getLargestSumOfNthConsecutiveElements(arr, size) {
//   let currentSum = 0;
//   let maxSum = -Infinity;  // this mean any negative number
//   for (let i = 0; i < arr.length; i++) {
//     if(i > size-1){
//         currentSum -= arr[i-size]
//         currentSum += arr[i]
//         // console.log(currentSum,i);
//     }else{
//         currentSum += arr[i]
//         // console.log(currentSum,i);
//     }
//     maxSum = Math.max(maxSum,currentSum)
//   }
//   return maxSum
//      }
// let arr = [ 5, 7, 1, 4, 3, 6, 2, 9, 2 ];
// let size = 5;
// console.log(getLargestSumOfNthConsecutiveElements(arr, size));

// the indices indicate to the days 
// the element indicate to price 
// var maxProfit = function(prices) {
//     let slicedArray = prices.slice(0,prices.length-1)
//     let minStock = Math.min(...slicedArray)
//     // if(minStock==0){
//     //     slicedArray.splice(prices.indexOf(minStock),1)
//     //     minStock = Math.min(...slicedArray)
//     // }
//     let profits = []
//     let dayAtMinStock = prices.indexOf(minStock) //--incorrect procedure
//     if(dayAtMinStock == prices.length-1){return 0}else{
//         for(let i = dayAtMinStock + 1 ; i < prices.length ; i++){
//             if(prices[i] - minStock > 0){
//                 profits.push(prices[i] - minStock)
//             }else{
//                 if(i==prices.length){
//                     return 0;
//                 }else{
//                     continue;
//                 }
//             }
//         }
//     }
//     if(profits.length==0){return 0}else{return Math.max(...profits)}
// }

// var maxProfit = function(prices) {
//     let profits = []
//     for(let i = 0 ; i < prices.length ; i++){
//         if(prices[i+1]-prices[i] > 0){
//             profits.push(prices[i+1] - prices[i])
//         }else{
//             continue;
//         }
//     }
//     if(profits.length==0){return 0}else{return Math.max(...profits)}
// }

// var maxProfit = function(prices) {
//     let profits = []
//     for(let i = 0 ; i < prices.length ; i++){
//         let currentPrice = prices[i]
//         for(let j = i+1 ; j < prices.length ; j++){
//             if(prices[j]-currentPrice > 0){
//                 profits.push(prices[j]-currentPrice)
//             }
//         }
//     }
//     if(profits.length==0){return 0}else{return Math.max(...profits)}
// }


// var maxProfit = function(prices) {
//     let profits = 0
//     let pointer = 0
//     for(let i = 0 ; i < prices.length ; i++){
//         if((prices[i+1] - prices[pointer]) > profits ){
//             profits = prices[i+1] - prices[pointer]

//         }
//         if(i==prices.length-1 && (prices[i]-prices[pointer] > profits)){
//             profits = prices[i]-prices[pointer]
//         }
//         if(pointer == 0 && profits==0){
//             pointer++
//         }
//         if(prices[i] < prices[pointer]){
//             pointer = i
//             if((prices[i+1] - prices[pointer]) > profits ){
//                 profits = prices[i+1] - prices[pointer]
//             }
//         }
//     }
//     return profits
// }


// let maxProfit = 0
// let left = 0
// for(let right = 1 ; right < prices.length ; right++){
//     let currProfit = prices[right] - prices[left];
//     if(currProfit < 0)
//         left = right
//     else if(currProfit > maxProfit )
//         maxProfit = currProfit
// }
// return maxProfit

// let arrr=[7,1,5,3,6,4]
// let arrr1=[2,1,4]
// let arrr2=[1,2,4,2,5,7,2,4,9,0,9]
// let arrr3=[3,2,6,5,0,3]
// let arrr4=[2,4,1,11,7]
        // ptr = 1
        // i = 1
        // i+1 = 2
        // profits = 0
// let arr  = [7,5,3,1,6,4]
// let arr2 = [1,2]
// let arr3 = [3,3]
// let arr4 = [2,4,1]
// let arr5 = [3,2,3,5,0,6]
            // ptr = 2
            // i =3
            // profits = 3
// let arr6 = [6,1,3,2,4,7]
// let arr7 = [4,1,2]

// console.log(maxProfit(arrr4));

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// ******************https://leetcode.com/problems/binary-search/************* */

// var search = function(nums, target) {
//     return nums.indexOf(target)
// };
// var search = function(nums, target) {
//     leftIndex = 0 ; 
//     rightIndex = nums.length - 1 
//     while(leftIndex <= rightIndex){
                                     
//     }
// };
// let nums  = [1,2,3,4,5,6]
// let target = 5
// console.log(search(nums, target))


// Meeting Rooms Algorithm : - - - - - - - - 

// function checkMeetingRoom(rooms){
//     rooms.sort((a, b) => a[0] - b[0]);
//     console.log(rooms);
//     for(let i=0;i<rooms.length;i++){
//         if(i==rooms.length-1){return true}
//         if(rooms[i][1]<=rooms[i+1][0]){
//             continue;
//         }else{
//             return false
//         }
//     }
//     return true
// }
// console.log(checkMeetingRoom([[2,10],[12,20],[11,30]]));

// function checkMeetingRoom(rooms){
//     rooms.sort((a, b) => a[0] - b[0]);
//     console.log(rooms);
//     for(let i=1;i<rooms.length;i++){
//         if(rooms[i][0]<=rooms[i-1][1]){
//             continue;
//         }else{
//             return false
//         }
//     }
//     return true
// }


// var Polygon = {'polygon' : [
//     {'moveto' : {'x' : 10, 'y' : 17.0342}},
//     {'lineto' : {'x' : 0, 'y' : 17.0342}},
//     {'lineto' : {'x' : 0, 'y' : 7.03418}},
//     {'lineto' : {'x' : 10, 'y' : 7.03418}},
//     {'curveto' : [{'x' : 18.834, 'y' : 7.04199}, {'x' : 40.334, 'y' : -7.62451}, {'x' : 34.6675, 'y' : 5.37549}]},
//     {'curveto' : [{'x' : 29.001, 'y' : 18.3755}, {'x' : 34.668, 'y' : 29.209}, {'x' : 39.001, 'y' : 18.8755}]},
//     {'curveto' : [{'x' : 43.334, 'y' : 8.54199}, {'x' : 48.001, 'y' : 12.042}, {'x' : 45.501, 'y' : 21.3755}]},
//     {'curveto' : [{'x' : 43.001, 'y' : 30.709}, {'x' : 29.5791, 'y' : 41.1021}, {'x' : 21.001, 'y' : 21.3755}]},
//     {'curveto' : [{'x' : 19.334, 'y' : 17.542}, {'x' : 16.3325, 'y' : 17.0342}, {'x' : 10, 'y' : 17.0342}]}
// ]};

// var originalObject = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA"
//     }
// };
// let deepDaddy = structuredClone(originalObject)
// // let deepDaddy = JSON.parse(JSON.stringify(originalObject))
// deepDaddy.address.city='amer'
// console.log(deepDaddy);
// console.log(originalObject);



// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript - - - - - - - - - -

// function duplicateEncode(word){
//     let result = ''
//     let obj = {}
//     for(let letter of word){
//         letter = letter.toLowerCase()
//         if(obj.hasOwnProperty(letter)){
//             obj[letter]++
//         }else{
//             obj[letter] = 1
//         }
//     }
//     for(let letter of word){
//         letter = letter.toLowerCase()
//         if(obj[letter]==1){
//             result = result + "("
//         }else{
//             result = result + ")"
//         }
//     }
//     return result
// }
// console.log(duplicateEncode('JJJJnJJJySJcTuJR FJ'))

 //-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//  https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript

// let decodeMorse = function(morseCode){
//     const morseCodeObj = {
//         'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
//         'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
//         'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
//         'Y': '-.--', 'Z': '--..',
//         '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
//         '6': '-....', '7': '--...', '8': '---..', '9': '----.',
//         '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.',
//         '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
//         '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'," " :"   "
//       };
//       let wordsAsArr = morseCode.split('')
//       return wordsAsArr.map((letter,index)=>{
//         return letter == ' ' || index+1 == wordsAsArr.length ? `${morseCodeObj[letter]}` : `${morseCodeObj[letter]} ` })
//         .join('')
// }
// console.log(decodeMorse('hey'))

//--------------------------Fibonacci sequence---------------------------------------------------
//:DEFAULT CODE 
//:RECURSION CODE 
// F0 = 0 (applies only to the first integer)
// F1 = 1 (applies only to the second integer)
// Fn = Fn-1 + Fn-2 (applies to all other integers) 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...

// ---------------https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript-----------------

// function reverseAllStrings(string){
//   let splittedString = string.split(' ')
//   splittedString.map((ele)=>ele.split('').reverse().join(''))
//   console.log(splittedString)
//   return splittedString.join(' ')
// }

// console.log(reverseAllStrings('This is an example!'))
// console.log('This is an example!'.split("").reverse().join("").split(" ").reverse().join(" "))


//---------------------https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript---------------
// function findOutlier(integers){
//   let odd = {counter:0,value:null}
//   let even = {counter:0,value:null}
//   for(let num of integers){
//     num%2 === 0 ? even={counter:++even.counter,value:num} : odd={counter:++odd.counter,value:num}
//     if(odd.counter > 1){
//       if(even.value !==null) return even.value
//     }if(even.counter > 1){
//       if(odd.value !==null) return odd.value
//     } 
//   }
  
// }
// let arr = [1,1,0,1,1]
// console.log(findOutlier(arr))

// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
// function cakes(recipe, available) {
//     ifAllExist = Object.keys(recipe).every(key=>available.hasOwnProperty(key))
//     let numberOfCakes = []
//     if(ifAllExist){
//         let keys = Object.keys(recipe)
//         for(let key of keys){
//             if(Math.floor(available[key]/recipe[key])>=1){
//                 numberOfCakes.push(Math.floor(available[key]/recipe[key]))
//             }else{
//                 return 0
//             }
//         }
//     }else{
//         return 0 
//     }
//     return Math.min(...numberOfCakes)
// }
// // must return 2
// let firstCake = cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// let secondCake = cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
// console.log(firstCake)

// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// function domainName(url=''){
//     if(url.includes('www.')){
//       let splitted =   url.split('.')[1]
//       return splitted
//     }
//     else if(url.includes('https://') || url.includes('http://')){
//         return url.split('//').slice(1)[0].split('.')[0]
//     }
//     else{
//         return url.split('.')[0]
//     }
// }

// let domain = "http://git-hub.problems.Jo.com/carbonfive/raygun"
// console.log(domainName(domain))
// let domain2 = 'https://www.cnet.com'
// console.log(domainName(domain2))

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript




// https://leetcode.com/problems/max-consecutive-ones/submissions/1219622144/
// var findMaxConsecutiveOnes = function(nums=[]) {
//     let count1St = 0
//     let result = []
//     if(nums.length==1) return nums[0]
//     for(let i = 0;i < nums.length;i++){
//         if(nums[i]!==1){
//             if(count1St) {
//                 result.push(count1St)
//                 count1St = 0
//             }
//             continue
//         }else{
//            count1St+=1
//            if(i==nums.length-1) result.push(count1St)
//         }
//     }
//     console.log(result);
//     return result.length ? Math.max(...result) : 0
// };
// let nums = [0,0]
// console.log(findMaxConsecutiveOnes(nums))