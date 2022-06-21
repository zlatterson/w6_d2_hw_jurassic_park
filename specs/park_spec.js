const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');
const Year = require('../models/year.js')

describe('Park', function() {

  let park;
  let dinosaur;
  let year;
  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30)
    park = new Park('Jurassic Park', 20)
    year = new Year(2022)
    year2 = new Year(2019)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });


  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.removeDinosaur(dinosaur2)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur)
    const actual = park.mostVisitors()
    assert.strictEqual(actual, 't-rex')
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    const actual = park.findPerSpecies(dinosaur)
    assert.strictEqual(actual,3)
    
  });

  it('should be able to calculate the total number of visitors per day',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur2)
    const actual = park.totalVisitors()
    assert.strictEqual(actual, 110)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    year.totalVisitors(park)
    const actual = year.visitors
    assert.strictEqual(actual,80)
  });

  it('should be able to calculate total revenue for one year',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur2)
    const actual = year.calculateRevenue(park)
    assert.strictEqual(actual, 2200)
  });

  it('should be able to remove a dinosaur of species',function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur2)


    park.removeSpecie(dinosaur2)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 3)
  })

});
