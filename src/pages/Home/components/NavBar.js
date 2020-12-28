import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ListItem, ListItemText, ListSubheader } from '@material-ui/core';

// usando arrow functions passa o tema direto na props, todas as props do tema da biblioteca material-ui, pode ser usada como padrao
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2), // por padrao o padding do tema é 8px, esse 2 é muitiplicado por 8 que da os 16
        width: 275,
        marginRight: theme.spacing(2),
    },
    button: {
        width: '100%',
    }
}));

const tags = [
    { id: 1, name: 'reactjs' },
    { id: 2, name: 'javascript' },
    { id: 3, name: 'dotnet' },
    { id: 4, name: 'php' },
    { id: 5, name: 'materialdesign' },
    { id: 6, name: 'webdev' },
]


// const useStyles = makeStyles({
//     root: {
//         padding: 16,
//         width: 275,
//     }
// });


function NavBar(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Grátis</Button>
            <ListSubheader>{'Tags em alta'}</ListSubheader>
            {
                tags.map((item) => (
                    // navega no array de objetos e vai renderizando com as tags abaixo do materail-ui
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }

            <ListItem button>Exibir mais tags</ListItem>
        </Paper>
    );
}

export default NavBar;