/**
 *
 * @param {AsyncRouteHandler} fn - You have to wrap the Controller Function with catchAsync()
 * @returns {void}
 */
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

module.exports = catchAsync;
