    // const getJson = url => fetch(url).then(res => res.json());

    // getJson('/i/1.json')
    // .then(json => {
    //     if (json.key) {
    //         return getJson('/i/2.json')
    //     }
    //     throw new Error('No key')
    // })
    // .then(json => {
    //     return json.key2
    // })
    // .catch(error => {
    //     console.error(error)
    // })


    async function getJson (url) {
        const result = await fetch(url);
        return result.json();
    }

    const resultFirstJson = await getJson('/i/1.json');
    let finalResult;
    try {
        if (!resultFirstJson.key) {
            throw new Error('No key')
        }
        const resultSecond = await getJson('/i/2.json');
        finalResult = resultSecond.key2;
    }
        catch (error) {
            console.log(error);
    }


    //////////////////////

        let count = 0;

    const getData = () => Promise.resolve(++count)
    const sleep = (n) => new Promise(resolve => setTimeout(resolve, n))

    function memoize(fn, time) {
        let cache = {};

        return async function() {
            const args = JSON.stringify(arguments);
            cache[args] = cache[args] || fn.apply(undefined, arguments);

            if(Object.keys(cache).length != 0) {
                setTimeout(() => {
                    cache = {};
                }, time);
            }
            return cache[args]
        }
    }

    const memoizedGetSomeData = memoize(getData, 1000);


    async function App () {
        await memoizedGetSomeData();
        await memoizedGetSomeData();
        await sleep(3000);
        await memoizedGetSomeData();
    }

    App();


    //////////////////////








