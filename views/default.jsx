// constant which imports React module
const React = require('react')

//stub function with html parameter
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                (html.children)
            </body>
        </html>
    )
}

//exports Def function
module.exports = Def