document.addEventListener('DOMContentLoaded', (event) => {
    // Select the audio element
    const bgm = document.getElementById('bgm');
    const togglePlayButton = document.getElementById('togglePlay');

    // Try to play the audio automatically
    bgm.play().then(() => {
        console.log('BGM started playing automatically.');
    }).catch(error => {
        console.log('Autoplay was prevented. Starting BGM on user interaction.');
        document.body.addEventListener('click', () => {
            bgm.play();
        }, { once: true });
    });

    // Add event listener to the button to stop music
    togglePlayButton.addEventListener('click', () => {
        if (!bgm.paused) {
            bgm.pause();
            togglePlayButton.textContent = '음악 시작';
        } else {
            bgm.play();
            togglePlayButton.textContent = '음악 중지';
        }
    });
});
