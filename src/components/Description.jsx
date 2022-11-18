import React from 'react'

const Description = () => {
    return (
        <div className='card'>
            <div className="card__img">
                <div className='sobrePosicion'><i class="fas fa-eye"></i></div>
                <img src="image-equilibrium.jpg" alt="Equilibrium" />
            </div>

            <div className="card__description">
                <h1 className='cart__title'>Equilibrium #3429</h1>

                <p className="card__paragraph">
                    Our Equilibrium collection promotes balance and calm.
                </p>
            </div>
        </div>
    )
}

export default Description