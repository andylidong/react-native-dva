/**
 * 延迟执行
 * @param {*} time 
 */
const delay = time => new Promise(resolve => setTimeout(resolve, time));


export default {
  delay,
};
