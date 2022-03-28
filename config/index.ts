export enum ENV {
  DEV = 'dev',
  PROD = 'prod',
  TEST = 'test',
}

export const APP_PORT: string = process.env.APP_PORT || '3000';
export const BASE_URL: string = process.env.BASE_URL || 'http://localhost:3000';
export const APP_ENV = (process.env.NODE_ENV || process.env.APP_ENV) as ENV;
