export type IHttpResponse<T = any> = {
  statusCode: number;
  data: T;
};

export const errorResponse = (error: Error): IHttpResponse => ({
  statusCode: 500,
  data: error.stack
});

export const successResponse = (data: any): IHttpResponse => ({
  statusCode: 200,
  data
});
