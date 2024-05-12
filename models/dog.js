
const dogs = [
    { id: 1,
      breed: 'Akita',
      description: 'dignified / courageous / profoundly loyal',
    },
    { id: 2,
      breed: 'Alaskan',
      description: 'loyal / intelligent / vigilant',
    },
    { id: 3,
      breed: 'Barbet',
      description: 'friendly / bright / sweet-natured',
    },
  ];
  
  module.exports = {
     getAll: function() {
       return dogs;
     },
  
    getOne: function (breed) {
      return dogs.find((dog) => dog.breed.toLowerCase() === breed.toLowerCase());
    }
   };
  