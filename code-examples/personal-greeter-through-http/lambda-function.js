'use strict';

exports.handler = (event, context, callback) => {

  let result = {};

  if (event.query === undefined) {
    result.greeting = "Please tell me your name (via the query string parameters firstName and lastName)!"
  }
  else {
    if (event.query.firstName === undefined) {
      result.greeting = "Please tell me your firstName. :)"
    } 
    else if (event.query.lastName === undefined) {
      result.greeting = "Please tell me your lastName. :)"
    }
    else result.greeting = "Hello there, " + event.query.firstName +
      " " + event.query.lastName;

    if (event.query.firstName === "Jim" && event.query.lastName === "Lynch") {
      result.greeting = "Ahhh, hello there Jim, the great and powerful " +
        "lambda wizard!";
    }    

  }

  callback(null, result);
};
