exports.handler = (event, context, callback) => {

  console.log('first param was: ' + event[0]);
  console.log('second param was: ' + event[1]);
  
  let firstIncremented = event[0] + 1;
  let secondIncremented = event[1] + 1;

  callback(null, [firstIncremented, secondIncremented]);
};
