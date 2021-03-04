import React from 'react';
import { FullScreenContainer, BorderBox1, Decoration5, Decoration8 } from '@jiaminghi/data-view-react';
import { ClockCircleOutlined } from '@ant-design/icons';
import ShopInformation from '../components/shopInformation.js';
import Machine from '../components/machine.js';
import Robat from '../components/robat';
import Yeild from '../components/yeild';
import moment from 'moment';
import './index.css';

export default class Whole extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        };
    }

    componentDidMount(){
        this.ticker = setInterval(this.tick,1000);
    }
    
    componentWillMount(){
        clearInterval(this.ticker);
    }

    tick = () => {
        this.setState({
          time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        }) 
    }

    render() {
        return (
            <FullScreenContainer className='datashow'>
                <BorderBox1 className='border-1'>
                    <div className='data-title'>
                        <div className='title-style'>
                            <Decoration5 className='title-decor'></Decoration5>
                            <div className='title-flex'>
                                <Decoration8 className='title-decoration' />
                                <div className='title-font'>高倍智能装备有限公司1号车间远程运维界面</div>
                                <Decoration8 reverse={true} className='title-decoration' />
                            </div>
                            {
                                this.state.time &&
                                <div className='title-time'>
                                    <ClockCircleOutlined style={{ 'fontSize': '22px', 'marginRight': '20px' }} />
                                    <span>当前时间：{this.state.time}</span>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='data-content'>
                       <ShopInformation/>
                       <Machine/>
                       <Robat/>
                       <Yeild/>
                    </div>
                </BorderBox1>
            </FullScreenContainer>
        )
    }
}