var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value){
  console.log( recipes[key]=value);
  return Object.assign({},object, {[key]:value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){ 
  object[key]=value;
  return object;
}
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},recipes);
  delete newObj.key;
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.key;
  return object;
}