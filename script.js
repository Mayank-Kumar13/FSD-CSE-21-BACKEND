//Synchronous 


// console.log("javascript");
// function hello (){
//     console.log("hello");
// }
// hello();
// console.log("synchonous");


//Asynchronous


// const hell=()=>{
//     setTimeout(()=>{
//         console.log("hello after 2 sec");
//     },2000)
// }
// hell();
// console.log("hello");

//callback

// function add(n1,n2,callback){
//     callback();
//     return n1+n2;
    
// }
// console.log(add(4,5,sayhi));
// function sayhi(){
//     console.log("hello ji");
// }

//create a callback function displat that print "welcome to abes" and callback function print "learning fsd"
// function displat(callback){
//   console.log("welcome to abes");
//   callback();
// }
// displat(callba);
// function callba(){
//     console.log("learnibg fsd");
// }


//Promises :- mai tumko kbhi nahi chodhungi

const promise=new Promise((res,rej)=>{
  let err=false;
  if(err){
    res("user:mayank,pass:123");
  }
  else
    rej("pit gaye");

})
promise.then((ans)=>{
   console.log(ans);
}).catch((err)=>{
  console.log(err);
})



//async /await
console.log("start, this is async/await");

async function test() {
    console.log("1");
    await console.log("2");
    console.log("3");
    console.log("4");
}
test();
console.log("6");

