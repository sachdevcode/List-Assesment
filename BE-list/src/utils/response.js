const sendResponse = (
    res,
    statusCode,
    data = null,
    successMessage = null,
    errorMessage = null
  ) => {
    const response = { statusCode };
  
    if (errorMessage) {
      response.error = true;
      response.message = errorMessage;
    } else {
      response.data = data;
      response.message = successMessage;
    }
  
    return res.status(statusCode).json(response);
  };
  
  module.exports = {
    sendResponse,
  };
  