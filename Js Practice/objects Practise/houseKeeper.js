function HouseKeeper(yearsofExperience, name, cleaningRepertoire){
    this.yearsofExperience = yearsofExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

let houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
console.log(houseKeeper1);

let houseKeeper2 = new HouseKeeper(5, "Grace", ["bedroom", "kitchen", "toilets"])
console.log(houseKeeper2.name);