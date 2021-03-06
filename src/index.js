/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */

const pascalTriangle = (lineNumber, line=[1]) => {
  

  if(lineNumber != line.length) {
    if(lineNumber===0) return line
    line = pascalTriangle(--lineNumber, line)
  }
  
  let newArreglo = [1]
  let iteration = --line.length
  let left, right, index=0, indexNext=1, newValue

  // create array 

  do {
    if (indexNext <= line.length ){
      left = line[index]
      right = line[indexNext] || 1
      newValue = left + right
  
      newArreglo.push(newValue)
    } else {
      newArreglo.push(1)
    }

    ++index
    ++indexNext
    --iteration
  } while (iteration >= 0 )
  
  return newArreglo
}

let rr = pascalTriangle(2)
console.log(rr);

module.exports = pascalTriangle;