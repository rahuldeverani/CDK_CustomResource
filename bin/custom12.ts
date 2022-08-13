#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyStack } from '../lib/custom12-stack';

const env ={account :'1xxxxxxx' , region: 'us-east-1'}
const app = new cdk.App();
new MyStack(app, 'Customstack' ,{env:env});
