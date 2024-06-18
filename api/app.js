const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())

app.get('/', (req, res) => {

    res.json(
        [
            {
                "id": "1",
                "title": "Book Pokemno........."
            },
            {
                "id": "2",
                "title": "Book Pokemno ABS"
            },
            {
                "id": "3",
                "title": "Book Pokemno"
            },
            {
                "id": "4",
                "title": "Book Pokemno"
            }
        ]
    )
}
)
app.listen(4000, () =>{
    console.log('Listenin for requests on portr 4000')
})
