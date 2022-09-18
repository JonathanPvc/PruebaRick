import React from 'react'

export const Episode = ({ episode = [] }) => {
    return (
        <div className='container'>
            <h1>hola aqui estoy </h1>


            <div className='row'>{
                episode.map((item, index) => (
                    <div key={index} className='col mb-4'>
                        <div className='card' style = {{ minwidth : ' 200px'}}> 
                            <img src={item.image} alt='' />
                            <div className='card-body'>
                                <h5 className='card-title'> {item.name}</h5>
                                <hr />
                        
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        </div>
    )
}
