const { getGifs } = require("../../helpers/getGifs");

describe('Prueba con getGifs Fetch', ()=>{

    test('Debe de traer 10 elementos', async()=>{
        const gif = await getGifs('Goku',10);
        expect(gif.length).toBe(10);
    });

    test('Debe de traer 0 elementos', async()=>{
        const gif = await getGifs('',10);
        expect(gif.length).toBe(0);
    });

});