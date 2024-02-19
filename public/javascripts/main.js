console.log('тик');

const downButton = document.querySelector('.btn');
console.log('downButton:', downButton);


downButton.addEventListener("click", () => {
    console.log('завантаження');
    window.location.assign('./file/123', '_blank');
});

