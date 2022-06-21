const Year = function(year){
    this.year = year
    this.visitors = 0
    this.revenue = 0
}

Year.prototype.totalVisitors = function(park){
    for (let dinosaur of park.dinosaurs) {
        this.visitors += dinosaur.guestsAttractedPerDay
    }
}

Year.prototype.calculateRevenue = function(park){
    this.totalVisitors(park)
    ticketPrice = park.ticketPrice
    totalVisitors = this.visitors
    total = ticketPrice * totalVisitors
    return total
}


module.exports = Year;