export const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";
  let errors = err.errors || [];
  /* Multer Errors */
  if (err.name === "MulterError") {
    statusCode = 400;
    message = err.message;
  }

  /* MongoDB Duplicate Key Error */
  if (err.code === 11000) {
    statusCode = 409; //409 for duplication
    const field = Object.keys(err.keyValue)[0];
    message = `${field} already exists`;
  }

  /* Mongoose Validation Error */
  if (err.name === "ValidationError") {
    statusCode = 400;
    errors = Object.values(err.errors).map((e) => e.message);
    message = "Validation failed";
  }
  res.status(statusCode).json({
    status: "error",
    message,
    errors,
  });
};
