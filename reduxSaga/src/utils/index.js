const delay2 =ms => new Promise(
    resolve=>setTimeout(() => {
        resolve()
    },ms)
)


export{
    delay2
}