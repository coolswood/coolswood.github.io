const en = [
    ["tr-hi", "Hello"],
    ["tr-my-name", "My name is Daniel, I am a web-developer"],
    ["tr-name", "Sugonyaev Daniel"],
    ["tr-main", "Main"],
    ["tr-about", "About me"],
    ["tr-skills", "My skills"],
    ["tr-works", "My projects"],
    ["tr-ach", "Achievements"],
    ["tr-about-page", "About me"],
    ["tr-way", "The journey of a thousand miles begins with the first step"],
    ["tr-info", "Info about me"],
    ["tr-accounts", "My accounts"],
    ["tr-write", "Write me"],
    ["tr-main-tech", "Main technologies"],
    ["tr-js-libs", "JS libraries"],
    ["tr-bd", "Databases"],
    ["tr-builders", "Project builders"],
    ["tr-vers", "Version control systems"]
];

if(document.location.search === '?en') {
    en.map(item => {
        document.querySelector(`#${item[0]}`).innerHTML = item[1];
    })
}
