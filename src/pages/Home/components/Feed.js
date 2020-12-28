import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard'

const useStyles = makeStyles((theme) => ({
    root: {

    }
}))


const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            username: 'lucasnhimi',
            avatar: '/img/avatars/avatar_1.jpeg'
        },
        title: "Criando um App do zero utilizando React.js",
        date: "April 7, 2020",
        description: 'Fala pessoal! Qual o framework favorito de vocês?',
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "img/posts/post9.jpeg"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            username: 'lucasnhimi',
            avatar: 'img/avatars/avatar_1.jpeg'
        },
        title: "Comparativo entre React.js e Vue.js - Peformance",
        date: "April 1, 2020",
        description: 'Quero criar um bootcamp gratuito para passar um pouco da minha experiência para vocês! Quem topa?!',
        hashtags: "#framework, #javascript, #reactjs, #vue",
        image: "img/posts/post8.png"
    }
]



function Feed(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                // TODO  faz a mesma coisa que na NavBar
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default Feed;