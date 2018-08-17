import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'

import SingleElimination from './Formats/SingleElimination/SingleElimination'
import RoundRobin from './Formats/RoundRobin/RoundRobin'

class TheBracket extends Component {
    constructor(props) {
        super(props)
        this.isMouseDown = false
        this.theBracket = null
        this.vectorX = null
        this.vectorY = null
        this.zoom = 100
    }

    MouseDown = (e) => {
        this.isMouseDown = true
        this.vectorX = e.clientX
        this.vectorY = e.clientY
    }

    Drag = (e) => {
        if (this.isMouseDown) {
            const scrollX = this.vectorX - e.clientX
            const scrollY = this.vectorY - e.clientY
            this.vectorX = e.clientX
            this.vectorY = e.clientY
            this.theBracket.scrollTop = this.theBracket.scrollTop + scrollY === 0 ? 0 : this.theBracket.scrollTop + scrollY
            this.theBracket.scrollLeft = this.theBracket.scrollLeft + scrollX === 0 ? 0 : this.theBracket.scrollLeft + scrollX
        }
    }

    MouseUp = (e) => {
        this.isMouseDown = false
    }

    componentDidMount = () => {
        this.theBracket = findDOMNode(this.refs['theBracket'])
    }

    render() {
        const { tournamentName, tournamentFormat } = this.props
        return (
            <section 
                className='bracketSection'
            >
                <h1 className='tournamentNameOnTopOfBracket'>{tournamentName}</h1>
                <h2 className='tournamentFormatOnTopOfBracket'>{tournamentFormat}</h2>
                <section 
                    className='theBracket'
                    ref='theBracket'
                    onMouseDown={this.MouseDown}
                    onMouseMove={this.Drag}
                    onMouseUp={this.MouseUp}
                    onMouseLeave={this.MouseUp}
                >
                    <div className='bracketTop'/>
                    <div className='bracketMid'>
                        <div className='bracketLeftSpace'/>
                        {tournamentFormat === 'Single Elimination' &&
                            <SingleElimination/>
                        }
                        {tournamentFormat === 'Round Robin' &&
                            <RoundRobin/>
                        }
                        <div className='bracketRightSpace'/>
                    </div>
                    <div className='bracketBottom'/>
                </section>
            </section>
        );
    }
}

const mapStateToProps = ({ tournamentName, tournamentFormat }) => ({
    tournamentName: tournamentName,
    tournamentFormat:tournamentFormat
})

export default connect(mapStateToProps)(TheBracket)