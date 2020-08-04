const progressBar = document.querySelector('#progress_bar');
const weatherBox = document.querySelector('#weather_data');
const searchBox = document.querySelector('#search_bar');


async function moveProgress() {
    let i = 0;

    if (i == 0) {
        i = 1;
        const color = document.querySelector("#progress_color");
        let width = 1;
        const id = setInterval(frame, 10);
        await delay(990);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                color.style.width = width + "%";
            }
        }

        async function delay(ms) {
            return await new Promise(resolve => setTimeout(resolve, ms));
        } 
    }
}

function toggleProgress() {
    if (progressBar.classList.contains('hidden')) {
        searchBox.classList.add('hidden');
        weatherBox.classList.add('hidden');
        progressBar.classList.remove('hidden');
    }
    else {
        progressBar.classList.add('hidden');
    }
}

export {moveProgress, toggleProgress}