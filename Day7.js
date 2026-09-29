const http=require('http')
const server=http.createServer((req,res)=>{
    res.write('hello');
})
server.listen(8000,()=>{
    console.log('server is running on port 8000');
})