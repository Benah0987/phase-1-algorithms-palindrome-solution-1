function isPalindrome(word) {
  
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Reverse the cleaned string and compare to original string
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  console.log(isPalindrome(Racecar)); 
  /*Write your algorithm here
     Start by defining the function isPalindrome with a single parameter word.
     Convert the word to lowercase using the toLowerCase() method and assign the result to the cleanedStr variable.
     Remove non-alphanumeric characters from the cleanedStr variable using the replace() method with a regular expression /[^a-z0-9]/g. Assign the result back to the cleanedStr variable.
     Reverse the cleanedStr string by calling the split() method with an empty string as an argument to convert the string to an array of characters. Then, call the reverse()
      method to reverse the order of the elements in the array. Finally, call the join() 
      method with an empty string as an argument to convert the array back to a string. Assign the result to the reversedStr variable.
     Compare the cleanedStr variable with the reversedStr variable. If they are equal, return true. Otherwise, return false.

  */
/* 
  Add your pseudocode here
  1.Create a function called isPalindrome that takes a single parameter called 'word'.
  2. Declare a variable called 'cleanedStr' to store the cleaned version of the 'word' parameter.
  3. Clean the 'word' parameter by converting it to lowercase and removing all non-alphanumeric characters using regex (regular expressions) with the help of the replace method and store it in 'cleanedStr'.
  4. Reverse the 'cleanedStr' string by splitting it into an array of characters, reversing the order of the elements, and then joining the elements back together into a string.
  5. Compare the reversed string to the original 'cleanedStr' string using the strict equality operator (===) to determine if it is a palindrome.
  6. Return the result of the comparison.

*/

/*
  Add written explanation of your solution here
  #
  The provided code defines a function called isPalindrome that takes a string called word as an argument. 
  This function checks if the given word is a palindrome or not.

#
A palindrome is a word, phrase, number, or other sequence of characters 
that reads the same backward as forward. For example, "racecar" is a palindrome because 
if we reverse its characters, it still spells "racecar."

#
The function first removes all non-alphanumeric characters from the given word using regex, 
by converting it to lowercase and then using the replace method. It then stores this cleaned string in the variable cleanedStr.

#
Then, the function reverses the cleanedStr string by splitting it into an array of characters, 
reversing the order of the elements, and then joining the elements back together into a string. This is achieved by using the split, reverse, and join methods.

#/
Finally, the function compares the reversed string with the original cleanedStr string using the strict equality 
operator (===) to determine if the given word is a palindrome or not. If they are the same, then the word is a palindrome and the function returns true, otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
