async function start() {
    return await Promise.resolve('async is working')
}
start().then(console.log)

import("lodash").then(({ default: _ }) => { console.log("Lodash\t", _.random(0, 27, true)); });
