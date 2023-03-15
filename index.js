function receivesAFunction(postWorkoutRoutine){
    postWorkoutRoutine()
    return `Today's post workout routine is ${postWorkoutRoutine}!`
}
const postWorkoutRoutine = `Pumping iron`

function returnsANamedFunction (){
    return message;
}
const message = () => {
    `Today's post workout routine is ${postWorkoutRoutine}!`}

const anonymous = function(){
}
function returnsAnAnonymousFunction (){
    return anonymous;
}