const core = require('@actions/core');
const github = require('@actions/github');

try{
    const nombre = core.getInput('persona');
    console.log("Hola " + nombre)
    const time = (new Date()).toTimeString();
    core.setOutput('tiempo', time);

    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`La Payload: ${payload}`);
}catch(error){
    core.setFailed(error.message);
}