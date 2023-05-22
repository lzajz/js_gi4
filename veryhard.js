

function countCoins(moneda,total){


let monedaLength = moneda.length;
let monedaCount = 0;
let counter = total;
let nope = false;


 moneda.sort();
 moneda.reverse();

 while(counter > 0){
    for(let i = 0; i < monedaLength ; i++){
        if(moneda[i] > counter){
            nope = true;
            break;
        }
        nope = false;
        counter -= moneda[i];
        monedaCount++
    }
    if(nope){
        return -1;
    }
 }
return monedaCount
    
}
console.log(countCoins([2],11))