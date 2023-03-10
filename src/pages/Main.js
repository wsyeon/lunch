import React from 'react';
import { Link } from 'react-router-dom';
import '../stlye/Main.css';
import mainLogo from '../image/\ ewuhs.png';

const Main = () => {
    return (
        <div className='MainWrapper'>
            <div className='imgWrapper'><img src={mainLogo} alt='이대부고 로고'/></div>
            <div className='link'><Link to='/lunch'><button className='checkLunch'>오늘의 점심 확인하기</button></Link></div>
        </div>
    );
};

export default Main;