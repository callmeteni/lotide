const pigLatin = function(word) {
    // Get the first letter of the word
    const firstLetter = word[0];
  
    // Move the first letter to the end of the word and add "ay"
    const pigLatinWord = word.slice(1) + firstLetter + 'ay';
  
    return pigLatinWord;
  };
  
  // Retrieve the word from command-line arguments
  const words = process.argv.slice(2);
  
  // Convert the input word to pig Latin
  const pigLatinWords = [];
  for(let i = 0; i< words.length; i++){
    const word = words[i];
    const pigLatinWord = pigLatin(word);
    pigLatinWords.push(pigLatinWord);
  }
  
  // Display the pig Latin word on the terminal
  console.log(pigLatinWords);