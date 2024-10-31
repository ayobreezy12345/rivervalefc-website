import React from 'react';
import Header from './header';

const App = () => {
    return (
        <div>
            <Header />
            <section id="about" style={{ height: '600px', padding: '20px' }}>About Section</section>
            <section id="menu" style={{ height: '600px', padding: '20px' }}>Menu Section</section>
            <section id="contact" style={{ height: '600px', padding: '20px' }}>Contact Section</section>
        </div>
    );
};

export default App;