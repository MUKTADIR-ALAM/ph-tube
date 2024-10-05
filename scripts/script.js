function convertSeconds(seconds) {
    // Constants
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
    const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;
    const SECONDS_IN_MONTH = 30 * SECONDS_IN_DAY; // Approximation for a month

    // Calculate months, days, hours, minutes, and seconds
    const months = Math.floor(seconds / SECONDS_IN_MONTH);
    seconds %= SECONDS_IN_MONTH;
    const monthString = months+'mon';
    
    const days = Math.floor(seconds / SECONDS_IN_DAY);
    seconds %= SECONDS_IN_DAY;
    const dayString= days+'days';
    
    const hours = Math.floor(seconds / SECONDS_IN_HOUR);
    seconds %= SECONDS_IN_HOUR;
    const hourString = hours+'hrs'
    
    const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
    seconds %= SECONDS_IN_MINUTE;
    const minuteString = minutes+"min"
    const sec = seconds+'sec';

     return `${months==0?"":monthString} ${days==0?'':dayString} ${hours==0?'':hourString} ${minutes==0?'':minuteString} ${seconds==0?'':sec}`;
}







const loadCatagories = async() =>{
    const get = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
    const data = await get.json();
    displayCatagories(data.categories); 
}

const displayCatagories = (categories) =>{
    // console.log(categories);
    const categoryBtnDiv = document.getElementById('category-btn-div');
    categories.forEach( category => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.onclick= ()=>{loadVideosByCat(category.category_id);}
        btn.innerText = category.category
        categoryBtnDiv.appendChild(btn);
    });
}

loadCatagories();


const loadVideos = async () =>{
 const get = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
 const data = await get.json();
 displayVideos(data.videos);
}


const displayVideos = (videos) =>{
    const showVideos = document.getElementById('show-videos');
    videos.forEach((video)=>{
        // console.log(video);
        const verified = video.authors[0].verified;
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('card', 'card-compact', 'bg-base-100', 'shadow-xl');
        videoDiv.innerHTML = `
        <figure class="h-[200px] relative">
                  <img
                   class="h-full object-cover"
                    src="${video.thumbnail}"
                    alt="Shoes" />
                 ${video.others.posted_date?`<div class="absolute bottom-2 right-2 rounded p-1 bg-black text-white">${convertSeconds(video.others.posted_date)}</div>`:''}
                </figure>
                <div class="card-body">
                  <h2 class="card-title">Building a Winning UX Strategy Using the Kano Model</h2>
                  <p>Awlad Hossain ${verified?`<svg class="w-5 inline" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"   viewBox="0 0 30 30"
                    style="fill:#228BE6;">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.707,12.707l-7.56,7.56 c-0.188,0.188-0.442,0.293-0.707,0.293s-0.52-0.105-0.707-0.293l-3.453-3.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0 l2.746,2.746l6.853-6.853c0.391-0.391,1.023-0.391,1.414,0S22.098,12.316,21.707,12.707z"></path>
                    </svg>`:''}</p>
                  <p>91K views</p>
                </div>
        `;
        showVideos.appendChild(videoDiv);
    })



}
const loadVideosByCat = async(categoryId) =>{
    const showVideos = document.getElementById('show-videos')
    showVideos.innerHTML = '';
    const get = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`);
    const data = await get.json();
    if(data.category.length){

        displayVideos(data.category);
    }
    else{
        showVideos.innerHTML = `
            <div class="col-span-4 flex flex-col gap-8 items-center justify-center mt-5">
                <img src="./assets/Icon.png" alt="">
                <p class="text-4xl font-bold">Oops!! Sorry, There is no content here</p>
            </div>

        `
    }
}

const loadVidOnKeyUp = async(event) => {
    document.getElementById('show-videos').innerHTML = '';
    const get = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${event.target.value}`)
    const data = await get.json();
    displayVideos(data.videos);
console.log(event.target.value);
console.log(data);
}

loadVideos();