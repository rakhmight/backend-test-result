// General
export const BadRequestError = {
  description: "Bad request (request parameters not taken into account)",
  type: "object",
  properties: {
    statusCode: {
      type: "integer",
      default: 400,
    },
    message: {
      type: "string",
      default: "Bad request",
    },
  },
};

export const InternalServerError = {
  description: "Some server internal problems",
  type: "object",
  properties: {
    statusCode: {
      type: "integer",
      default: 500
    },
    message: {
      type: "string",
      default: "Internal problems"
    },
  },
};

export const NotFoundError = {
  description: "Resource not found",
  type: "object",
  properties: {
    statusCode: {
      type: "integer",
      default: 404
    },
    message: {
      type: "string",
      default: "Not found"
    },
  },
}


// User
export const UserNotFoundError = {
  description: "User not found",
  type: "object",
  properties: {
    statusCode: {
      type: "integer",
      default: 404
    },
    message: {
      type: "string",
      default: "User not found"
    },
  },
}