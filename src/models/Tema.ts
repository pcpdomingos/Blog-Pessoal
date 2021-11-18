
interface Tema{
    id: number;
    nome: string;
    descricao: string;
    tema?: Tema| null
}

export default Tema;