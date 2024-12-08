function handleLikePost(step) {
    let likeCount = 0;
    return function addLike() {
      likeCount += step;    
      return likeCount;
    }
  //   addLike();
    console.log('like count:', likeCount);
  }
  
  const doubleLike = handleLikePost(2);
  
  console.log(doubleLike());
  console.log(doubleLike());
  console.log(doubleLike());
  
  // 1) Closures are a property of JavaScript functions
  // 2) Call function in different scope than where function was original defined
  // 3) Function still has access to variables from the scope it was created in 
// 4) Closures are a way to "remember" and continue to access a function's scope (its variables) even once the function has finished running.
 // 5) Closures are a way to "close over" a function's scope, essentially protecting it from being garbage collected.    
// 6) Closures are a way to "lock in" variables' values with a function.
// 7) Closures are a way to keep a reference to a function in memory.
// 8) Closures are a way to emulate private variables in JavaScript.
// 9) Closures are a way to partially apply functions in JavaScript.