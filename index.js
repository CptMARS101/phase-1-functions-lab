// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    let hq = 42
let distance = Math.abs(blocks - hq);
return distance;
}
function distanceFromHqInFeet(blocks) {
    let hq = 42
let distance = Math.abs(blocks - hq) * 264;
return distance; 
}
function distanceTravelledInFeet(start, destination) {
let distance = Math.abs(start - destination) * 264;
return distance;
}
function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination) * 264;
    let fare = (distance - 400) * .02
    if(distance <= 400) {
        return 0}else if(distance > 400 && distance <= 2000) {return fare
        }else if(distance > 2000 && distance <= 2500) {return 25
        }else if(distance > 2500) {return "cannot travel that far"
    }
    
}