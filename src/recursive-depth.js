module.exports = class DepthCalculator {
    calculateDepth(arr, res = 1, cur = 1) {
      arr.forEach( (el) => {
        if (Array.isArray(el)) {
          cur++;
          if (res < cur) res++;
          res = Math.max(this.calculateDepth(el, res, cur), res);
          cur--;
        }
      });  
      return res;
    }
};