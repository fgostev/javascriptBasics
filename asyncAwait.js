// Async Await is syntactical sugar designed with the purpose of making promises easier to work with.


// Here is how the code will be with a Promise:


function makeRequest(location){
    return new Promise((res, rej) => {
        if(location == 'Google'){
            res('Google says hi')
        }else {
            rej('We can only talk to google')
        }
    })
}

function processRequest(response){
    return new Promise((res, rej) => {
        console.log('Processing response')
        res(`Extra Information + ${response}`)
    })
}

// here is the code below. Pay attention how need to chain the responses to use  both, specially the multiple use of then's

// makeRequest('Google').then((res) => {
//     console.log("success " + res)
//     return processRequest(res)
// })
//     .then(processedRes => {
//         console.log(processedRes);
//         }).catch((error) => {
//             console.log(error + "nope")
//         }) 



// Here is how it will be with Async AWait

// await says that the code should wait till the request is finished and then execute the next thing. 

async function doWork() {
    try{
    const response = await makeRequest('Google');
    console.log('Response received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    }   catch(err){
        console.log(err)
    }
}

doWork();

// overall the async await looks more like synchronous code, need to remember to wrap it in async function wrapper
