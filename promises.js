// this is an example of a promise. As a tip - if it is resolved, .then you will do a success action. If not resolved - then you will get a rejection with a message 

let p = new Promise((resolve, reject) => {
    let a = 1 + 2; 
    if( a === 2) {
        resolve('success')
    }else{
        reject(' Failed')
    }
})

p.then((message) => {
    console.log("This is is in the then" + message)
}).catch((error) => {
    console.log('this is in catch error' + error)
})


// another example

const userLeft = false
const userWatchingCatMeme = true

function watchTutorialPromise(){
    return new Promise((res, rej) => {
        if(userLeft){
            rej({
                name: 'User Left',
                message: ' bye-bye user'
            })
        } else if(userWatchingCatMeme) {
            rej({
                name: 'User Watching Cat Meme',
                message: 'cool cat'
            })
        } else{
            res('Thumbs and subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + '' + error.message)
})


// Running multiple promises at time

const recordVideoOne = new Promise((res, rej) => {
    res('video 1 recorded')
})

const recordVideoTwo = new Promise((res, rej) => {
    res('video 2 recorded')
})

const recordVideoThree = new Promise((res, rej) => {
    res('video 3 recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})

// will return as soon as one is completed 

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
})
