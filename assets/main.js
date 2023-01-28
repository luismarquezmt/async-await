const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCOaO3pT1bpM-N_hBrvtPy4w&part=snippet%2Cid&order=date&maxResults=50"

const content = null || document.getElementById('content')



const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7cd35443bamsh4efdf76964d9f0fp14cfd6jsnecec3f3cbc3c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fecthData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const videos = await fecthData(API)
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
        <div
         class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
         <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
         <h3 class="text-sm text-gray-700">
         <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank"><span aria-hidden="true" class="absolute inset-0"></span></a>
           ${video.snippet.title}
         </h3>
        </div>
       </div>
        `).slice(3, 11).join('')}    
     `
        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
})()

