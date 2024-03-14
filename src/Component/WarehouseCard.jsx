import React from 'react'

function WarehouseCard({warehouse}) {
  
  return (
    <>
    
    <div className="card" key={warehouse.id}>
      <img src={warehouse.goodownImage} className="card-img-top" alt={warehouse.goodownId} width={100} height={300} />
      <div className="card-body">
        
        <p className="card-text">Goodown ID: {warehouse.goodownId}</p>
        <p className="card-text">Location: {warehouse.location}</p>
      </div>
    </div>
  
    </>
  )
}

export default WarehouseCard
