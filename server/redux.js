import { combineReducers } from 'redux'

import { TournamentNameReducer } from '../src/Redux/Info/TournamentName'
import { TournamentFormatReducer } from '../src/Redux/Info/TournamentFormat'
import { TeamsReducer } from '../src/Redux/Info/Teams'
import { IsBracketUpToDateReducer } from '../src/Redux/Bracket/IsBracketUpToDate'
import { SingleEliminationDataReducer } from '../src/Redux/Bracket/Single/SingleEliminationData'
import { BestOfSingleReducer } from '../src/Redux/Bracket/Single/BestOfSingle'
import { RoundRobinDataReducer } from '../src/Redux/Bracket/RoundRobin/RoundRobinData'
import { RoundRobinScoreBoardReducer } from '../src/Redux/Bracket/RoundRobin/RoundRobinScoreBoard'
import { BestOfRoundRobinReducer } from '../src/Redux/Bracket/RoundRobin/BestOfRoundRobin'

const allReducers = combineReducers({
    tournamentName: TournamentNameReducer,
    tournamentFormat: TournamentFormatReducer,
    teams: TeamsReducer,
    isBracketUpToDate: IsBracketUpToDateReducer,
    singleEliminationData: SingleEliminationDataReducer,
    bestOfSingle:BestOfSingleReducer,
    roundRobinData: RoundRobinDataReducer,
    roundRobinScoreBoard: RoundRobinScoreBoardReducer,
    bestOfRoundRobin: BestOfRoundRobinReducer
})

const theStore = {
    tournamentName:'',
    tournamentFormat:'Single Elimination',
    teams:{
        teamsList:[
            '',
            ''
        ],
        remaining:254
    },
    isBracketUpToDate: false,
    singleEliminationData:[],
    bestOfSingle:[],
    roundRobinData:[],
    roundRobinScoreBoard:{},
    bestOfRoundRobin:[]
}

export { allReducers, theStore }