import React from 'react';
import { BorderBox9 , BorderBox6, Decoration9} from '@jiaminghi/data-view-react';
import './index.css';

export default class Machine extends React.PureComponent{
    constructor(props){
       super(props);
       this.state = {
           values: [
               {name: '摇臂钻床',value: 36, bad: 1 },
               {name: '钻铣床',value: 33, bad: 0 },
               {name: '金属带锯床',value: 37, bad: 1 },
               {name: '数控车床',value: 35, bad: 2 }
           ]
       };
    }

    render(){
       return(
           <BorderBox9>
              {
                  this.state.values.map((item,index) => {
                    return <Single key={index} data={item}/>
                  })
              }
           </BorderBox9>
       );
    }
}

class Single extends React.PureComponent {
    render(){
       return(
           <BorderBox6>
              <div className='title'> {this.props.data.name} </div>
              <div className='content'>
                <div className='content-single'>
                    <span className='info-name'>产量：</span>
                    <span className='info-value'>{this.props.data.value}</span>
                    <span className='info-name'>个</span>
                </div>
                <div className='content-single'>
                    <span className='info-name'>次品数：</span>
                    <span className='info-value'>{this.props.data.bad}</span>
                    <span className='info-name'>个</span>
                </div>
              </div>
              <div className='water'>
                <Decoration9>
                    <span>
                       {(((this.props.data.value - this.props.data.bad)/this.props.data.value)*100).toFixed(2)}%
                    </span>
                </Decoration9>
              </div>
           </BorderBox6>
       )
    }
}