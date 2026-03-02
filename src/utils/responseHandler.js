export const successHandler = (
  res,
  { statusCode = 200, message = "Success..!!", data = {} },
) => {
  res.status(statusCode).json({
    success: true,
    status: statusCode,
    message: message,
    data: data,
  });
};

export const errorHandler = (
  res,
  { statusCode = 500, message = "Internal server error..!!" },
) => {
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
  });
};
