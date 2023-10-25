import {Component} from 'react'
import { GrFormPrevious } from "react-icons/gr";


class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }


  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    const goBack = () => {
      window.history.back();
    };

    return (
      <>
      <GrFormPrevious
      onClick={goBack}
      className="lg:text-[60px] text-[40px] m-4"
    /> 
      <div className='mt-24' >
        <div className='flex justify-center mx-4' >
          <p className='text-[48px]'>Stopwatch</p>
        </div>
<br />
        <div className='flex justify-center mx-4'>
              {/* <p>Timer </p> */}
            <br />
            < p className='text-[48px]'>{time}</p>
          </div>

<br />
        <div className='flex justify-center mx-8' >
              <button className="hover:text-[#fff565] bg-[#9ffc41]  hover:scale-105 duration-150 rounded-[10px] justify-center p-4 mx-4"
                type="button"
               
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>

              <button className="hover:text-[#fff565] bg-[#9ffc41]  hover:scale-105 duration-150 rounded-[10px] justify-center p-4 mx-4"
                type="button"
                
                onClick={this.onStopTimer}
              >
                Stop
              </button >

              <button className="hover:text-[#fff565] bg-[#9ffc41]  hover:scale-105 duration-150 rounded-[10px] justify-center p-4 mx-4"
                type="button"
                
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
      </div>
      </>
    ) 
  }
}

export default Stopwatch