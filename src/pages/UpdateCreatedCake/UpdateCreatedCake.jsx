import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import UpdateCreatedCakeForm from '../../components/UpdateCreatedCakeForm/UpdateCreatedCakeForm';
import * as cakesAPI from '../../utilities/cakes-api';

export default function UpdateCreatedCake({user}) {
    const [cakes, setCakes] = useState([]);


    const fetchCakes = async () => {
        try{ 
            const data = await cakesAPI.getAllCakes();
            setCakes(data);
        } catch (error) {
            console.log(error)
        }
    } 
    
    useEffect(() => {
        if (cakes.length === 0 ){
            fetchCakes();
        }

    }, [cakes, fetchCakes]);

    const cakeId = useParams();

  return (
    <>
    < UpdateCreatedCakeForm cakes={cakes} cakeId={cakeId} user={user} setCakes  />
    </>
  )
}
