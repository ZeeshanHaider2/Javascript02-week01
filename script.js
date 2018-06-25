function Car (make , color, speed ){ 

var make = ["Tesla Roadster","Bugatti Chiron","Lamborghini Aventador S","Koenigsegg Agera RS","Aston Martin Valkyrie", "Koenigsegg CCR","Ferrari 812 Superfast"];

var color = ["Black", "Red","light yellow","white","grey"];

var speed = [301, 278, 233, 257, 260, 245,225];

//https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
this.make = make[Math.floor(Math.random()*make.length)];
this.color = color[Math.floor(Math.random()*color.length)];
this.speed = Math.floor(Math.random() * 57) + 225;
//https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

}


let newCars = [];
for (i = 0; i < 10; i++) {
    newCars[i] = new Car ("","","");
}

console.log(newCars);


const fastCars = newCars.filter(function(car) {
    // This function is called for every car in the cars array
    if (car.speed >= 230 && car.speed <= 260) {
        // save the car
        return true;
    } else {
        // filter out the cars that are slower than 230 and faster than 260
        return false;
    }
});


console.log(fastCars);
