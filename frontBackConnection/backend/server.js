import express from 'express'

const app=express()

// app.get("/",(req,res)=>{
//     res.send('server is rrady');
// })

app.get('/api/jokes',(req,res)=>{
    const jokes =[{
        id:1,
        title:'a joke',
        content:'this is a joke'
    },
    {
        id:2,
        title:'another joke',
        content:'this is another joke'

    },
    {
        id:3,
        title:'3rd joke',
        content:'this is 3rd joke'

    },
    {
        id:4,
        title:'4th joke',
        content:'this is 4th joke'

    },
    {
        id:5,
        title:'5th joke',
        content:'this is 5th joke'

    }
];
res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Servr at http://localhost:${port}`);
});