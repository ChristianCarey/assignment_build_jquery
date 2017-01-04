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

var jQuery = function(parm){
  return {
    param: param
  }
}