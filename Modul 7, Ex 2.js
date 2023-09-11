const room = {}
  room.name = 'bathroom';
  room.size = '20m';
  room.color = 'white';

const str1 = 'name';
const str2 = 'year';

let findProp = function(obj, str) {
  if(str in obj) {
    return true
  }else{
    return false
  }
}

console.log(findProp(room, str1))