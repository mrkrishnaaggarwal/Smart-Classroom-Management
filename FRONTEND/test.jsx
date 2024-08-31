import axios from "axios";
import {useState,useEffect} from 'react';
const email = 'Iamganesh@gmail.com';
const password = 'Lakshmiji';
    export const func = () => {
        const [userData, setUserData] = useState(null);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get("http://localhost:3000/api/v1/student/myprofile", {
                        headers : {
                            Authorization : "Bearer "+ localStorage.getItem(token);
                        }
                    });
                    setUserData(response.data);
                } catch (e) {
                    setError('Error fetching user data');
                    console.error(e);
                }
            };})
            return (<></>)}


