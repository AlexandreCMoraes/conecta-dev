import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Avatar, Button, FormHelperText, Link, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useNavigate } from 'react-router';
// import axios from '../../utils/axios';
import authService from '../../services/authService';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(img/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(1)
    },
    form: {
        margin: theme.spacing(2, 4)
    }
    /*
    left: {
        background: 'blue',
        flexBasis: '58%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    right: {
        background: 'yellow',
        flexBasis: '42%'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '64px 32px',
        alignItems: 'center',
    }
    */
}));

function Copyritght() {
    return (
        <Typography variant="body2" align="center">
            {'Copyright © '}
            <a color="inherit" href="https://www.youtube.com/watch?v=LGf2KJg20lg&t=252s">
                Lucas Nhimi
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

function SingIn() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();

    // function handleSignIn() {
    //     console.log('click')
    //     // chamada a api
    //     // se retorno ok, direciona para home
    //     // senao retorna msg para usuario

    //     axios.post('/api/home/login')
    //     .then(response => console.log(response))
    // }


    // outra forma usando await
    async function handleSignIn() {
        // console.log('click')
        // chamada a api
        // se retorno ok, direciona para home
        // senao retorna msg para usuario

        try {
            await authService.signIn(email, password);
            // 200
            navigate('/');


            // await axios.post('/api/home/login', { email: 'ale@ale.com.br', password: 'admina' });

        } catch (error) {
            console.log(error.response);
            setErrorMessage(error.response.data.message);
        }

        // console.log(response);
    }


    return (

        <Grid container className={classes.root}>

            <Grid item container direction="column" justify="center" alignItems="center" md={7} className={classes.image}>
                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(255, 255, 255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                 </Typography>
            </Grid>


            <Grid item md={5}>
                <Box display="flex" flexDirection="column" alignItems="center" marginTop={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">Acesso</Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}


                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={handleSignIn}>
                            Entrar
                        </Button>
                        {
                            errorMessage &&
                            <FormHelperText error>
                                {errorMessage}
                            </FormHelperText>
                        }
                        <Grid container>

                            <Grid item>
                                <Link>Esqueceu sua senha?</Link>
                            </Grid>

                            <Grid item>
                                <Link>Não tem uma conta? Registre-se</Link>
                            </Grid>

                        </Grid>
                    </form>
                    <Copyritght />
                </Box>
            </Grid>
        </Grid>

        // // Flex container
        // <div className={classes.root}>

        //     {/* Flex item container */}
        //     <div className={classes.left}>
        //         <Typography style={{ color: '#fff', fontSize: 23, lineHeight: '45px' }}>
        //             <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
        //         </Typography>
        //         <Typography variant="body2" style={{ color: 'rgb(255, 255, 255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
        //             Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
        //         </Typography>
        //     </div>

        //     {/* Flex item */}
        //     <div className={classes.right}>
        //         <form className={classes.form}>
        //             <h4>Acesso</h4>
        //             <input type="text" />
        //             <input type="text" />
        //         </form>
        //     </div>
        // </div >

    );
}

export default SingIn;