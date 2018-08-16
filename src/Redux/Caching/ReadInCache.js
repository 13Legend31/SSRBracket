import { TournamentNameAction } from '../Info/TournamentName'
import { TournamentFormatAction } from '../Info/TournamentFormat'
import { TeamsAction } from '../Info/Teams'
import { SingleEliminationDataAction } from '../Bracket/Single/SingleEliminationData'
import { BestOfSingleAction } from '../Bracket/Single/BestOfSingle'
import { RoundRobinDataAction } from '../Bracket/RoundRobin/RoundRobinData'
import { RoundRobinScoreBoardAction } from '../Bracket/RoundRobin/RoundRobinScoreBoard'
import { BestOfRoundRobinAction } from '../Bracket/RoundRobin/BestOfRoundRobin'
import { IsBracketUpToDateAction } from '../Bracket/IsBracketUpToDate'


function ReadInCache(store) {
    //string
    const tournamentName = sessionStorage.getItem('tournamentName')
    if (tournamentName) {
        store.dispatch(TournamentNameAction(tournamentName))
    }

    //string
    const tournamentFormat = sessionStorage.getItem('tournamentFormat')
    if (tournamentFormat) {
        store.dispatch(TournamentFormatAction(tournamentFormat))
    }

    //object
    let teams = sessionStorage.getItem('teams')
    if (teams) {
        teams = JSON.parse(teams)
        store.dispatch(TeamsAction(teams))
    }

    //array
    let singleEliminationData = sessionStorage.getItem('singleEliminationData')
    if (singleEliminationData) {
        singleEliminationData = JSON.parse(singleEliminationData)
        store.dispatch(SingleEliminationDataAction(singleEliminationData))
    }

    //array
    let bestOfSingle = sessionStorage.getItem('bestOfSingle')
    if (bestOfSingle) {
        bestOfSingle = JSON.parse(bestOfSingle)
        store.dispatch(BestOfSingleAction(bestOfSingle))
    }

    //array
    let roundRobinData = sessionStorage.getItem('roundRobinData')
    if (roundRobinData) {
        roundRobinData = JSON.parse(roundRobinData)
        store.dispatch(RoundRobinDataAction(roundRobinData))
    }

    //object
    let roundRobinScoreBoard = sessionStorage.getItem('roundRobinScoreBoard')
    if (roundRobinScoreBoard) {
        roundRobinScoreBoard = JSON.parse(roundRobinScoreBoard)
        store.dispatch(RoundRobinScoreBoardAction(roundRobinScoreBoard))
    }

    //array
    let bestOfRoundRobin = sessionStorage.getItem('bestOfRoundRobin')
    if (bestOfRoundRobin) {
        bestOfRoundRobin = JSON.parse(bestOfRoundRobin)
        store.dispatch(BestOfRoundRobinAction(bestOfRoundRobin))
    }

    //boolean
    let IsBracketUpToDate = sessionStorage.getItem('isBracketUpToDate')
    if (IsBracketUpToDate) {
        IsBracketUpToDate = JSON.parse(IsBracketUpToDate)
        store.dispatch(IsBracketUpToDateAction(IsBracketUpToDate))
    }
}

export default ReadInCache