import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReduce';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(//useSelector acessa o store para pegar o token e atribuir a constante "token"
    (state) => state.tokens//
  );
  let history = useHistory();
  const dispatch = useDispatch();//envia token

  function goLogout() {
    dispatch(addToken(''));//caso o token esteja vazio
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });//alerta
    history.push('/login')//direciona para a página de login
  }

  var navbarComponent;//importante criar a variavel para ser usada no return apos o "if" dentro do "return"
  if (token != "") {//se houver um token renderiza a navbar
    navbarComponent = <AppBar className="colorAppBar" position="static">
      <Toolbar>
        <Box>
          <Typography variant="h6">
            BlogPessoal
          </Typography>
        </Box>

        <Box ml="auto" className="colorBottom">

          <Link to='/Home' className='text-decorator-none'>
            <Button className="colorText">Home</Button>
          </Link>

          <Link to='/posts' className='text-decorator-none'>
            <Button className="colorText">Postagens</Button>
          </Link>

          <Link to='/temas' className='text-decorator-none'>
            <Button className="colorText">Temas</Button>
          </Link>

          <Link to="/formularioTema" className="text-decorator-none">
            <Button className="colorText">Cadastrar temas</Button>
          </Link>

          <Link to='/Login' className='text-decorator-none' onClick={goLogout}>
            <Button className="colorText">Logout</Button>
          </Link>

        </Box>

      </Toolbar>
    </AppBar>
  }
  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;