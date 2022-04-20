const campDot = document.getElementById('camp-dot');
const floatImg = document.getElementById('float-img');

campDot.addEventListener('mouseover', () => {
    console.log('mouseover');
    floatImg.style.display = 'block';
})
campDot.addEventListener('mouseout', () => {
    console.log('mouseout');
    floatImg.style.display = 'none';
})  