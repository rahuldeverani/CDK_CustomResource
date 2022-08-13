#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Custom12Stack } from '../lib/custom12-stack';

const app = new cdk.App();
new Custom12Stack(app, 'Custom12Stack');
