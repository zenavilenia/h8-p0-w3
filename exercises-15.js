function groupAnimals(animals) {
  var arr = [];
  var arrBaru = [];
  var tampung = [];

  for(var i = 0; i < animals.length; i++) {
    arr[i] = animals[i].charAt(0);
  }

  arr.sort();

  arr = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  })

  for(var i = 0; i < arr.length; i++) {
    for(var j = 0; j < animals.length; j++) {
      if(arr[i] === animals[j].charAt(0)) {
        tampung.push(animals[j]);
      }
    }
    arrBaru.push(tampung);
    tampung = [];
  }

  return arrBaru;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
