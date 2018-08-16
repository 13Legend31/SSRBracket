import {
    UPDATE_TEAMS,
    UPDATE_IS_BRACKET_UP_TO_DATE,
    UPDATE_SINGLE_ELIMINATION_DATA,
    UPDATE_BEST_OF_SINGLE,
    UPDATE_ROUND_ROBIN_DATA, 
    UPDATE_ROUND_ROBIN_SCOREBOARD, 
    UPDATE_BEST_OF_ROUND_ROBIN
} from '../Constants/Types'

const WriteToCache = (store) => (next) => (action) => {
    const { type, payload } = action
    if (type === UPDATE_TEAMS) {
        const teams = JSON.stringify(payload[type])
        sessionStorage.setItem(type, teams)
    } else if (type === UPDATE_IS_BRACKET_UP_TO_DATE) {
        const isBracketUpToDate = JSON.stringify(payload[type])
        sessionStorage.setItem(type, isBracketUpToDate)
    } else if (type === UPDATE_SINGLE_ELIMINATION_DATA) {
        const singleEliminationData = JSON.stringify(payload[type])
        sessionStorage.setItem(type, singleEliminationData)
    } else if (type === UPDATE_BEST_OF_SINGLE) {
        const bestOfSingle = JSON.stringify(payload[type])
        sessionStorage.setItem(type, bestOfSingle)
    } else if (type === UPDATE_ROUND_ROBIN_DATA) {
        const roundRobinData = JSON.stringify(payload[type])
        sessionStorage.setItem(type, roundRobinData)
    } else if (type === UPDATE_ROUND_ROBIN_SCOREBOARD) {
        const roundRobinScoreboard = JSON.stringify(payload[type])
        sessionStorage.setItem(type, roundRobinScoreboard)
    } else if (type === UPDATE_BEST_OF_ROUND_ROBIN) {
        const bestOfRoundRobin = JSON.stringify(payload[type])
        sessionStorage.setItem(type, bestOfRoundRobin)
    } 
    
    
    
    else {
        sessionStorage.setItem(type, payload[type])
    }

    next(action)
}

export default WriteToCache