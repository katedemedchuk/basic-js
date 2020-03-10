module.exports = function countCats( matrix ) {
  return matrix.flat().reduce( ( acc, curr ) => curr == '^^' ? acc+1 : acc, 0 )

};
