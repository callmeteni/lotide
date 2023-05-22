const reverse = function(arr) {
    const reversedArr = [];
    for ( i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  };
  
  const items = ["snake", "boy", "girl"];
  console.log(reverse(items));
