const mySkills = [
    {
        id: 'html-skill',
        name: 'HTML&CSS',
        progress: 90
    },
    {
        id: 'javascript-skill',
        name: 'javascript',
        progress: 60
    },
    {
        id: 'php-skill',
        name: 'php',
        progress: 30
    },
    {
        id: 'node-skill',
        name: 'Node.js',
        progress: 30
    },
    {
        id: 'jquery-skill',
        name: 'jquery',
        progress: 70
    },
    {
        id: 'react-skill',
        name: 'React&Redux',
        progress: 80
    },
    {
        id: 'native-skill',
        name: 'React_Native',
        progress: 20
    },
    {
        id: 'vue-skill',
        name: 'vue',
        progress: 30
    },
    {
        id: 'mongodb-skill',
        name: 'mongodb',
        progress: 30
    },
    {
        id: 'wordpress-skill',
        name: 'wordpress',
        progress: 70
    },
    {
        id: 'opencart-skill',
        name: 'opencart',
        progress: 60
    },
    {
        id: 'bitrix-skill',
        name: 'bitrix',
        progress: 40
    },
    {
        id: 'webpack-skill',
        name: 'webpack',
        progress: 80
    },
    {
        id: 'gulp-skill',
        name: 'gulp',
        progress: 80
    },
    {
        id: 'git-skill',
        name: 'git',
        progress: 60
    },
    {
        id: 'stylus-skill',
        name: 'stylus',
        progress: 80
    },
    {
        id: 'less-skill',
        name: 'less',
        progress: 80
    },
    {
        id: 'sass-skill',
        name: 'sass',
        progress: 80
    },
    {
        id: 'pug-skill',
        name: 'pug',
        progress: 80
    },
    {
        id: 'photoshop-skill',
        name: 'photoshop',
        progress: 70
    },
    {
        id: 'xd-skill',
        name: 'xd',
        progress: 70
    },
    {
        id: 'avocode-skill',
        name: 'avocode',
        progress: 80
    }

]

window.onload = function() {
    let src = document.querySelectorAll('img[lazySrc]');

    for(let i = 0; i < src.length; i++) {
        let srcWay = src[i].getAttribute('lazySrc');
        src[i].setAttribute('src', srcWay);
        src[i].removeAttribute('lazySrc');
    }

    let srcset = document.querySelectorAll('source[lazySrcset]');


    for(let i = 0; i < srcset.length; i++) {
        let srcsetWay = srcset[i].getAttribute('lazySrcset');
        srcset[i].setAttribute('srcset', srcsetWay);
        srcset[i].removeAttribute('lazySrcset');
    }

}

// Шаблон skill

let skill = document.querySelector('#skill').content;

for(let i = 0; i < mySkills.length; i++) {
    let content = skill.cloneNode(true);
    let name = mySkills[i].name;
    let id = mySkills[i].id;
    let progress = mySkills[i].progress;

    let srcset = content.querySelector('source').getAttribute('srcset').replace(' name ', name);
    content.querySelector('source').setAttribute('srcset', srcset);

    let src = content.querySelector('img').getAttribute('src').replace(' name ', name);
    content.querySelector('img').setAttribute('src', src);

    content.querySelector('h3').innerText = name;

    content.querySelector('.amount').style.width = progress + '%';

    content.querySelector('.loaded').innerText = progress + '%';

    document.querySelector('.' + id).appendChild(content)
}
