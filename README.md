TO START NODE.JS APP

Step 1: npm install
Step 2: npm start

LIST OF APIS:

BASE_URL : localhost:3000

- Authorization token required in this no. of apis(3,4,5);

- LOGIN and REGISTER apis will return access_token which can be used in all others api for Authorization and also can be used in websocket to access chatroom.

1. POST /api/register IN REQ BODY PASS (name,username,password)
2. POST /api/login IN REQ BODY PASS (username,password)
3. GET /api/users 
4. GET /api/messages 
5. POST /api/message IN REQ BODY PASS (message)

----------------------------------------------------------------------------------------------------------

- Authorization token is required in headers to access websocket(chatroom)

WEBSOCKET URL IS : localhost:3000

----------------------------------------------------------------------------------------------------------

- TO TEST CHATROOM FIRST START APP and THEN GET TOKEN FROM REGISTER OR LOGIN API and USE THAT TOKEN IN EXTERNAL/client.js file after run client.js file