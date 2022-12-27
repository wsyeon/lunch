import React, { useEffect, useState } from 'react';
import api from '../dinner.json';
import '../stlye/dinner.css'
import { useNavigate } from 'react-router-dom';

const Lunch = () => {
  const date = new Date();
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [lunchNull, setLunchNull] = useState();
  const [clicks, setClicks] = useState(false);
  const [clicks2, setClicks2] = useState(false);
  const navigate = useNavigate();
  const time = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate() - 1}`;
  // console.log(api[rand].DDISH_NM);

  useEffect(()=>{
    setData(api);
  }, []);
  const click = ()=> {
    const resutl = data.filter(datas=> datas.MLSV_YMD === time);
    if (resutl.length === 0) {
      setLunchNull(null);
    } else if (resutl !== 0) {
      setInfo(resutl[0].DDISH_NM.split(""));
    }
    setClicks(true);
    setClicks2(true);
  };
  const loading = ()=> {
    const infos = info.filter(infoss=> infoss !== " " && infoss !== '(' && infoss !== 'b' &&infoss !== 'r' && infoss !== '/' && infoss !== '<' & infoss !== '>' && infoss !== '.' && infoss !== '0' && infoss !== '1' && infoss !== '2' && infoss !== '3' && infoss !== '4' && infoss !== '5' && infoss !== '6' && infoss !== '7' && infoss !== '8' && infoss !== '9');
    const infos_result = infos.join("");
    const final_result = infos_result.split(')');
    setDinner(final_result.filter(info=> info !== ''));
    setClicks(false);
  };
  const goMain = ()=> {
    navigate('/');
  };

  return (
    <div className='lunchWrapper'>
      <div className='lunchMenu'>
        {lunchNull !== null ? (
          <div className='dinnerWrapper'>
            {dinner.map((item, index)=> (
              <ul className='dinner' key={index}>
                <li>{item}</li>
              </ul>
            ))}
          </div>
        ) : (
          <span>오늘은 급식이 업성요</span>
        )}
      </div>
      <div className='lunchBtn'>
        <button onClick={click} className={clicks2 ? 'no' : 'yes'}>급식 불러오기</button>
        <button onClick={loading} className={clicks ? 'yes' : 'no'}>급식 확인하기</button>
        <button className='yes' onClick={goMain}>홈으로</button>
      </div>
    </div>
  );
};

export default Lunch;