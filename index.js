const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push('Ralph');
}
function destructivelyPrependCat(name){
    return cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(cats2){
    return cats2 = [...cats, "Broom"]
}
function prependCat(cats2){
    return cats2 = ["Arnold", ...cats,]
}
function removeLastCat(){
    return cats.slice (0, 2);
}
function removeFirstCat(){
    return cats.slice (-2);
}
