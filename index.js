// const chart = document.querySelector("#chart").getContext('2d');

// //create a new chart instance
// new Chart(chart, {
//     type: 'line',
//     data:{
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],

//         datasets:[
//             {
//                 label: 'BTS',
//                 data: [29374, 45621, 45698, 66358, 35468, 12578, 52134, 45632, 25346, 32165, 45632],
//                 borderColor: 'red',
//                 borderWidth: 2
//             },
        
        
//             {
//                 label: 'ETH',
//                 data: [33374, 54621, 28698, 36358, 35468, 22578, 36134, 21432, 25346, 41165, 36632],
//                 borderColor: 'blue',
//                 borderWidth: 2
//             }
//         ]
//     },

//     options: {
//         responsive: true
//     }
// })


// show or hide sidebar

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sidebar.style.display = 'none';
})


// change theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:last-child').classList.toggle('active');
})