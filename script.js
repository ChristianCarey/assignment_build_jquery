Foo = function(name){
  this.name = name
  this.sayName = function(){
    console.log("My name is " + name)
  }
}

Bar = function(name){
  return {
  name: name,
  sayName: function(){
    console.log("My name is " + name)
  }
  }
}

Baz = function(name){
  if (!(this instanceof Baz)) return new Baz(name);
  this.name = name;
}

SimpleObject = function(collection){
  this.collection = collection
  this.each = function(funct, collection = this.collection){
    for(i = 0; i < collection.length; i++){
      funct(collection[i], i)
    }

  }

}

var jQuery = function(param){
  var first_char = param[0],
      response;

  if (first_char === ".") {
    response = document.getElementsByClassName(param.slice(1));
  } else if (first_char === "#") {
    response = [document.getElementById(param.slice(1))];
  } else {
    response = document.getElementsByTagName(param);
  }
  return new jQueryObject(response);
}

function jQueryObject(collection){
  this.collection = collection;
  this.each = function(funct){
    for(i = 0; i < this.collection.length; i++){
      funct(this.collection[i], i)
    }
  };
  this.length = function(){
    return this.collection.length
  };
  this.eq = function(index){
    return new jQueryObject([this.collection[index]])
  }
}