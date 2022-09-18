import React from 'react'

export const Home = ({ episode = [] }) => {
    return (
        <div className='row'>{
            episode.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className='card' style = {{ minwidth : ' 200px'}}> 
                        <img src={item.image} alt='' />
                        <div className='card-body'>
                            <h5 className='card-title'> {item.name}</h5>
                            <hr />
                            <p>Species:{ item.species} </p>
                            <p>Gender:{ item.gender} </p>
                            <p>Status:{ item.status} </p>
                        </div>
                    </div>
                </div>
            ))
        }

        </div>
    )
}

