const distance = [43,50,34]
function distanceFromHqInBlocks(distance) {
    if (distance>=42) {
        return distance-42
    }
    else{
        return 42-distance
    }
}
function distanceFromHqInFeet(distanceInFeet) {
    if (distanceInFeet>=42) {
        return distanceFromHqInBlocks(distanceInFeet)*264
    }
    else {
        return distanceFromHqInBlocks(distanceInFeet)*264
    }
}
function distanceTravelledInFeet(start ,end) {
    if (end>=start) {
        return (end-start)*264
    }
    else{
        return (start-end)*264
    }
}

function calculatesFarePrice(start, destination) {
    let distance= distanceTravelledInFeet(start ,destination) 
    if (distance<= 400) {
        return 0
    }
    else {
        if (distance>400 && distance<=2000){
            return (distance-400) *0.02
        }
        else if(distance<=2500){
            return 25
        }
        else{
            return 'cannot travel that far'
        }
    }
}