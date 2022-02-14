//import react and the def function from views.jsx
const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Future home of REST-Rants! Pardon our mess!</h1>
            </main>
        </Def>
    )
}

module.exports = home 