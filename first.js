function hello(){
    console.log("hello world");
}
function mello(){
    console.log("mello world");
}

setTimeout(hello,2*1000);
setTimeout(mello,1*1000);

//----------------------------------------------------------------


setTimeout(function(){
    console.log("hello rahul");

},4*1000);
setTimeout(function(){
    console.log("hello foxy");
},5*1000);



//--------------------------------------------------


for(let i=1;i<=10;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000)
}

for(let i=11;i>=0;i--){
    setTimeout(function(){
        console.log(12-i);
    },i*1000)
}