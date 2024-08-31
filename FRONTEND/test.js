import axios from "axios";
const email = 'Iamganesh@gmail.com';
const password = 'Lakshmiji';
async function hi(){
    try {
        const response = await axios.post('http:localhost:3000/api/v1/student/login', {
            email,
            password
        });
        console.log(response);
        if (response.status === 200) {
            console.log(response.data.token);
            // localStorage.setItem('token', response.data.token);
            // navigate('/StudentDashboard');
        } else {
            // alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error during login:', error);
        // alert('An error occurred during login. Please try again later.');
    }
}

hi();
