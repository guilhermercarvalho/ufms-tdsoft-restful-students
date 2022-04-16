import { Request, Response } from 'express';
import { Controller } from 'presentation/contracts';

export const expressAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request = {
      body: req.body || {},
      params: req.params || {},
      query: req.query || {}
    };
    const httpResponse = await controller.handle(request);
    res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
