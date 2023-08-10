import React from 'react'
import TreatCard from '../../components/TreatCard/TreatCard';

export default function TreatsPage({treats}) {
  return (
    <>
    <div className="cards-box">
 {treats.map((treat) => {
   return <TreatCard  treat={treat} key={treat.id}  />;
 })}
</div>
   </>
  )
}
