import {React, useState, useEffect} from 'react'
import  * as cakesAPI from '../../utilities/cakes-api'; 
import ShowCakesForm from '../../components/ShowCakesForm/ShowCakesForm';

export default function CreatedCakePage({user}) {
    const [cakes, setCakes] = useState([]);
    // const userId = user
  
    const fetchCakes = async () => {
        try {
            const data = await cakesAPI.getAllCakes();
            setCakes(data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (cakes.length === 0) {
          fetchCakes();
        }
      }, [cakes, fetchCakes]);
    
      const handleDelete = async (cakeId) => {
        try {
          await cakesAPI.deleteCake(cakeId);
          setCakes(cakes.filter((cake) => cake._id !== cakeId));
        } catch (error) {
          console.error(error);
        }
      };
    //  console.log(cakes)
  return (
    <>
    
        {cakes.map((cake, t) => {
            let cakeId = cake._id
            return (
                <ShowCakesForm user={user}  cake={cake} cakeId={cakeId} key={t}  handleDelete={handleDelete} setcakes={setCakes}  cakes={cakes}/>
            )
        })}
       
    
    </>
    
  )
}





