import React, { useEffect, useState } from 'react';
import api from '../dinner.json';
import '../dinner.css'
import { useNavigate } from 'react-router-dom';

const Lunch = () => {
  const date = new Date();
  const [data, setData] = useState([]);
  const [info, setInfo] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [clicks, setClicks] = useState(false);
  const navigate = useNavigate();
  const time = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate() - 1}`;
  // console.log(api[rand].DDISH_NM);

  useEffect(()=>{
    setData(api);
  }, []);
  const click = ()=> {
    const resutl = data.filter(datas=> datas.MLSV_YMD === time);
    setInfo(resutl[0].DDISH_NM.split(""));
    setClicks(true);
  };
  const loading = ()=> {
    const infos = info.filter(infoss=> infoss !== " " && infoss !== '(' && infoss !== 'b' &&infoss !== 'r' && infoss !== '/' && infoss !== '<' & infoss !== '>' && infoss !== '.' && infoss !== '0' && infoss !== '1' && infoss !== '2' && infoss !== '3' && infoss !== '4' && infoss !== '5' && infoss !== '6' && infoss !== '7' && infoss !== '8' && infoss !== '9');
    const infos_result = infos.join("");
    console.log(infos_result.split(')'));
    const final_result = infos_result.split(')');
    setDinner(final_result.filter(info=> info !== ''));
    setClicks(false);
  };
  const goMain = ()=> {
    navigate('/');
  };

  return (
    <div>
      <button onClick={click}>급식 불러오기</button>
      <button onClick={loading} className={clicks ? 'yes' : 'no'}>급식 확인하기</button>
      {dinner.map((item, index)=> (
        <ul className='dinner' key={index}>
          <li>{item}</li>
        </ul>
      ))}
      <button onClick={goMain}>홈으로</button>
    </div>
  );
};

export default Lunch;