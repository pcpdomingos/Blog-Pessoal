//Action: Ação enviada para ser armazenada no Store
export type Action = {type: "ADD_TOKEN"; payload: string};//passando tipo da ação e informação

export const addToken = (token: string): Action =>({ 
    type: "ADD_TOKEN",//enviado para o reducer
    payload: token,
});