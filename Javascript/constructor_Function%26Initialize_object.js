function HouseKeeper(yearsOfExperience, name, cleanningPref) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleanningPref = cleanningPref;
}

const houseKeeper1 = new HouseKeeper(12, "Alia", ["bathroom", "kitchen", "hall"]); 
const houseKeeper2 = new HouseKeeper(10, "Ranbir", ["bathroom", "kitchen", "hall"]);

console.log(houseKeeper2.name);
console.log(houseKeeper1.cleanningPref);
