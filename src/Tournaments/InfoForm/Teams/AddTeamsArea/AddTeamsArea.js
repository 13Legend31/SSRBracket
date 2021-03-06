import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TeamsAction } from '../../../../Redux/Info/Teams'
import { IsBracketUpToDateAction } from '../../../../Redux/Bracket/IsBracketUpToDate'
import Input from './Input/Input'

class AddTeamsArea extends Component {
    constructor(props) {
        super(props)
        this.focus = 0
        this.inputs = [] // SET THIS IN COMPONENTDIDMOUNT, CHANGE THIS IN ADD/REMOVE TEAMS
    }

    componentDidMount = () => {
        document.getElementsByClassName('addTeamsArea')[0].addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                this.AddTeam(this.focus)
            } else if (e.keyCode === 8 && this.inputs[this.focus].value === '') {
                this.RemoveTeam(this.focus)
            } else if (e.keyCode === 38) {
                this.ChangeFocus(this.focus - 1)
            } else if (e.keyCode === 40) {
                this.ChangeFocus(this.focus + 1)
            }
        })

        this.inputs = document.getElementsByClassName('teamInput')
    }

    UpdateTeamName = (index, name) => {
        const teams = {...this.props.teams}
        teams.teamsList.splice(index, 1, name)
        this.props.UpdateTeams(teams)
        this.props.IsBracketUpToDate(false)
    }

    AddTeam = (index) => {
        const teams = {...this.props.teams}
        if (teams.remaining > 0) {
            teams.teamsList.splice(index + 1, 0, '')
            teams.remaining--
            this.inputs = document.getElementsByClassName('teamInput')
            this.props.UpdateTeams(teams)
            this.props.IsBracketUpToDate(false)
            this.ChangeFocus(index + 1)
        }        
    }

    RemoveTeam = (index) => {
        const teams = {...this.props.teams}
        if (teams.remaining < 254) {
            teams.teamsList.splice(index, 1)
            teams.remaining++
            this.inputs = document.getElementsByClassName('teamInput')
            this.props.UpdateTeams(teams)
            this.props.IsBracketUpToDate(false)
            this.ChangeFocus(index)
        }
    }

    ChangeFocus = (index) => {
        const length = this.props.teams.teamsList.length
        if (index === length) {
            index--
        } else if (index < 0) {
            index = 0
        }
        this.focus=index
        this.inputs[index].focus()
    }

    render() {
        const { teamsList } = this.props.teams
        return (
            <section className='addTeamsArea'>
                {teamsList.map((name, index) => (
                    <Input
                        key={index}
                        index={index}
                        value={name}
                        UpdateTeamName={this.UpdateTeamName}
                        RemoveTeam={this.RemoveTeam}
                        ChangeFocus={this.ChangeFocus}
                    />
                ))}
            </section>
        );
    }
}

const mapStateToProps = ({ teams }) => ({
    teams: teams
})

const mapActionsToProps = {
    UpdateTeams: TeamsAction,
    IsBracketUpToDate: IsBracketUpToDateAction,
}

export default connect(mapStateToProps, mapActionsToProps)(AddTeamsArea)