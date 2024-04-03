const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// send the request to register
app.post('/test/register', (req, res) => {

    console.log('Received data:', req.body);

    res.send('Data received successfully!');
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  // print the server is running
    console.log(`Server is running on port ${port}`);
});

// data to post
const postData ={
    "companyName": "SRMIST-Abhishek",
    "ownerName": "Abhishek",
    "rollNo": "RA2111031010023",
    "ownerEmail": "am3239@srmist.edu.in",
    "accessCode": "bntKpm"
    };


axios.post('http://20.244.56.144/test/register', postData)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    // authenticate data
    const authCompanyData ={
        "companyName": "SRMIST-Abhishek",
        "clientID": "21eb4371-b5a2-463d-a415-d54e6d6aa089",
        "clientSecret": "sqSLSwsOjBLkFJEv",
        "ownerName": "Abhishek",
        "ownerEmail": "am3239@srmist.edu.in",
        "rollNo": "RA2111031010023"
    }


axios.post('http://20.244.56.144/test/auth', authCompanyData)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });


    // authtoken that we received from the server
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU0OTI3LCJpYXQiOjE3MTIxNTQ2MjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjIxZWI0MzcxLWI1YTItNDYzZC1hNDE1LWQ1NGU2ZDZhYTA4OSIsInN1YiI6ImFtMzIzOUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNULUFiaGlzaGVrIiwiY2xpZW50SUQiOiIyMWViNDM3MS1iNWEyLTQ2M2QtYTQxNS1kNTRlNmQ2YWEwODkiLCJjbGllbnRTZWNyZXQiOiJzcVNMU3dzT2pCTGtGSkV2Iiwib3duZXJOYW1lIjoiQWJoaXNoZWsiLCJvd25lckVtYWlsIjoiYW0zMjM5QHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiJSQTIxMTEwMzEwMTAwMjMifQ.-1lpRDwI4-SQvRI5LtJZFMh2ztPkNxPwHh5aRMxiJ1c'


axios.get('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q',{
        headers: {
            'authorization': authToken,
          }
    })
      .then(response => {
        // Handle successful response
        console.log('Response data:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });


axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000',{
        headers: {
            'authorization': authToken,
          }
    })
      .then(response => {
        // Handle successful response
        console.log('Response data:', response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });