const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var cors = require('cors')

app.use(cors());

//test api
app.get('/category/list', (req, res) => {
    console.log('[req]['+new Date()+'] /category/list')
    const data = [
        {name:'채용', id:0},
        {name:'타임라인', id:1},
        {name:'컴컴시스템', id:2},
        {name:'카페 라운지', id:3},
        {name:'IT 엔지니어', id:4},
        {name:'토픽', id:5},
        {name:'부동산', id:6},
        {name:'주식', id:7},
    ]
    setTimeout(()=>{
        res.send(data)
    }, 1000)
})

const boardData = [
    {cid:0, id:1, cname:'채용', title:'시니어 개발자를 채용합니다.', group:'채용팀', nick:'메리메리', time:new Date('2022-02-02 02:45:01').getTime(), view:0, reply:0, good:0},
    {cid:1, id:2, cname:'타임라인', title:'이거 나만 그러나', group:'컨플루언스', nick:'해피', time:new Date('2022-01-01 11:22:11').getTime(), view:12, reply:2, good:10},
    {cid:1, id:22, cname:'타임라인', title:'타임라인에 글입니다', group:'Blinded', nick:'왓섭', time:new Date('2022-01-01 11:22:11').getTime(), view:12, reply:2, good:2},
    {cid:2, id:3, cname:'컴컴시스템', title:'컴컴시스템 연봉은??', group:'사성전자', nick:'IIIIII', time:new Date('2021-07-01 23:22:11').getTime(), view:22, reply:1, good:0},
    {cid:3, id:4, cname:'카페 라운지', title:'카페의 미래가 어둡다', group:'카페23', nick:'컴컴', time:new Date('2021-02-01 09:22:11').getTime(), view:8, reply:23, good:123},
    {cid:4, id:5, cname:'IT 엔지니어', title:'현X오X에X 금융직무 근무지', group:'H팀', nick:'ㅁㄴㄴㄴ', time:new Date('2020-05-01 12:22:11').getTime(), view:12302, reply:20, good:0},
    {cid:5, id:6, cname:'토픽', title:'반도체 과장급 연말정산 연봉이 얼마정도여?', group:'반도췌', nick:'vasss', time:new Date('2020-02-01 01:22:11').getTime(), view:330, reply:12, good:0},
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
    }, 1000)
})

const boardItems = [
    {id:1, content:'시니어가 있는지 모르겠네???\n한번 지원해보쇼~~'},
]

app.get('/board/detail', (req, res) => {

    console.log('[req]['+new Date()+'] /board/detail', req.query)

    const id = req.query.id
    
    let result = boardItems.filter(item=>{
        if(item.id == id){
            return true
        }
    })
    
    setTimeout(()=>{
        res.send(result && result[0]?result[0]:null)
    }, 1000)

})