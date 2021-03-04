import React from 'react';
import { BorderBox8, BorderBox7, Decoration3 } from '@jiaminghi/data-view-react';
import './index.css';

export default class Robat extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
           values : [
               {
                   name: '四自由度机器人',
                   location: 0.1,
                   speed: 2
               },
               {
                   name: '六自由度机器人',
                   location: 0.1,
                   speed: 2
               }
           ]
        }
    }

    componentDidMount(){
        var location = [0.08,0.09,0.095,0.098,0.1,0.105,0.11,0.114,0.12];
        var speed = [1.8,1.85,1.86,1.92,1.96,1.98,2,2.08,2.1,2.11,2.15,2.18,2.2];
        this.ticker = setInterval(() => {
            this.setState({
                values: [
                    {
                        name: '四自由度机器人',
                        location: location[Math.floor(Math.random()*location.length)],
                        speed: speed[Math.floor(Math.random()*speed.length)]
                    },
                    {
                        name: '六自由度机器人',
                        location: location[Math.floor(Math.random()*location.length)],
                        speed: speed[Math.floor(Math.random()*speed.length)]
                    }
                ]
            })
        },5000);
    }
    
    componentWillMount(){
        clearInterval(this.ticker);
    }

    render(){
        return(
          <BorderBox8>
            {
                this.state.values.map((item,index) => {
                    return <SingleMachine
                            key={index} 
                            name={item.name} 
                            pic={index}
                            location={item.location}
                            speed={item.speed}
                            />
                })
            }
          </BorderBox8>
        )
    }
}

class SingleMachine extends React.PureComponent {
    render(){
        return(
           <BorderBox7>
              <div className='robat-content'>
                  <div className='img'>
                      <div className={this.props.pic === 0 ? 'img-src src1' : 'img-src src2'}></div>
                      <div className='img-title'>{this.props.name}</div>
                  </div>
                  <div className='value'>
                      <Decoration3 style={{width: '250px', height: '30px'}} />
                      <div>
                         <span className='info-name'>位置误差率：</span>
                         <span className='info-value'>{this.props.location}%</span>
                      </div>
                      <div>
                         <span className='info-name'>速度误差率：</span>
                         <span className='info-value'>{this.props.speed}%</span>
                      </div>
                  </div>
              </div>
           </BorderBox7>
        )
    }
}