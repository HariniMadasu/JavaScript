const character="^";
const count=7;
const rows=[];
let inverted=false;
function pyramidesign(a,b){
    return " ".repeat(b-a)+character.repeat(2*a-1)+" ".repeat(b-a);
}
for(let i=1;i<=count;i++){
    if(inverted){
        rows.unshift(pyramidesign(i,count));
    }else{
        rows.push(pyramidesign(i,count));
    }
}
let result="";
for(const row of rows){
    result=result+row+"\n";
}
console.log(result);