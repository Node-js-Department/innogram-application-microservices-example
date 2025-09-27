export const ERROR_MESSAGES = {
  METHOD_NOT_IMPLEMENTED: 'Method not implemented',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  TOO_MANY_REQUESTS: 'Too many requests, please try again later',
  NOT_FOUND: 'Resource not found',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
