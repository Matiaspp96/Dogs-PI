import React from 'react'
import { getDetailDog } from '../redux/actions'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';
import Loading from './Loading';
import s from './styless/Detail.module.css'

export default function Detail() {
    const dog = useSelector(state => state.dogDetail[0]);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    const {id} = useParams();
    const location = useLocation()
    const history = useHistory();

    if(id.length < 4  && location.pathname.includes('dogs/')){
      document.body.onkeydown = function(e){
        // alert(String.fromCharCode(e.keyCode)+" --> "+e.keyCode);
        if(e.keyCode === 37 && Number(id) > 1){
          history.push(`/dogs/${Number(id) - 1}`)
        } else if(e.keyCode === 39 && Number(id) < 264){
          history.push(`/dogs/${Number(id) + 1}`)
        }
      };
    }

    useEffect(() => {
        dispatch(getDetailDog(id))
    }, [dispatch, id])

    
        return (
    <div>
      <Header />
      <Link to='/dogs' className={s.btn_back}>Back</Link>
      <div className={s.container}>
        <div className={s.blur}>
          {id < 2 || filter.length > 0 ? null :
          <Link to={`/dogs/${Number(id) - 1}`} className={s.btn_backDog}></Link>
          }
      {!dog ? <Loading/> : 
          <div className={s.detail}>
            <div className={s.info}>
            <span className={s.name}>
              <svg className={s.footPrint}></svg>
              <p className={s.h3}>{dog.name.split(" ").splice(0,2).join(" ")}</p>
            </span>
            <span className={s.name}>
              <svg className={s.height}></svg>
              <p className={s.p}>Height: {dog.height_max}cm  - {dog.height_min}cm</p>
            </span>
            <span className={s.name}>
              <svg className={s.weight}></svg>
              <p className={s.p}>Weight: {dog.weight_max}kg - {dog.weight_min}kg</p>
            </span>
            <span className={s.name}>
              <svg className={s.heart}></svg>
              <p className={s.p}>Life Span: {dog.life_span}</p>
            </span>
            <span className={s.name}>
              <svg className={s.bone}></svg>
              <p className={s.p}>Temperaments: </p>
            </span>
            <p className={s.p}>{dog.createdInDB ? dog.temperaments.map(e => e.temperament).join(", "):
            dog.temperament}</p>
            </div>
            <img className={s.image} src={dog.image} alt={dog.name} />
          </div>
          }
          {id > 263 || filter.length > 0 ? null :
          <Link to={`/dogs/${Number(id) + 1}`} className={s.btn_nextDog}></Link>
          }
        </div>
      </div>
    </div>
  )
}
