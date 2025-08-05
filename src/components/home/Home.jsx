import './Home.css';

function Home(){
    return(
        <>
            <div className="home">
                <div className="logo">
                    <img src="/illusion.png" alt="logo" srcset="/illusion.png" />
                </div>
                <div className="title">
                    <h1>Welcome , <br/> Mirage Studio</h1>
                </div>
                <div className="slogan">
                    <p><q><i>Where illusion comes alive</i></q></p>
                </div>
                <div className="explore">
                    <p>EXPLORE OUR WORLD</p>
                </div>
            </div>
        </>
    );
}

export default Home;