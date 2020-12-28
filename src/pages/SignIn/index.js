import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Avatar, Button, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(img/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(1)
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

function SingIn() {
    const classes = useStyles();
    return (

        <Grid container className={classes.root}>

            <Grid item container direction="column" justify="center" alignItems="center" md={7} className={classes.image}>
                <Typography style={{ color: '#fff', fontSize: 23, lineHeight: '45px' }}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant="body2" style={{ color: 'rgb(255, 255, 255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                 </Typography>
            </Grid>


            <Grid item md={5}>
                <Box display="flex" flexDirection="column" alignItems="center" margin={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">Acesso</Typography>
                    <form>
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
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}>
                            Entrar
                        </Button>
                        {/* parou no 2:23;08 */}
                    </form>
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