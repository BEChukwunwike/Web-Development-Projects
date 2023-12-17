function beerOnWall(){
    let count = 99
    while (count >= 1){
        console.log(count + " bottles of beer on the wall, "+ count + " bottles of beer.");
        count--;
        if (count != 1){
            console.log("Take one down, pass it around, " + count + " bottles of beer on the wall.");
        } else {
            console.log("Take one down, pass it around, No more bottles of beer on the wall!")
        }
    }

    
}
beerOnWall()