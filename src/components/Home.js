import React from 'react'

const Home = props => {
    return (
        <div className="home">
            <h1>Welcome to the Home Page</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Aut laudantium adipisci non at eum est numquam labore 
                facere fugit. Tenetur quod fuga corrupti illum nam 
                ipsum eos sint explicabo nobis.
            </p>
            <button onClick={ () => props.history.push('/blog') }>Blogs</button>
        </div>
    );
};

export default Home