//Store: Armazena as informações
import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokensReduce';

const store = createStore(tokenReducer);//gerenciado passasando o reducer como parametro para o createStore

export default store;