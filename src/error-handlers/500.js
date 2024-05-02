'use strict';

function handleInternalServerError(error, request, response, next) {
  let output = {
    code: 500,
    error: 'Internal Server Error',
    message: error.message || 'Something went wrong',
  };
  response.status(500).json(output);
}

module.exports = handleInternalServerError;
