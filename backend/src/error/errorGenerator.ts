interface ObjType {
  [index: string]: string;
}

const DEFAULT_HTTP_STATUS_MESSAGES: ObjType = {
  '400': 'Bad Requests',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '404': 'Not Found',
  '409': 'duplicate',
  '422': 'Unprocessable Entity',
  '500': 'Internal Server Error',
  '503': 'Temporary Unavailable',
};

export interface ErrorWithStatusCode extends Error {
  statusCode?: number;
}

const errorGenerator = ({
  msg = '',
  statusCode = 500,
}: {
  msg?: string;
  statusCode: number;
}): void => {
  const err: ErrorWithStatusCode = new Error(
    msg || DEFAULT_HTTP_STATUS_MESSAGES[statusCode],
  );
  err.statusCode = statusCode;
  throw err;
};

export default errorGenerator;
