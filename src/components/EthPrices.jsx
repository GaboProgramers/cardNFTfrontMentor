import React from 'react'

const EthPrices = () => {
    return (
        <div className='ethPrice'>
            <div className="eth__content">
                <div className="eth__description">
                    <p className='eth__price'>
                        <span className='eth__svg'>
                            <img src="icon-ethereum.svg" alt="ethereum" />
                        </span>
                        0.041 ETH
                    </p>
                </div>

                <div className="eth__date">
                    <span className='eth__clock'>
                        <img src="icon-clock.svg" alt="clock" />
                    </span>
                    <p className="date">
                        3 days left
                    </p>
                </div>
            </div>

            <div className="line"></div>

            <div className="avatarCard">
                <div className='avatar__img'>
                    <img src="image-avatar.png" alt="avatar" />
                </div>

                <div className="avatar__description">
                    <p className="avatar__paragraph">
                        <span className='avatar__creating'>Creation of</span>
                        Jules Wyvern
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EthPrices