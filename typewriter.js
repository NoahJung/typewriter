const sentence = "hello there from lighthouse labs";
let mSentence = sentence + '\n';
let msTime = 0;

for (const char of mSentence) {
  //console.log(char);
  msTime += 50;
  setTimeout(() => {
    process.stdout.write(char)
  }, msTime) // <= 1s delay to make it noticeable. Can dial it down later.

} 




