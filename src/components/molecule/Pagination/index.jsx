import React from 'react'

export const Pagination = ({ prev, next, onPrevious, onNext }) => {

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {
                    prev ?
                        <li className=' page-item'>
                            <button className='page-link' onClick={onPrevious} >Previous</button>
                        </li>
                        : null
                }
                {
                    next ?
                        <li className=' page-item'>
                            <button className='page-link' onClick={onNext}> Next</button>
                        </li>
                        : null
                }
            </ul>
        </nav >
    )
}

