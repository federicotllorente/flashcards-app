import React from 'react';

const Home = () => {
    return (
        <div className="homepage">
            <h1>Welcome back, FirstName!</h1>
            <div className="homepage__reminder">
                <h2>Reminder</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, incidunt?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, quisquam?</p>
            </div>
            <h2>Your statistics this week</h2>
            <div className="homepage__stats">
                <div className="homepage__stats__scroll">
                    <div className="homepage__stats__card">
                        <h3>Cards seen</h3>
                        <span>10</span>
                    </div>
                    <div className="homepage__stats__card">
                        <h3>Correct cards</h3>
                        <span>6</span>
                    </div>
                    <div className="homepage__stats__card">
                        <h3>Incorrect cards</h3>
                        <span>4</span>
                    </div>
                </div>
            </div>
            <h2>Your statistics this month</h2>
            <div className="homepage__stats">
                <div className="homepage__stats__scroll">
                    <div className="homepage__stats__card">
                        <h3>Cards seen</h3>
                        <span>10</span>
                    </div>
                    <div className="homepage__stats__card">
                        <h3>Correct cards</h3>
                        <span>6</span>
                    </div>
                    <div className="homepage__stats__card">
                        <h3>Incorrect cards</h3>
                        <span>4</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;