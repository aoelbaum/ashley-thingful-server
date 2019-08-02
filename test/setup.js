process.env.TZ = 'UTC';
process.env.NODE_ENV = 'test';
process.env.JWT_Secret = 'test-jwt-secret';
process.env.JWT_EXPIRY = '3m';

require('dotenv').config();
const { expect } = require('chai');
const supertest = require('supertest');

global.expect = expect;
global.supertest = supertest;
