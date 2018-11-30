const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      {"A": "Ben"},
      {"B": "CardiB"},
      {"C": "CardiB"},
      {"D": "Paul"}
    ];
    return result;

    // Annotation:
    // first i go through the creation phase to see whats in the global storage
    // personA, personB, personC, and function changePerson are whats store
    // then ill go to the execution phase and the first thing is changePerson() is invoke in line 28
    // then i go back to my function to work within its brakcets
    // hit the if statement where if personA === Paul which if true it creates a new global variable with the value 
    // CardiB and it also invokes the beautifyPerson function 
    // with beautifyPerson the first log is request and its ben because personB isnt specify in the function so it go 
    // globally for the value the variable
    // then a if another if statement is invoke to where its true and within the if statement is reassign personB to person 
    // so personB is now CarbiB and also reassign personC to personB so now personC is now CardiB
    // now i have to log personC which is CardiB
    // now i hit the bottom of the changePerson() which is a reassignment of personC to personA which makes personC to Paul now
    // and the last log is now to log personC which is paul
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number

      function newNumber() {
        number = 64;

        // Log B: number
      }

      newNumber();

      // Log C: number
    }

    numberFunction();

    // Log D: number

    const result = [
      {"A": 75},
      {"B": 64},
      {"C": 64},
      {"D": 30}
    ];
    return result;

    // Annotation:
    // first i go through the creation phase to see whats in the global storage
    // number and numberFunction are whats save to the storage
    // next on line 79 numberFunction is invoke so now i work my way to the function
    // in the function the first thing is to perform another creation phase within the function
    // so it gives me number and newnumber
    // now to i back down to perform the execution phase
    // first i hit the if statement which is true but the variable is within a block scope i just ignore it knowing it wont affect
    // anything outside
    // hit my first log which is to log number which at this moment is 75 because im within the function scope
    // next on line 79 i invoke the function newNumber and in line 69 is a reassignment which change the functions number to 64
    // now i have to log number again which will be 64
    // after completing the newnNumber function i leave it and have to log c which again is 64 due to be being in the function
    // i leave the numberFunction function and hit my last log which is to log number again which is now 30 because im no longer in
    // the function and getting the value from the global storage 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting
      }

      newPhrase();

      // Log C: greeting
    }

    greetingFunction();

    // Log D: greeting

    const result = [
      {"A": "Yo"},
      {"B": "Hey"},
      {"C": "Hey"},
      {"D": "Hello"}
    ];
    return result;

    // Annotation:
    // global storage which will be greeting and greetingFunction
    // on line 131 greetingFunction is invoke
    // greetingFunction local storage greeting and newPhrase
    // if statement which has a variable within a block scope so ignore
    // hit log A which will be yo due to function scope
    // newPhrase invoke on line 126 which within the function is reassign the functions greeting to hey 
    // hit log b which is Hey because of function scope 
    // next is to leave the newPhrase function to hit are next log, log c which is hey because we are still in the function
    // now we are out of the function and have to log d which is hello because now we are in the window the store in the 
    // window for greeting is hello
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting
      };

      newGreeting();

      // Log C: greeting
    };

    greetingGenerator();

    // Log D: greeting

    const result = [
      {"A": "hi"},
      {"B": "welcome"},
      {"C": "welcome"},
      {"D": "howdy"}
    ];
    return result;

    // Annotation:
    // hands are crapping up so im gonna start explaining as simple as i can
    // creation phase - greeting and greetingGenerator()
    // in line 179 greetingGenerator() is invoke 
    // creation phase locally - greeting and newGreeting
    // if statement is invoke but nothing changes due to block scope
    // log a is hi due to function scope
    // in line 174 newGreeting() is invoke
    // greeting is reassign to welcome within the greetingGenerator()
    // lob b is welcome due to function scope
    // log c is welcome due to funciton scope
    // log d is howdy due to global scope
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name
      }

      // Log B: name
    }

    // Log C: name

    sayName();

    // Log D: name

    const result = [
      {"C": "Brittany"},
      {"A": "Nathaniel"},
      {"B": "Nathaniel"},
      {"D": "Brittany"}
    ];
    return result;

    // Annotation:
    // creation phase - name and sayName()
    // log c is brittany due to global scope
    // in line 226 sayNmae() is invoke 
    // creation phase locally - name
    // if statement is invoke and name is reassign to nathaniel
    // another if statement is invoke nothing happen due to block scope
    // log a is nathaniel due to function scope
    // log b is nathaniel due to function scope 
    // log d is brittany due to global scope 
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog

        dog = 'Biscuit';

        // Log C: dog

      }

      rollOver();

      // Log D: dog
    }

    petDog();

    // Log E: dog

    const result = [
      {"A": "Spot"},
      {"B": "Spot"},
      {"C": "Biscuit"},
      {"D": "Biscuit"},
      {"E": "Biscuit"}
    ];
    return result;

    // Annotation:
    // creation phase - dog and petDog()
    // in line 274 petDog() is invoke 
    // creation phase locally - rollOver()
    // log a is spot because nothing is in the function so it go's out to the global storage
    // if statement is invoke but nothing happens due to block scope
    // in line 269 rollOver() is invoke
    // log b is spot because nothing is in the function so it go's out to the global storage
    // dog is reassign to biscuit
    // log c is biscuit because nothing is in the function so its go's out to the gloabl storage
    // log d is also biscuit for the same reason above 
    // log e is biscuit due to global scope 
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit
          const fruit = 'strawberry';
        }

        // Log B: fruit
      }

      // Log C: fruit
    }

    eatFruit();

    // Log D: fruit

    const result = [
      {"A": "reference error"},
      {"B": "mango"},
      {"C": "mango"},
      {"D": "apple"}
    ];
    return result;

    // Annotation:
    // creation phase - fruit and eatFruit()
    // in line 320 eatFruit() is invoke
    // creation phase locally - none
    // if statement is invoke and within it another if statement is invoke
    // log a is reference error due to TDZ  because of the const
    // log b is mango due to block scope
    // log c is mango due to function scope
    // log d is apple due to global scope
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum
      }

      newNum = num;

      // Log C: newNum
    };

    const fn2 = function(num){
      // Log D: num

      num = num + 1;

      // Log E: num
    };

    fn1();

    const result = [
      {"A": 4},
      {"D": 9}, 
      {"E": 10},
      {"B": 9},
      {"C": 4}
    ];
    return result;

    // Annotation:
    // creation phase - num, fn1, and fn2
    // in line 374 fn1() is invoked
    // creation phase locally - num
    // log a is 4 due to function scope 
    // the if statement is invoke
    // within the if statement num has a value of 9 
    // the function fn2 is invoke so we head down there
    // log d is 9 do to function scope by the parameter
    // num is reassign whith a new value of 10
    // log e is 10 due to function scope
    // we exit the function and newNum has a value of 9 due to function scope 
    // log b is 9 due to block scope
    // log c is 4 due to function scope
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger
      }

      // Log C: hunger
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger

    eatSnack();
    // Log E: hunger

    const result = [
      {"A": 75},
      {"B": 0},
      {"C": 75},
      {"D": 80},
      {"A": 55},
      {"B": 0},
      {"C": 55},
      {"E": 55}
    ];
    return result;

    // Annotation:
    // creation phase - hunger and  eatSnack()
    // eatSnack is invoke in line 417
    // creation pahse locally -  gorgeYourself
    // log a is 75 due to global scope because the function doesnt have hunger declare 
    // gorgeYourself() is invoke in line 407 
    // log b is 0 due to function scope
    // log c is 75 due to global scope because the function doesnt have hunger declare
    // hunger how has a value of 80 
    // eatSnack() is invoke again in line 422
    // now repeat line 439 to 444 but the global value of hunger is 80 this time
    // log a is now 55
    // log b is still 0 because of function scope
    // log c is now 55
    // log e is 55 due to gloabl scope 
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich

    const addChipotle = () => {
      // Log B: toppings
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich
    // Log F: amandaBynes

    const result = [
      {"A": "ketchup sandwich"},
      {"D": "gouda"},
      {"B": undefined},
      {"C": "not a mediocre sandwich"},
      {"E": "not a mediocre sandwich"},
      {"F": "National Treasure"}
    ];
    return result;

    // Annotation:
    // creation phase - sandwich, addChipotle, and addCheese.
    // log a is ketchup sandwich due to global scope 
    // line 482 cheeseTopping is now a global var with the value of kraft
    // addCheese() in invoke in line 483
    // creation phase locally - cheesetopping and shesthemanreference
    // log d is gouda due to function scope 
    // shesthemanreference() is invoke in line 479 
    // amandaBynes is made into a global var with the value of national treasure
    // addchipotle is invoke in line 485
    // creation phase locally -  topping 
    // log b is undefied because its invoke  before it hits the var
    // if statement is true so it reassign the global sandwich to not a mediocre sandwich
    // log c is not a mediocre sandwich due to global scope
    // log e is also not a mediocre sandwich due to global scope 
    // log f is national treasure due to global scope
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num
    }

    foo();

    // Log B: num

    const result = [
      {"A": 7},
      {"B": 7}
    ];
    return result;

    // Annotation:
    // creation phase - num and foo()
    // foo() is invoked in line 527
    // if statement in the function reassign global num to 7 
    // log a is 7 due to global scope 
    // log b is 7 due to global scope 
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = [
      {"A": 95},
      {"B": 90},
      {"C": 90}
    ];
    return result;

    // Annotation:
    // creation phase - grade and losepoints
    // losepoint() is invoked in line 561 
    // creation phase locally - addpoints()
    // in line 549 grade is reassign to 90
    // addpoints() is invoke in line 561
    // creation phase locally - grade
    // if statement which does nothing due to block scope and its not reassigning anything
    // log a is 95 due to block scope
    // log b is 90 due to global scope because theres nothing in the function scope
    // log c is 90 due to global scope
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num
      num = 6;
      // Log B: num
    }

    function second() {
      // Log C: num
      let num = 7;
    }

    first();
    second();

    // Log D: num

    const result = [
      {"A": 5},
      {"B": 6},
      {"C": "reference error"},
      {"D": 6}
    ];
    return result;

    // Annotation:
    // creation phase - num, first(), and second()
    // first() is invoked in line 604
    // log a is 5 due to global scope
    // num is reassign to 6 
    // log b is 6 due to global scope
    // second() is invoked in line 605
    // creation phase locally - num
    // log c is reference error due to it being call before the variable and its also a let
    // log d is 6 due to global scope
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = [
      {"E": "Pam"},
      {"A": "Pam"},
      {"B": "Pam"},
      {"C": "Louisa"},
      {"D": "Louisa"},
      {"F": "Louisa"}
    ];
    return result;

    // Annotation:
    // creation phase - instructor and changeinstructor()
    // log e is pam due to global scope 
    // changeinstructor() is invoked in line 657
    // log a is pam due to global scope 
    // theres a if statement that doesnt due anything because of block scope 
    // log  b is pam due to global scope 
    // rename() is invoked in line 649
    // instructor is reassign to louisa to the global storage
    // log c is louisa due to global scope
    // log d is louisa due to global scope
    // log f is louisa due to global scope 
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
      {"B": "flipflop"},
      {"A": undefined},
      {"C": "flipflop"}
    ];
    return result;

    // Annotation:
    // creation phase - shoe and putonshoe
    // log b is flipflop due to global scope
    // putshoeon() is invoked in line 694
    // log a is undefined due to it being log before the var
    // log c is flipflop due to global scope
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = [
      {"B": "soup"},
      {"C": "soup"}
    ];
    return result;

    // Annotation:
    // creation phase - lunch and orderlunch()
    // orderlunch() invoke line 727
    // first if statement doesnt invoke due to it being false
    // second if statement is invoked due to it being true
    // lunch is reassign to soup
    // log b is soup due to global 
    // log c is soup due to global
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = [
      {"A": "Pandora"},
      {"B": ["Antigone", "Pandora"]},
      {"C": "Mandy"},
      {"D": "Antigone"},
      {"E": "Pandora"}
    ];
    return result;

    // Annotation:
    // creation phase - mykids, wildkids, and mycrazykidantics
    // mycrazykidantics() is invoed in line 775
    // log a is pandora due to global scope
    // line 753 pandora is push into wildkids
    // log b is ["antigone", "pandora"] due to global scope
    // drawonthewall() is invoked in line 762 
    // log c is mandy due to funciton scope
    // myamazingkid() is invoked in line 770 
    // log d is anitgone due to the global of  wildkids shifting out the first index
    // log e is pandora due to global scope
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = [
      {"A": "Rody"},
      {"B": "RodyToy"},
      {"C": "Tesla"},
      {"D": "RodyToyDaniels"}
    ];
    return result;

    // Annotation:
    // creation phase - myname and parentfunc
    // log a is rody due to global scope 
    // parentfunc() invoked in line 816
    // line 804  toy is added to rody making rodytoy
    // log b is rodytoy due to global scope
    // innerfunc is invoked in line 812
    // log c is tesla due to function scope
    // line 813 daniels is add to rodytoy
    // log d is rodytoydaniels due to global scope 
  }
};

module.exports = scope;