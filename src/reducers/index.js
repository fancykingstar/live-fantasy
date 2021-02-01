import authReducer from './authReducer'
import CardGameReducer from './cardGameReducer'
import landingPageReducer from './landingPageReducer'
import powerPokerReducer from './powerPokerReducer'
import powerRoyalsReducer from './powerRoyalsGameReducer'

export const reducers = {
    cardGame: CardGameReducer,
    powerRoyals: powerRoyalsReducer,
    powerPoker: powerPokerReducer,
    auth: authReducer,
    landingPage: landingPageReducer,
}