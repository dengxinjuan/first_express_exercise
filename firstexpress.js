const express = require('express')
const app = express()
const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.get('/',(req,res)=>{
    res.send('Homepage')
})



app.get('/mean',(req,res)=>{

    if(!req.query.nums){
        throw new ExpressError('this is not a valid number',400)
    }

    let thisNums = req.query.nums.split(',')
    let nums = convertAndValidateNumsArray(thisNums)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }
    let response ={
        operations: "mean",
        value: findMean(nums)
        
    }
    console.log(req.query.nums)
    return res.send(response)

})




app.get('/median',(req,res)=>{

    if(!req.query.nums){
        throw new ExpressError('this is not a valid number',400)
    }

    let thisNums = req.query.nums.split(',')
    let nums = convertAndValidateNumsArray(thisNums)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }

      let response ={
        operations: "median",
        value: findMedian(nums)
        
    }
    console.log(req.query.nums)
    return res.send(response)

})


app.get('/mode',(req,res)=>{

    if(!req.query.nums){
        throw new ExpressError('this is not a valid number',400)
    }

    let thisNums = req.query.nums.split(',')
    let nums = convertAndValidateNumsArray(thisNums)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }

      let response ={
        operations: "mode",
        value: findMode(nums)
        
    }
    console.log(req.query.nums)
    return res.send(response)

})

app.get('/all',(req,res)=>{

    if(!req.query.nums){
        throw new ExpressError('this is not a valid number',400)
    }

    let thisNums = req.query.nums.split(',')
    let nums = convertAndValidateNumsArray(thisNums)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
      }

      let response ={
        operations: "all",
        mean: findMean(nums),
        median: findMedian(nums),
        mode: findMode(nums)
        
    }
    console.log(req.query.nums)
    return res.json(response)

})





app.listen(3000,function(){
    console.log('app on port 3000')
});

