
# Exam System Backend - Hello World Lambda

This project demonstrates a basic AWS Lambda function integrated with API Gateway and a frontend application.

## Project Structure

```
lambda
├── functions
│   └── hello_world       # Hello World Lambda function
│       ├── lambda_function.py
│       └── requirements.txt
```

## Setup Instructions

### 1. Create the Hello World Lambda Function
1. Navigate to the `lambda/functions` directory:
   ```bash
   cd lambda/functions
   mkdir hello_world
   cd hello_world
   ```

2. Create the `lambda_function.py` file with the following content:
   ```python
   import json

   def lambda_handler(event, context):
       return {
           'statusCode': 200,
           'body': json.dumps('Hello, World! This is your Exam System backend.')
       }
   ```

3. Add a `requirements.txt` file if dependencies are needed (leave empty for this example).

4. Package the function into a ZIP file:
   ```bash
   zip -r hello_world.zip lambda_function.py
   ```

### 2. Deploy the Lambda Function
1. Log in to the AWS Management Console.
2. Go to **AWS Lambda** and click **Create Function** > **Author from scratch**.
3. Upload the `hello_world.zip` file as the function code.
4. Set the runtime to Python 3.9 (or your preferred version).

### 3. Expose the Function via API Gateway
1. Navigate to **API Gateway** and create a new HTTP API.
2. Add a `GET /helloworld` route and integrate it with the Lambda function.
3. Deploy the API and note the endpoint URL.

### 4. Handle CORS Issues
To avoid CORS errors when calling the API from the frontend:
1. **Enable CORS on API Gateway**:
   - Go to the API Gateway route settings.
   - Enable CORS with the following:
     - Allowed Origins: `*` (or `http://localhost:5173` for development).
     - Allowed Methods: `GET`.
     - Allowed Headers: `Content-Type`, `Authorization` (if needed).
   - Redeploy the API.

2. **Modify the Lambda Function Response**:
   Ensure the response includes the following headers:
   ```python
   'headers': {
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'GET',
       'Access-Control-Allow-Headers': 'Content-Type'
   }
   ```

3. **Test the API**:
   Use your frontend or tools like Postman to confirm the issue is resolved.

### 5. Frontend Integration
1. Create an API call function in your frontend project:
   ```javascript
   export async function fetchHelloWorld() {
       const response = await fetch('https://your-api-gateway-url/helloworld');
       const data = await response.json();
       return data;
   }
   ```

2. Use this function in a component to fetch and display the message.

### Notes
- **CORS Issue**: When integrating with the frontend, you may encounter a CORS policy error. Follow the steps above to configure API Gateway and the Lambda function to handle CORS properly.

## Testing
1. Call the API Gateway URL via browser, Postman, or cURL.
2. Ensure the response includes the correct CORS headers.

## Author
Em Ha Tuan
