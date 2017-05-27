import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const {Types, Creators} = createActions({
    helloWorld: null
});

export const IpAddressTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
    ip: '',
    fetching: false
})

export const helloWorld = (state) => state.merge({ fetching: true }) 

export const reducer = createReducer(INITIAL_STATE,{
    [Types.HELLO_WORLD] : helloWorld
})

