//Reducer: Receber a ação e o estado atual do componente(atualiza)
import {Action } from './actions';//importação do type action

export interface TokenState {//criando uma model chamada "TokenState"
    tokens: string//propriedade
}

const initialState = {//indicando o estado inicial do token que é vazio
    tokens: ""
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{//método//dois parametros: state(recebe o token vazio), action(faz a ação de mudança)
    switch (action.type){//olha o tipo da ação
        case "ADD_TOKEN": {//caso o tipo seja "ADD_TOKEN"
            return {tokens: action.payload}//token recebe a ação
        }

        default://caso não seja
            return state//retorna o estado vazio
    }
}