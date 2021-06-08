
exports.min = function min (array = []) {
  if(array.length === 0) return 0;
  let result = array[0];
  array.forEach(elem => {
    if(elem < result) result = elem
  });
  return result
}

exports.max = function max (array = []) {
  if(array.length === 0) return 0;
  let result = array[0];
  array.forEach(elem => {
    if(elem > result) result = elem
  });
  return result
}

exports.avg = function avg (array =[]) {
  if(array.length === 0) return 0;
  let result = 0;
  array.forEach(elem => result += elem);
  return result / array.length
}
