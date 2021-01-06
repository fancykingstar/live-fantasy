import React from 'react';
import './BingoInProgressGame.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import clockimage from '../../assets/StopWatchIcon@2x.png';
import lotteryImage from '../../assets/lotteryImg@2x.png';
import ReverseTimer from '../../components/ReverseTimer/ReverseTimer';
import BingoGame2 from '../../components/BingoGame2/BingoGame2';
import BingoGame from '../../components/BingoGame/BingoGame';
import PowerPlays from '../../components/PowerPlays/PowerPlays';

const BingoInProgressGame = props => {
    return (
        <div className='__BingoInProgressGame __BingoGame'>
            <Header isStick={true} />
            <div className='__flex-stretch __main __container'>
                <div className='__main-left __mt-5 __ml-5'>
                    <div className='__title __bold __h2'>Bingo</div>
                    <div className='__hide-on-large'>
                        <div className='__mt-1'><span className='__h3'>Win <span className='__primary-color'>$2000 </span></span><span className='__h6'>CAD</span></div>
                        <Link to='/' className='__uppercase __primary-color __see-contesy-rules __inline-block __mt-1 __mb-6 __light-bold'>SEE CONTEST RULES</Link>
                        <div className='__h4'>In Play</div>
                        <div className='__primary __progress-bar __mb-2' style={{ width: '26%' }}></div>
                    </div>
                    <div className='__timer-section __relative __center'>
                        <div className='__absolute __center'>
                            <div className='__mt-2'>Next number drawn in</div>
                            <ReverseTimer className='__ml-a __mr-a __mt-1' />
                            <div className='__ball __h3 __primary-color __column __ai __flex-center __m-a __mb-1 __mt-1'>
                                <div>G</div>
                                <div>59</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='__main-center __mt-6 __ml-a __mr-a'>
                    <div className='__header __flex-stretch __relative'>
                        <div className='__mb-1 __hide-on-large'>
                            <div className='__light-bold'>Jackpot</div>
                            <div><span className='__h2 __bolder __primary-color'>$2000</span> <span>CAD</span></div>
                            <div className='__smaller'>
                                Odds of winning depend on
                                <div className='__light-bold'>Powerplay usage</div>
                            </div>
                        </div>
                        <div className='__border __hide-on-large'></div>
                        <div className='__live-draw-in-progress-section'>
                            <div className='__h6 __live-draw __light-bold __inline-block __mt-1 __smaller-on-mediam'>Live Draw in Progress</div>
                            <div className='__flex __mt-1 __live-draw-blog'>
                                <img src={clockimage} alt='' className='__in-progress-clock-image __mr-1 __hide-on-large' />
                                <div className='__smaller'>Pay attention, you will have 12 seconds <br className='__hide-on-large' /> to match each ball.</div>
                            </div>
                        </div>
                        <img alt='' src={lotteryImage} className='__absolute __lottery-image __hide-on-large' />
                    </div>
                    <BingoGame />
                </div>
                <PowerPlays />
            </div>
            <div className='__container'>
                <BingoGame2 />
            </div>
            <Footer isBlack={true} />
        </div>
    )
}

export default BingoInProgressGame;