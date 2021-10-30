import React from 'react';
import { Radar } from 'react-chartjs-2';
import '../css/Profile.css'

function RadarChart(props) {
    const dataVal = [
                    props.Crossing, 
                    props.Finishing, 
                    props.HeadingAccuracy,
                    props.ShortPassing,
                    props.Volleys,
                ]
    return ( 
        <div className="radar-container">
            <Radar data={{
                labels: [
                    'Crossing',
                    'Finishing',
                    'Heading Accuracy',
                    'Short Passing',
                    'Volleys',
                ],
                datasets: [{
                    label: 'Stats',
                    data: dataVal,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointRadius: '6',
                    pointHitRadius: '2',
                    pointHoverBorderWidth: '2',
                    pointHoverRadius: '6',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }]
            }}
            
            options = {{
                elements: {
                  line: {
                    borderWidth: 3
                  }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
              }}

              
            />

        </div>
    );
}

export default RadarChart;