# aws_lambda_emailer
Emails from AWS Lambda using posted data and SES

Post to this script from a rule or an endpoint with JSON: { "TO": "to@whomever.com", "SUBJECT": "Your subject", "MSG":"Message content" }

Requires:
- SES to be setup with the appropriate domain name settings in your DNS entries or in AWS
- Appropriate security group rules and access from external resources in AWS for execution 
