import React, { Component } from "react"




class Timer extends Component {
    constructor(props) {

        super(props)
        this.state = {
            count: 0,
            cond: false
        }



        setInterval(() => {
            this.state.cond &&
                this.setState({ count: (this.state.count + 1000) })
        }, 1000)

    }
    start = () => {
        (this.state.cond === false) ?
            this.setState({
                cond: true
            }) :
            this.setState({
                cond: false
            })
    }
    reset = () => {
        
            this.setState({
                count: 0,
                cond: false 
            })
    }
    render() {
        const { count } = this.state
        let seconds = Math.floor((count / 1000) % 60)
        let minutes = Math.floor((count / (1000 * 60)) % 60)
        let hours = Math.floor((count / (1000 * 60 * 60)) % 24)


        return (

            <div className='counter'>
                <h2>TIMER</h2>
                <h1> {hours.toString().padStart(2, '0')}: {minutes.toString().padStart(2, '0')}: {seconds.toString().padStart(2, '0')}</h1>
        <button className='startStyle' onClick={this.start} >{this.state.cond? 'Pause':'Start'}</button>
                <button className='resetStyle' onClick={this.reset}>Reset</button>

            </div>
        )
    }

}
export default Timer
