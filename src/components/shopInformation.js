import React from 'react';
import { BorderBox13, Decoration6 } from '@jiaminghi/data-view-react';
import './index.css';

export default class ShopInformation extends React.PureComponent {
    constructor(props){
        super(props);
        this.state={
            machineInformation: [
                { name: '复合材料成品编织总长度', value: 5000, unit: 'mm' },
                { name: '碳纤维总使用量', value: 3000, unit: 'mm' },
                { name: '主电机速度', value: 0.16, unit: 'rad/s' },
                { name: '编织机器人速度', value: 4, unit: 'mm/s' },
                { name: '预成型件编织角', value: 45, unit: '°' }
            ],
            values: [5000, 3000, 0.16, 4, 45]
        }
    }

    componentDidMount(){
        this.ticker = setInterval(this.tick,5000);
    }
    
    componentWillMount(){
        clearInterval(this.ticker);
    }

    tick = () => {
        var newValues = [];
        var value = [
            [0.14, 0.144, 0.146, 0.15, 0.152, 0.155, 0.156, 0.16, 0.162, 0.163, 0.166, 0.168, 0.171, 0.172, 0.175],
            [3.2, 3.3, 3.4, 3.6, 3.8, 3.96, 4, 4.1, 4.12, 4.36, 4.53, 4.68, 4.69, 4.81, 4.91],
            [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
        ]
        for(let i = 0; i < 5; i++){
            if(i < 2){
                newValues.push(this.state.values[i] + Math.floor(Math.random()*10));
            } else{
                newValues.push(value[i-2][Math.floor(Math.random()*(value[i-2].length))]);
            }
        }
        this.setState({values: newValues})
    }

    render(){
        return(
            <BorderBox13>
                <div style={{margin: '20px 40px'}}> 
                    <span className='mac-title'>主要生产数据 </span>
                    <Decoration6 style={{width: '300px', height: '30px'}} />
                </div>
                <div className='mac-info'>
                   {
                       this.state.machineInformation.map((item,index)=>{
                           return (
                               <div key={index} className='info'>
                                   <span className='info-name'>{item.name}：</span>
                                   <span className='info-value'>{this.state.values[index]}</span>
                                   <span className='info-name'>{item.unit}</span>
                               </div>
                           )
                       })
                   }
                </div>

            </BorderBox13>
        );   
    }
}