import cdk = require('aws-cdk-lib');
import { MyCustomResource } from './my-custom-resource';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2'
import * as ec2 from 'aws-cdk-lib/aws-ec2'
/**
 * A stack that sets up MyCustomResource and shows how to get an attribute from it
 */
export class MyStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc= ec2.Vpc.fromLookup(this , 'myvpc' , {vpcName: "ECS deployment-test1 - VPC"})
    const lb = new elbv2.ApplicationLoadBalancer(this, 'lb', { vpc });

    const resource = new MyCustomResource(this, 'DemoResource', {
      message: 'CustomResource says hello',
      albDns: lb.loadBalancerDnsName
    });

    new cdk.CfnOutput(this, 'ResponseMessage', {
      description: 'The message that came back from the Custom Resource',
      value: resource.response
    });
    // Publish the custom resource output
  
  }
}

