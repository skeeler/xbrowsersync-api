import * as express from 'express';
import * as path from 'path';
import BaseRouter, { IApiRouter } from '../routers/base.router';

// Implementation of routes for API documentation
export default class DocsRouter extends BaseRouter<void> implements IApiRouter {
  // Initialises the routes for this router implementation
  public initRoutes(): void {
    this.app.use('/', express.static(path.join(__dirname, '../docs')));
  }
}