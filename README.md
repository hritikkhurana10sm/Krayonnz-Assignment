# Krayonnz-Assignment
Online Quiz Micro Service API ( Using NodeJs, ExpressJs, MongoDB)

<u>

## List of all quizzes:
<ul>
<li>In Postman, select the "GET" method and enter the URL http://localhost:3000/api/v1/quizzes.</li>
<li>Click on "Send" button, you will receive a JSON response containing a list of all the quizzes in the database.</li>
</ul>
<img src = "https://user-images.githubusercontent.com/56023805/212543860-e66b3f2c-9db0-438b-a6d0-9de5dd745126.JPG" width="1000" height="500">

## Create Quiz
<ul>
<li>In Postman, select the "POST" method and enter the URL http://localhost:3000/api/v1/quizzes.</li>
<li>Select "Body" tab and set it to raw JSON, and enter the title, description, and questions for the quiz in the request body.</li>
<li>Click on "Send" button, you will receive a JSON response containing the details of the quiz created.</li>
</ul>
<img src = "https://user-images.githubusercontent.com/56023805/212545743-b026e52c-c798-4503-8ca3-47628d779fe0.JPG" width="1000" height="500">

## Single Quiz Detail
<ul>
<li>In Postman, select the "GET" method and enter the URL http://localhost:3000/api/v1/quizzes/:id, where :id is the id of the quiz you want to retrieve.</li>
<li>Click on "Send" button, you will receive a JSON response containing the details of the quiz with the specified id.</li>
</ul>
<img src = "https://user-images.githubusercontent.com/56023805/212546037-cd998d0e-7098-4bad-bb33-8821966baea8.JPG" width="1000" height="500">

## Participate in Quiz
<ul>
<li>In Postman, select the "POST" method and enter the URL http://localhost:3000/api/v1/quizzes/:id/participate, where :id is the id of the quiz you want to participate in.</li>
<li>Select "Body" tab and set it to raw JSON, and enter the details of the participant in the request body.</li>
<li>Click on "Send" button, you will receive a JSON response containing the details of the quiz with the new participant added.</li>
</ul>
<img src = "https://user-images.githubusercontent.com/56023805/212546121-49565a39-050f-4bdb-a18c-a71f478e0d02.JPG" width="1000" height="500">
