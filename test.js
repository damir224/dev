function shortestSubstring(str, letters) {
    const lettersHashMap = {};
    let windowStart = 0;
    let windowEnd = 0;
    let shortestSubstring = str;
    let counter = 0;
  
    for (const letter of letters) {
      lettersHashMap[letter] = letter.charCodeAt()
      counter += letter.charCodeAt();
    };
  
  
    while (windowEnd < str.length) {
  
      if (lettersHashMap[str[windowEnd]] === 1) {
        if(lettersHashMap[str[windowEnd]] > 0) str[windowEnd].charCodeAt();
        counter -= lettersHashMap[str[windowEnd]];
      }
  
      if (counter === 0) {
        const candidate = str.substring(windowStart, windowEnd + 1);
        if (candidate.length < shortestSubstring.length) {
          shortestSubstring = candidate;
        }
  
        lettersHashMap[str[windowStart]] += str[windowStart].charCodeAt();
        windowStart = windowStart + 1;
        while (lettersHashMap[str[windowStart]] === undefined) {
          windowStart += 1;
        }
        counter += 1;
      }
  
      windowEnd += 1;
    }
  
    return shortestSubstring;
  }
  
  console.log(shortestSubstring('addbecodebanc', 'abc')); // banc
  