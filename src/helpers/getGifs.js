export const getGifs = async (category) =>{
    const resp   = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=100&api_key=LlK3FOYeTY24ARY87cme0200VTjSVO7a`);
    const { data } = await resp.json(); 
    let count = 1;
    const gifs = data.map(img =>{
        return {
            index: count++,
            id: img.id,
            title : img.title,
            url: img.images?.downsized_medium.url
        }
    });
    console.log(data);
    return gifs;
}