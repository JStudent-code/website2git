function changeInfo(info) {
    const infoblock = document.getElementById('infoblock'); // Get the infoblock element
    
    if (info === 'html') {
        infoblock.innerHTML = `
            <img class="scriptimg" src="img/HTML5.png" alt="html image">
            <p class="textwidth">HTML stands for Hypertext Markup Language. It's used to create the structure of a webpage using elements like headings, paragraphs, and images.</p>
        `;
    } else if (info === 'css') {
        infoblock.innerHTML = `
            <img class="scriptimg nothtml" src="img/CSS3_logo.png" alt="css image">
            <p class="textwidth">CSS stands for Cascading Style Sheets. It's used to control the layout, colors, and fonts of a webpage.</p>
        `;
    } else if (info === 'js') {
        infoblock.innerHTML = `
            <img class="scriptimg nothtml" src="img/Java_programming.png" alt="javascript image">
            <p class="textwidth">Java is a programming language used for building apps and websites. It's popular for backend development and Android apps.</p>
        `;
    }
}