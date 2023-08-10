import React from 'react'
import CakeCard from '../../components/CakeCard/CakeCard'

export default function CakesPage({cakes}) {
  return (
    <>
      <div className="cards-box">
        {cakes.map((cake, idx) => {
          return <CakeCard key={cake.id} cake={cake} idx={idx} />;
        })}
      </div>
    </>
  )
}
