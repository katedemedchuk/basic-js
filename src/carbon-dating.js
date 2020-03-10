const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) { 
  
  if((typeof sampleActivity === 'string' || sampleActivity instanceof String) && !isNaN(parseInt(sampleActivity)) ){    
    if( parseFloat(sampleActivity) >= 15 ) 
      return false
    return parseFloat(sampleActivity) <= 0 ? false : Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))*HALF_LIFE_PERIOD / 0.693 ) 
  }else
    return false
};
