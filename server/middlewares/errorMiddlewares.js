const routeNotFound = (req, res, next) => {
  // Create an error with a message indicating the route was not found
  const error = new Error(`Route not found: ${req.originalUrl}`);

  // Set the response status to 404 (Not Found)
  res.status(404);

  // Pass the error to the next middleware in the stack
  next(error);
};

const errorHandler = (err, req, res, next) => {
  // Determine the status code to use (default to 500 if status is 200)
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  // Handle specific error types (e.g., CastError for ObjectId)
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }

  // Send the error response as JSON
  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV !== "production" ? null : err.stack,
  });
};

export { routeNotFound, errorHandler };
