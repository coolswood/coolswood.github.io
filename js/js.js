const mySkills=[{id:'html-skill',name:'HTML&CSS',progress:90},{id:'javascript-skill',name:'javascript',progress:70},{id:'php-skill',name:'php',progress:30},{id:'node-skill',name:'Node.js',progress:40},{id:'jquery-skill',name:'jquery',progress:70},{id:'react-skill',name:'React&Redux',progress:90},{id:'native-skill',name:'React_Native',progress:20},{id:'vue-skill',name:'vue',progress:30},{id:'electron-skill',name:'electron',progress:40},{id:'mongodb-skill',name:'mongodb',progress:60},{id:'wordpress-skill',name:'wordpress',progress:70},{id:'opencart-skill',name:'opencart',progress:60},{id:'bitrix-skill',name:'bitrix',progress:40},{id:'webpack-skill',name:'webpack',progress:80},{id:'gulp-skill',name:'gulp',progress:80},{id:'git-skill',name:'git',progress:70},{id:'stylus-skill',name:'stylus',progress:80},{id:'less-skill',name:'less',progress:80},{id:'sass-skill',name:'sass',progress:80},{id:'pug-skill',name:'pug',progress:80},{id:'photoshop-skill',name:'photoshop',progress:70},{id:'xd-skill',name:'xd',progress:70},{id:'avocode-skill',name:'avocode',progress:80},{id:'figma-skill',name:'figma',progress:80},];const myProjects=[{img:'error',ticets:{github:'https://github.com/coolswood/task-manager',windows:'https://coolswood.github.io/projects/error-jurnal/task-manager.exe',mac:'https://coolswood.github.io/projects/error-jurnal/task-manager.zip'},href:'https://coolswood.github.io/projects/error-jurnal',h4:'Журнал ошибок',discr:'Программа-помощник для разработчика. Можно фиксировать ошибки, создавать чек листы. Данные хранятся в indexedDB, можно синхронизировать данные с Gists.',technologies:['javascript','react','electron']},{img:'prim',ticets:{github:'https://github.com/coolswood/primirenie_new'},href:'https://primirenie.ru/',h4:'Церковь примирение',discr:'Одна из моих первых работ. Данный сайт сверстан полностью с нуля и установлен на CMS Wordpress.',technologies:['HTML','wordpress','php','javascript','jquery']},{img:'kaliaev',ticets:{github:null},href:'https://www.fursk.ru',h4:'Главная страница Каляев',discr:'',technologies:['HTML','javascript','node','react']},{img:'kaliaev',ticets:{github:null},href:'https://www.fursk.ru/zhenshchinam/shuby',h4:'Листинг карточек Каляев',discr:'Листинг карточек товаров с фильтрами.',technologies:['HTML','javascript','node','react']},{img:'kaliaev',ticets:{github:null},href:'https://www.fursk.ru/zhenshchinam/shuby/art0916114',h4:'Карточка товара',discr:'Карточка товара с разветвленной логикой, попапы.',technologies:['HTML','javascript','node','react']},{img:'kaliaev',ticets:{github:null},href:'https://life.fursk.ru',h4:'Раздел Каляев Life',discr:'Главная страница Life, страницы категорий, а также внутренние страницы.',technologies:['HTML','javascript','node','react']},{img:'quiz-vue',ticets:{github:'https://github.com/coolswood/quiz-vue'},href:'http://lifes-ru.1gb.ru',h4:'Викторина',discr:'Викторина на знание Библии на VUE',technologies:['javascript','vue']},{img:'map',ticets:{github:'https://github.com/coolswood/map-marker'},href:'https://coolswood.github.io/projects/map/',h4:'Map',discr:'Яндекс карта на React с возможностью добавления меток, при нажатии скроллит к метке.',technologies:['javascript','react']},{img:'todo',ticets:{github:null},href:'https://coolswood.github.io/projects/todo-list/',h4:'Список задач',discr:'Реализация на React списка задач с возможностью сортировки по срочности задачи и анимации появления/удаления.',technologies:['javascript','react']},{img:'zenit',ticets:{github:null},href:'https://coolswood.github.io/projects/zenit/',h4:'Зенит',discr:'Лендинг для банка Зенит',technologies:['HTML','jquery']},{img:'astral',ticets:{github:null},href:'https://coolswood.github.io/projects/astral_new/white-top/news/',h4:'Astral Новости',discr:'',technologies:['HTML','jquery','bootstrap']},{img:'astral',ticets:{github:null},href:'https://coolswood.github.io/projects/astral_new/white-top/shops-ins/',h4:'Astral Карточка товара',discr:'',technologies:['HTML','jquery','bootstrap']},{img:'astral',ticets:{github:null},href:'https://coolswood.github.io/projects/astral_new/white-top/question-answer/',h4:'Astral online',discr:'',technologies:['HTML','jquery','bootstrap']},{img:'acrostia',ticets:{github:'https://github.com/coolswood/acrostia'},href:'https://coolswood.github.io/projects/acrostia/',h4:'Acrostia',discr:'',technologies:['HTML']}]

// Шаблон skill

const skill = document.querySelector('#skill').content;

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

// Шаблон project

const project = document.querySelector('#project').content;
const projectsContainer = document.querySelector('#container');

for(let i = 0; i < myProjects.length; i++) {

    let content = project.cloneNode(true);
    let img = myProjects[i].img;
    let ticets = myProjects[i].ticets;
    let href = myProjects[i].href;
    let h4 = myProjects[i].h4;
    let discr = myProjects[i].discr;
    let technologies = myProjects[i].technologies;

    let projectClass = content.querySelector('.work');
    projectClass.setAttribute('class', `${projectClass.getAttribute('class')} ${technologies.join(' ')}`)

    let srcset = content.querySelector('source').getAttribute('lazySrcset').replace(' name ', img);
    content.querySelector('source').setAttribute('lazySrcset', srcset);

    let src = content.querySelector('img').getAttribute('lazySrc').replace(' name ', img);
    content.querySelector('img').setAttribute('lazySrc', src);

    let github = content.querySelector('.github');

    if(ticets.github) {
      github.setAttribute('href', ticets.github)
    } else {
      github.parentNode.removeChild(github);
    }

    let windows = content.querySelector('.windows');

    if(ticets.windows) {
      windows.setAttribute('href', ticets.windows)
    } else {
      windows.parentNode.removeChild(windows);
    }

    let mac = content.querySelector('.mac');

    if(ticets.mac) {
      mac.setAttribute('href', ticets.mac)
    } else {
      mac.parentNode.removeChild(mac);
    }


    content.querySelector('.project-link').setAttribute('href', href);

    content.querySelector('h4').innerText = h4;

    content.querySelector('span').innerText = discr;

    let projectTechnologies = content.querySelector('.technology');

    for(let i = 0; i < technologies.length; i++) {

      let element = document.createElement('div');
      element.setAttribute('class', `technology_item ${technologies[i]}`);
      element.innerText = technologies[i];
      projectTechnologies.appendChild(element)
    }

    projectsContainer.appendChild(content)
}

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

// Попап

let popaper = document.querySelectorAll('.popaper');
let popapWrap = document.querySelector('.popap-wrap');
let popap = document.querySelector('.content-popap');
let closeButton = document.querySelector('.close');
let includePlace = document.querySelector('.table-include-place');

for(let i = 0; i < popaper.length; i++) {
    popaper[i].onclick = () => {
        let fileName = popaper[i].getAttribute('data-file');
        let isEng = document.location.search === '?en' ? '_en' : '';

        fetch(`https://coolswood.github.io/students/${fileName}${isEng}.html`)
        .then(function (response) {
            return response.text()
        })
        .then(function (body) {
            includePlace.innerHTML = body;
        });

        popapWrap.classList.remove('hidden');
        popap.classList.remove('hidden');
    }
}

let closePopap = () => {
    popapWrap.classList.add('hidden');
    popap.classList.add('hidden');
}

popapWrap.addEventListener('click', closePopap);
closeButton.addEventListener('click', closePopap);




/**
>>>>>>>

Wanna include in your project?

More documentation on github:

https://github.com/cant89/gianni-accordion-js

>>>>>>>
**/

var gianniAccordion = (function(){
  return class {

    transitionendEventName(){
      var i,
          el = document.createElement('div'),
          transitions = {
            'transition': 'transitionend',
            'OTransition': 'otransitionend',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
          };

      for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
          return transitions[i];
        }
      }
    }

    expand(el){
      function resetHeight(ev){
        if(ev.target != el.content) return
        el.content.removeEventListener(this.transitionendevent, bindEvent);

        if(!el.isOpen) return

        requestAnimationFrame(()=>{
          el.content.style.transition = '0';
          el.content.style.height = 'auto';

          requestAnimationFrame(()=>{
            el.content.style.height = null;
            el.content.style.transition = null;

            this.fire("elementOpened", el);
          });
        });
      }

      var bindEvent = resetHeight.bind(this);
      el.content.addEventListener(this.transitionendevent, bindEvent);

      el.isOpen = true;
      el.content.style.height = el.content.scrollHeight + "px";
    }

    collapse(el){

      function endTransition(ev){
        if(ev.target != el.content) return
        el.content.removeEventListener(this.transitionendevent, bindEvent);

        if(el.isOpen) return

        this.fire("elementClosed", el);
      }

      var bindEvent = endTransition.bind(this);
      el.content.addEventListener(this.transitionendevent, bindEvent);

      el.isOpen = false;

      requestAnimationFrame(()=>{
        el.content.style.transition = '0';
        el.content.style.height = el.content.scrollHeight + "px";

        requestAnimationFrame(()=>{
          el.content.style.transition = null;
          el.content.style.height = 0;
        });
      });
    }

    open(el){
      el.selected = true;
      this.fire("elementSelected", el);
      this.expand(el);
      el.wrapper.classList.add(this.selectedClass);
    }

    close(el){
      el.selected = false;
      this.fire("elementUnselected", el);
      this.collapse(el);
      el.wrapper.classList.remove(this.selectedClass);
    }

    toggle(el){
      if(el.selected){
        this.close(el);
      } else {
        this.open(el);

        if(this.oneAtATime){
          this.els.filter(e=>e!=el && e.selected).forEach(e=>{
            this.close(e);
          });
        }
      }
    }

    attachEvents(){
      this.els.forEach((el, i)=>{
        el.trigger.addEventListener("click", this.toggle.bind(this, el));
      });
    }

    setDefaultData(){
      this.els = [];
      this.events = {
        'elementSelected': [],
        'elementOpened': [],
        'elementUnselected': [],
        'elementClosed': []
      };
      this.transitionendevent = this.transitionendEventName();
      this.oneAtATime = true;
      this.selectedClass = "selected";
      this.trigger = "[data-accordion-element-trigger]";
      this.content = "[data-accordion-element-content]";
    }

    setCustomData(data){
      var keys = Object.keys(data);

      for(var i=0; i<keys.length; i++){
        this[ keys[i] ] = data[ keys[i] ];
      }
    }

    fire(eventName, el){
      var callbacks = this.events[eventName];
      for(var i=0; i<callbacks.length; i++){
        callbacks[i]( el )
      }
    }

    on(eventName, cb){
      if( !this.events[eventName] ) return
      this.events[eventName].push(cb);
    }

    constructor(data){
      this.setDefaultData();
      this.setCustomData(data); // ES6 => Object.assign(this, data)

      [].forEach.call( document.querySelectorAll(this.elements), (el, i)=>{
        this.els.push({
          wrapper: el,
          trigger: el.querySelector(this.trigger),
          content: el.querySelector(this.content)
        });

        this.els[i].content.style.height = 0;
      });

      this.attachEvents();
    }

  }
})();

var myAccordion = new gianniAccordion({
  elements: ".card article"
});

myAccordion.on("elementSelected", (data)=>{
  console.log("elementOpened", data);
});
