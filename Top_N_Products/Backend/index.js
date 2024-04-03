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
    "accessCode": "kJtfKH"
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
        "clientID": "7305038a-6849-4d82-8399-b8a309608e3e",
        "clientSecret": "LVoAkTWSjrtiLWiW",
        "ownerName": "Abhishek",
        "ownerEmail": "ajadaun883@gmail.com",
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
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTU5NzI5LCJpYXQiOjE3MTIxNTk0MjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjczMDUwMzhhLTY4NDktNGQ4Mi04Mzk5LWI4YTMwOTYwOGUzZSIsInN1YiI6ImFqYWRhdW44ODNAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNULUFiaGlzaGVrIiwiY2xpZW50SUQiOiI3MzA1MDM4YS02ODQ5LTRkODItODM5OS1iOGEzMDk2MDhlM2UiLCJjbGllbnRTZWNyZXQiOiJMVm9Ba1RXU2pydGlMV2lXIiwib3duZXJOYW1lIjoiQWJoaXNoZWsiLCJvd25lckVtYWlsIjoiYWphZGF1bjg4M0BnbWFpbC5jb20iLCJyb2xsTm8iOiJSQTIxMTEwMzEwMTAwMjMifQ.7QNA9KagMO8HCzy1esfDL4m4sViMQsylA_vyzT0H76c';


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