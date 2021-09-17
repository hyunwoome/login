export interface ErrorWithStatusCode extends Error {
  statusCode?: number;
}

const errorGenerator = ({
  msg,
  statusCode,
}: {
  msg: string;
  statusCode: number;
}) => {
  const err: ErrorWithStatusCode = new Error(msg);
  err.statusCode = statusCode;
  throw err;
};

export default errorGenerator;
