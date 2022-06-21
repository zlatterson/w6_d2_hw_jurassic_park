const Park = function (name,ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
    for (let i = 0; i < this.dinosaurs.length; i++){
        if (this.dinosaurs[i] === dinosaur){
            this.dinosaurs.splice(i, 1)
        }
    }
}

Park.prototype.mostVisitors = function(){
    highestName = null
    highestNumber = 0
    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > highestNumber){
            highestNumber = 0
            highestNumber += dinosaur.guestsAttractedPerDay
            highestName = dinosaur.species
        }
    }
    return highestName
}

Park.prototype.findPerSpecies = function(dinosaur){
    allOfSpecies = []
    for (let i = 0; i < this.dinosaurs.length; i++){
        if (this.dinosaurs[i] === dinosaur){
            allOfSpecies.push(this.dinosaurs[i])
        }
    }
    return allOfSpecies.length
    // remove .length to find the actual dinosaurs
}

Park.prototype.totalVisitors = function(){
    totalNumber = 0
    for (let dinosaur of this.dinosaurs) {
        totalNumber += dinosaur.guestsAttractedPerDay
    }
    return totalNumber
}

Park.prototype.removeSpecie = function(dinosaur){
    for (let i = this.dinosaurs.length; i--; )
    {
        if (this.dinosaurs[i].species === dinosaur.species) {
            this.dinosaurs.splice(i, 1);
        }
    }
}


module.exports = Park;