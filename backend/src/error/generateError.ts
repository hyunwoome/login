export interface ErrorWithStatusCode extends Error {
  statusCode?: number;
}

interface StatusCode {
  [key: number]: string;
}

const DEFAULT_HTTP_STATUS_MESSAGES: StatusCode = {
  400: 'Bad Requests',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  500: 'Internal Server Error',
  503: 'Temporary Unavailable',
}

const generateError = (statusCode: number) => {
  const err: ErrorWithStatusCode = new Error(DEFAULT_HTTP_STATUS_MESSAGES[statusCode]);
  err.statusCode = statusCode;
  throw err;
};

export {generateError};
