import React, { useEffect } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Container, Typography } from '@material-ui/core';
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');

export default function Time(){
    const [time, setTime] = React.useState(moment().format('LLL'));
    const [count, setCount]= React.useState(1);

    useEffect(()=>{
        setTime(moment().format('LLL'));
    },[])

    useEffect(()=>{
        setTimeout(()=>{
          setTime(moment().format('LLL'));
          setCount(count+1);
        },1000);
      },[time,count]);
  return(
    <Typography>{time}</Typography>
  )
}
