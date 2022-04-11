import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { useParams } from 'react-router-dom';
import { useGetCoinPriceHistoryQuery } from '../../../../rtkApi/api';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
const CoinHistoryPrice:React.FC<{timePeriod:string}> = ({timePeriod}) => {
    const {id} =useParams()
    //@ts-ignore
const {data ,error,isLoading}=useGetCoinPriceHistoryQuery({id,timePeriod})
   const historyPrice=[]
   const coinTimestamp = [];
  if(data){
      const history=data?.data?.history
      for(let i=0;i<history.length;i++){
        coinTimestamp.push(new Date(history[i].timestamp).toLocaleDateString());
        historyPrice.push(history[i].price)
      }  
  }
  const dataLine = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: historyPrice,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    elements: {
        point: {
          radius: 1,
        },
      }
  };
    return (
        <>
            { isLoading ? <h1>Loading...</h1>:
                data &&   <Line data={dataLine} options={options} />
            }
        </>
    );
};

export default CoinHistoryPrice;