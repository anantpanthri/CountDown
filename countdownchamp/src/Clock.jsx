import React, {Component} from 'react';
import './App.css';
class Clock extends Component{
  constructor(props){
    super(props);
    this.state={
      days:0,
      hours:0,
      min:0,
      sec:0
    }
    console.log('this.props',this.props.deadline);
  }

componentWillMount(props){
    this.getTimeUntil(this.props.deadline);
}
componentDidMount(){
  setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
}
  getTimeUntil(deadline){
    const time=Date.parse(deadline) - Date.parse(new Date());
    console.log(('time',time));
    const sec=Math.floor((time/1000)%60);
    const min=Math.floor((time/1000/60)%60);
    const hours=Math.floor((time/1000/3600)%24);
    const days=Math.floor(time/(1000*60*60*24));
console.log('days',days,'hour',hours,'min',min,'sec',sec);
    this.setState({days:days});
    this.setState({hours:hours});
    this.setState({min:min});
    this.setState({sec:sec});


  }

  render(){

    return(
    <div>
      <div className="Clock-days">{this.state.days}days</div>
      <div className="Clock-hours">{this.state.hours}hours</div>
      <div className="Clock-min">{this.state.min}min</div>
      <div className="Clock-sec">{this.state.sec}seconds</div>
    </div>
  )
  }


}
export default Clock;
