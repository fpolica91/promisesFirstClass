

// DOING IT USING PROMISES AND THREE SEPARATE FUNCTION VARIABLES
const func1 = function () {
    return new Promise((res, rej) => {
        res('I am trying to')
    })
}

const func2 = function (data) {
    return new Promise((res, rej) => {
        res(`${data} to catch my breath`)
    })
}

const func3 = function (data) {
    return new Promise((res, rej) => {
        res(`${data} because I am old `)
    })
}


// FIRST FUNCTION IS CALLED, PASSES ITS VALUE TO FUNC2 VIA DATA
// PROCESS REPEATS FOR FUNC3 WHICH NOW CONTAINS DATA FROM FUNC1,FUNC2
// LAST STEP DATA, CONTAINS ALL 3 VALS FUNC1 ,FUNC2,FUNC3
func1()
    .then(data => func2(data))
    .then(data => func3(data))
    .then(data => console.log(data))



// THIS CAN REPLACE THE FUNCTION ABOVE!
Promise.all([func1(), func2(), func3()])
    .then((vals) => {
        console.log(vals.join(" "))
    })



//USING A SINGLE FUNCTION TO CREATE THE MESSAGE 
function createString(string) {
    return new Promise((res, rej) => {
        res(string)
    })
}

Promise.all([
    createString('hello'),
    createString('Stranger,')
]).then(vals => console.log(vals.join(" ")))






//THIS USES A METHOD USING PROMISE.ALLL 

const messageOne = new Promise((res, rej) => {
    res('Waiting to')
})
const messageTwo = new Promise((res, rej) => {
    res('catch the')
})

const messageThree = new Promise((res, rej) => {
    res('bus to go home')
})

Promise.all([messageOne, messageTwo, messageThree])
    .then((vals) => {
        console.log(vals.toString())
    })





// LASTLY USING AWAIT AND ASYNC


function sport() {
    return new Promise(res => res('Football'))
}

function action() {
    return new Promise(res => res('Is the king'))
}
function ofWhat() {
    return new Promise(res => res('of all sports'))
}

async function finalMessage() {
    const a = await sport()
    const b = await action()
    const c = await ofWhat()

    console.log(`${a} ${b} ${c}`)
}


// USING PROMISES.ALL
async function oneMessagforAll() {
    const [a, b, c] = await Promise.all([sport(), action(), ofWhat()])
    console.log(`${a} ${b} ${c}`)
}

finalMessage()
oneMessagforAll()