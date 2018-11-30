const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = "global window object";
    return result;

    // Annotation:
    // this is in a arrow function in line 3 so this is set in the first phase
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = "global window object";
    return result;

    // Annotation:
    // js see this as window.fn.value your trying to find the this of fn()
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = "el";
    return result;

    // Annotation: 
    // ok js see this technically as el = functiona() {consolelog(this)} and this is refer to el due to rule 2
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){
        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = "global window object";
    return result;

    // Annotation: 
    // same as all the explanation that has the result as global window is written as window.dog.breed and it goes back two from the final dot notation
    // is how i remenber it unless rule 3 is in  affect
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    const result = "global window object";
    return result;

    // Annotation: 
    // this is the same as the second one following rule one js see this as window.fn()
    // but the value is global so it should return 21 
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = "instance of Hero";
    return result;

    // Annotation: 
    // js sees this as Hero.identifyHero() and the method value is this so this is hero 
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = "global window object";
    return result;

    // Annotation: 
    // js see this as window.monopoly.title and go back two to hit the window in the chain
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = "obj";
    return result;

    // Annotation: 
    // this alone is in the arrow function so ir refers to this.arrowfunction which refers to the obj 
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = "poets";
    return result;

    // Annotation: 
    // this is being refer to the poets thats why it will return poets because of rule 3 
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = "el";
    return result;

    // Annotation: 
    // js see this as  window.el.document.this so go back two and you got your window 
  },

  exerciseK() {
    const el = $('#btn');
    el.on('click', () => {
      console.log(this);
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = "global window object";
    return result;

    // Annotation: 
    // its the same as the last one js see it as window.el.this so go back two and you hit window
  }

};

module.exports = context;