const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//test api
app.get('/category/list', (req, res) => {
    console.log('[req]['+new Date()+'] /category/list')
    const data = [
        {name:'채용', id:0},
        {name:'타임라인', id:1},
        {name:'한화시스템', id:2},
        {name:'방산 라운지', id:3},
        {name:'IT 엔지니어', id:4},
        {name:'토픽', id:5},
        {name:'부동산', id:6},
        {name:'주식', id:7},
    ]
    setTimeout(()=>{
        res.send(data)
    }, 2000)
})

const boardData = [
    {cid:0, title:'시니어 개발자를 채용합니다.'},
    {cid:1, title:'이거 나만 그러나'},
    {cid:2, title:'한화시스템 연봉은??'},
    {cid:3, title:'방산의 미래가 어둡다'},
    {cid:4, title:'현대오토에버 금융직무 근무지'},
    {cid:5, title:'삼전 반도체 과장급 연말정산 연봉이 얼마정도여?'},
]

app.get('/board/list', (req, res) => {
    
    console.log('[req]['+new Date()+'] /board/list', req.query)

    const type = req.query.inqType
    const id = req.query.id
    
    let result = []
    if(type == '1'){
        result = boardData.filter(item=>{
            if(item.cid == id){
                return true
            }
        })
    }else{
        result = boardData
    }

    setTimeout(()=>{
        res.send(result)
    }, 2000)
})