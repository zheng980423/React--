// 数学函数
const utils = {
  /*
  生成规定大小的始祖，
  例如：
  createArray(5) => [0, 1, 2, 3, 4]
  */
  createArray: (size) => Array.from({ length: size }, (_, i) => i),

  /*
  根据提供的一个数字，从原数组中挑选随机元素
  并将这些数字拼成一个数组
    例如: sampleArray([9, 12, 4, 7, 5], 3) => [12, 7, 5]
  */
  sampleArray: (origArray, sampleSize) => {
    const copy = origArray.slice(0);
    const sample = [];
    for (let i = 0; i < sampleSize && i < copy.length; i++) {
      const index = Math.floor(Math.random() * copy.length);
      sample.push(copy.splice(index, 1)[0]);
    }
    return sample;
  },

  /*
  给定两个数组，从第一个数组中，筛选不包含第二个数组的元素，组成一个数组
  
    例如: arrayCrossCounts([0, 1, 2, 3, 4], [1, 3, 5]) => [2, 3]
  */
  arrayCrossCounts: (srcArray, crossArray) => {
    let includeCount = 0;
    let excludeCount = 0;
    srcLoop: for (let s = 0; s < srcArray.length; s++) {
      for (let c = 0; c < crossArray.length; c++) {
        if (crossArray[c] === srcArray[s]) {
          includeCount += 1;
          continue srcLoop;
        }
      }
      excludeCount += 1;
    }
    return [includeCount, excludeCount];
  },
};
export default utils;
