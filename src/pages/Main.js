import React from 'react';
import { Link } from 'react-router-dom';
import '../stlye/Main.css';

const Main = () => {
    return (
        <div className='MainWrapper'>
            <div className='imgWrapper'><img src='https://w.namu.la/s/5eb5f6440b3d2d4f2ab8bac8955c0b91e1cb2b1c6b784f13fad36d426fff721976e4ab6e6902c2ba07b3d9b96bbc3cd70bbd2dfb2d2e100c954ce9cfaf5519fcb12197516adaeb487a57ba9a6fe32c482457360da594fb69617500888e310f96' /></div>
            <div className='link'><Link to='/lunch'><button className='checkLunch'>오늘의 점심 확인하기</button></Link></div>
        </div>
    );
};

export default Main;