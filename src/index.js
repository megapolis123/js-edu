/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = 'family', 
  knowsProgramming = true,
  config = {family: 4}
  ) {
    let basic = 500;
    let advanced = 800;
    if (knowsProgramming === true) {
      return Math.ceil(advanced / config[focus]);
    } else {
      return Math.ceil((advanced + basic) / config[focus]);
    }
};
  