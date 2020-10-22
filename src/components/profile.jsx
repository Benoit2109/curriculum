import React from 'react';
import "./profile.css";


class Profile extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <section className='profile'>
                <img src="https://lh3.googleusercontent.com/a-/AOh14GgTqQe9ika_WHVEwu5riIPT4XvJI7LiQL9fjkbRVA=s192-c-rg-br100" alt="Benoit Le Bourdonnec"/>
                <h1 className='name'>Benoit LE BOURDONNEC</h1>
                <p>JS REACT</p>
                <p>NODE GIT HTML CSS</p>
                <img className="git" src="https://www.pngfind.com/pngs/m/176-1766942_our-github-repos-are-here-github-icon-hd.png" alt="github" href="https://github.com/Benoit2109?tab=repositories"/>
            </section>
            
        )
    }
}

export default Profile
