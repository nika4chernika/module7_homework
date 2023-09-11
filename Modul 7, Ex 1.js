
const obj = {a: 1, b: 2};

// 1 - я думала это будет так
// let show = function() {
//   for (let key in obj) {
//     console.log(key);
// }
// }

// show()

// 2 - оказалось что так))))
let show = function() {
  for (let key in obj) {
    if(obj.hasOwnProperty(key)) {
     console.log(`${key} - ${obj[key]}`); 
    }
}
}

show(obj)