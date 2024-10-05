// {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }


function convertSeconds(seconds) {
    // Constants
    const SECONDS_IN_MINUTE = 60;
    const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
    const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;
    const SECONDS_IN_MONTH = 30 * SECONDS_IN_DAY; // Approximation for a month

    // Calculate months, days, hours, minutes, and seconds
    const months = Math.floor(seconds / SECONDS_IN_MONTH);
    seconds %= SECONDS_IN_MONTH;
    
    const days = Math.floor(seconds / SECONDS_IN_DAY);
    seconds %= SECONDS_IN_DAY;
    
    const hours = Math.floor(seconds / SECONDS_IN_HOUR);
    seconds %= SECONDS_IN_HOUR;
    
    const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
    seconds %= SECONDS_IN_MINUTE;

    return `${months==0?"":months} ${days}day ${hours}hrs ${minutes}min ${seconds}sec`;
}

// Example usage:
const result = convertSeconds(10000000);
console.log(result);
