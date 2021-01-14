## Description

[Pull Request Description Here]

## Type of change

- [ ] Bug fix (non-breaking change that fixes an issue)
- [ ] New feature (non-breaking change that adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)

## Related issues

> `Fix [#1]()`

## Adding Rate Limits

To prevent future HackerOne reports saying we need to put rate limits in object creation, DIY!

- [ ] Add rate limits (Default is 20 points per 1 minute for objects)

Studio Routes: [Code Example](https://github.com/trycourier/backend/blob/676f1199cac452c906972e88189547416675e744/studio/notifications/index.ts#L144) | [Middleware](https://github.com/trycourier/backend/blob/master/lib/middleware/rate-limit.ts#L1)

API Endpoints: [Code Example](https://github.com/trycourier/backend/blob/3886860cb678fe9c52484609523a0b343e055009/api/events/handler.ts#L11) | [Proxy](https://github.com/trycourier/backend/blob/e672044afde1ec1bebf39560f448199748abcdb6/lib/rate-limit-proxy.ts#L21)

## Creating new CloudFormation Resources

When creating new CloudFormation resources, ensure that you've taken the necessary steps to properly configure all aspects of the resource. A checklist for relevant resource types can be found below.

You may skip this section if you are not adding new CloudFormation resources or the resource type is not listed below.

### DynamoDB Tables

- [ ] Point-in-time recovery has been enabled.
- [ ] Vanta tags have been added for #compliance purposes

[Example CloudFormation](aws-cloud-formation/dynamodb/.example.yml)

### Kinesis

- [ ] Stream is encrypted with auto-rotating KMS key.

[Example CloudFormation](aws-cloud-formation/kinesis/.example.yml)

### S3

- [ ] Buckets are encrypted with server-side encryption (`AES256` should be used).
- [ ] Buckets have an explicit policy that denies public access. If any bucket should be publicly accessible, please explain why in the Pull Request.
- [ ] Buckets have versioning enabled.
- [ ] Vanta tags have been added for #compliance purposes

[Example CloudFormation](aws-cloud-formation/s3/.example.yml)

### SQS

- [ ] Queues are encrypted with auto-rotating KMS key (`ref: AutoRotatedKmsKey`).
- [ ] Corresponding Dead-Letter Queues (DLQ) were added.
- [ ] A CloudWatch alarm for messages sitting in each added queue for longer than 5000 seconds has been created.
- [ ] A drain has been added for any DLQ that was added.
- [ ] Vanta tags have been added for #compliance purposes

[Example CloudFormation](aws-cloud-formation/sqs/.example.yml)
