import React, { useEffect } from 'react';
import './Home.css';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReduce';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabpostagens/TabPostagem';
import { toast } from 'react-toastify';

function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(//useSelector acessa o store para pegar o token e atribuir a constante "token"
        (state) => state.tokens//
    );

    useEffect(() => {
        if (token == "") {//identifica se o token está vazio, caso esteja envia o alerta abaixo e redireciona para o login, caso contrário segue o processo
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])
    return (
        <div style={{ minHeight: "90vh", marginTop: "10px" }} className="corBackground">
            <Grid container>
                <Grid item xs={6} style={{ minHeight: "90vh", }}>
                    <Box display="flex" alignItems="center" sx={{ width: '100%', minHeight: '90vh' }}>
                        <Box p={3} >
                            <Box display="flex" justifyContent="center" className="colorLetras">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }} >
                                    Bem vinde ao meu blog!
                                </Typography>
                                <Box marginRight={1} justifyContent='center'>
                                <ModalPostagem />
                            </Box>
                            </Box>
                            <Box>
                                <Grid xs={12} className='postagens'>
                                    <TabPostagem />
                                </Grid>

                            </Box>

                        </Box>

                    </Box>

                </Grid>
                <Grid item xs={6} style={{ minHeight: "90vh" }}>

                    <img src="https://i.imgur.com/QRZosza.png" alt="" style={{ width: "100%" }} />
                </Grid>

            </Grid>

        </div>
    );
}

export default Home;