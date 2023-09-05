import { Chart } from "chart.js";
import { useEffect } from "react";

const Graph = ({porcentajes}) => {

    useEffect(() => {
    
      const pie = document.getElementById('pie-chart').getContext('2d');

      new Chart(pie, {
        type: 'pie',
        data: {
          labels: ['Masa grasa', 'Masa osea', 'Masa residual', 'Masa muscular'],
          datasets: [{
            label: '%',
            data: [...porcentajes],
            borderWidth: 1,
            borderColor: '#FFFFFF',
            backgroundColor: ['#c8b6ff','#b8c0ff','#bbd0ff',]
          },]
        },
        options: {
          plugins: {
            legend: {
                position: 'top',
              },
              title:  {display: true,
              text: 'Porcentajes de masa',}
          },
          responsive: true,
        }
      });
  
    }, [])
    

    

  return (
    <div className="w-1/2">
        <canvas id="pie-chart"></canvas>
    </div>
  )
}

export default Graph