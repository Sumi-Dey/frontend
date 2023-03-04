import React from 'react';
import './ExploredCities.css';
import Tajcover from '../../assets/Tajcover.png';
import Charminar from '../../assets/Charminar.png';
import Dudhsagar from '../../assets/Dudhsagar.png';
import Goldentemple from '../../assets/Goldentemple.png';
import HawaMahal from '../../assets/HawaMahal.png';
import Kanchanjangha from '../../assets/Kanchanjangha.png';
import Lalbaghimg from '../../assets/Lalbaghimg.png';

const ExploredCities = () => {
    return (
        <div className='explore'>
            <div><img src={Tajcover} className='exploreCoverImg' alt='...' />
                <div className='expolreCoverText'>Explore the Places with us</div>
            </div>
            <div className='exploredCities'>
                <div>
                    <a href='https://en.wikipedia.org/wiki/Charminar' target="_blank" rel="noopener noreferrer"><img src={Charminar} alt='...' className='charminar' /></a>
                    <div>Charminar in Hyderabad</div>
                </div>
                <div>
                    <a target="_blank" href='https://en.wikipedia.org/wiki/Dudhsagar_Falls' rel="noopener noreferrer"><img src={Dudhsagar} className='dudhsagar' alt='...' /></a>
                    <div>Dudhsagar Falls in Goa</div>
                </div>
                <div>
                    <a target="_blank" href='https://en.wikipedia.org/wiki/Golden_Temple' rel="noopener noreferrer"><img src={Goldentemple} className='goldtemp' alt='...' /></a>
                    <div>Golden Temple in Amritsar,Punjab</div>
                </div>
                <div>
                    <a target="_blank" href='https://en.wikipedia.org/wiki/Hawa_Mahal' rel="noopener noreferrer"><img src={HawaMahal} className='hawamahal' alt='...' /></a>
                    <div> Hawamahal in Jaipur</div>
                </div>
                <div>
                    <a target="_blank" href='https://en.wikipedia.org/wiki/Kanchanjangha' rel="noopener noreferrer"><img src={Kanchanjangha} className='kanchanjangha' alt='...' /></a>
                    <div>Kanchanjangha in Darjeeling</div>
                </div>
                <div>
                    <a target="_blank" href='https://en.wikipedia.org/wiki/Lal_Bagh' rel="noopener noreferrer"><img src={Lalbaghimg} className='lalbagh' alt='...' /></a>
                    <div>Lalbagh in Bangalore</div>
                </div>
            </div>
        </div>
    )
}

export default ExploredCities
