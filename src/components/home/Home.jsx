import './Home.css';

function Home(){
    return(
        <>
            <div className="home">
                <div className="logo">
                    <img src="/illusion.png" alt="logo" srcset="/illusion.png" />
                </div>
                <div className="title">
                    <h1>Mirage Studio 2D</h1>
                </div>
                <div className="slogan">
                    <p>" <i>Where illusion comes alive in 2D.</i>"</p>
                </div>
                <div className="explore">
                    <p>EXPLORE OUR WORLD</p>
                </div>
            </div>
        </>
    );
}

export default Home;