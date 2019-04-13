let description = `
<span>My name is Daniel and I am a web developer with more than 3 years of experience. My technology stack mostly concerns front-end development, recently I also used back-end technologies on my personal projects.</span>
<span>My main goal is to develop in JavaScript, it is a dynamic and rich language for which the future. At this stage, it allows you to write client, server, desktop cross-platform, mobile applications, it opens up huge opportunities for development.</span>
<span>At the moment I specialize in front-end development of SPA applications. Main stack - React + Redux.</span>
<span>I had experience with SSR. While I do not plan to change my main stack, React is the dominant js library and is developing rapidly. I would like to add more work with node to the stack.</span>
<b>About soft skills:</b>
<span>I feel free to communicate with colleagues and management. For the head I can present the project, justify the need for the use of architecture and technology. I also have no problems communicating with colleagues. In a formal working environment, I do not hesitate to ask if something is unclear to me from a more experienced colleague, I am happy to share my knowledge with a less experienced one. Do love and know how to explain (my coaching skills).</span>
<span>Behind the doors of the office I lead an active social life, professionally - work as a mentor, mitaps, a small YouTube channel about technologies.</span>
<span>In non-professional - martial arts, performances in children's theater, English club.</span>
<b>About hard skills:</b>
<span>As I wrote above, I work with the React + Redux stack. Also had experience with Flux.</span>
<span>Actively exploring server-side JavaScript - node.js, working with mongodb database. In my portfolio you can see examples of projects where these technologies were used. Basically, it is the creation of API, reading/writing to the database, parsing information from third-party resources.</span>
<span>There are also examples of desktop applications based on Electron created by me.</span>
<span>I love and know how to optimize as a classic site – optimization of graphic images, drawing sprites, dynamic loading of content, the allocation of critical css and so on., and SPA applications – the correct configuration of the webpack configuration, import only used functions from the modules, the division of the configuration into bundles, etc.</span>
`;

let accordeon = `
<section class="card accordeon">
    <article>
        <h1 data-accordion-element-trigger>«Otkritie broker»</h1>
        <div data-accordion-element-content class="content">
            <p>
                <span>I was engaged in the development of the user's personal trading account. Personal account is a SPA application without SSR. I worked with a large project in conjunction with a professional team consisting of analysts, developers, testers, designers and all this within the framework of interaction with other teams. The project with a long history, respectively, had to face the support of a large number of legacy code. The specifics of the company forced to pay attention to the correctness of working with large amounts of data, data acquisition, transformation and output in various forms – the creation of tables, graphs. The following libraries were used to work with charts - d3.js, c3.js, Charts.</span>
                <span>At the same time, we had to convert the dates. For these purposes, at a good level mastered the library – moment.js.</span>

                <b>Technology:</b>
                <span>HTML, CSS,  Stylus,  Webpack, git, React, Redux, Flux, node.js, moment.js, d3.js, c3.js, ECharts</span>
            </p>

        </div>
    </article>
    <article>
        <h1 data-accordion-element-trigger>Clothing store "Kalyaev"</h1>
        <div data-accordion-element-content class="content">
            <p>
                <spanInitially, I got a job working with a more experienced front-end developer under his supervision, but after a month and a half of our collaboration, he quit. Accordingly, after his dismissal, I became responsible for the entire front-end development of the company. The main task of the project is the gradual transfer of the site to React + various small third-party projects of the company. This place of work allowed me to gain experience of serious development and work in a short time.</span>
                <b>Technology:</b>
                <span>HTML, CSS,  SCSS,  Webpack,  Postcss, REACT, Redux, node.js</span>
            </p>
        </div>
    </article>
    <article>
        <h1 data-accordion-element-trigger>«ASTRAL-М»</h1>
        <div data-accordion-element-content class="content">
            <p>
                <span>My first job as a team. I was accepted as a layout designer, the vast majority of the work and concerned the layout, after a while I felt the need for further growth and began to delve into the study of programming. In this company I first tried to work with React, VUE applications.</span>
                <b>Technology:</b>
                <span>HTML, CSS,  Less,  GULP,  Postcss, Jquery, PHP, REACT, VUE, Redux, Webpack</span>
            </p>
        </div>
    </article>
    <article>
        <h1 data-accordion-element-trigger>Web-studio MediaOnline</h1>
        <div data-accordion-element-content class="content">
            <p>
                <span>I Was the only frontend specialist, mainly engaged in layout, sometimes I had to animate pages with plugins and my own code on jquery. During the work I used the build automation tool – gulp. Typeset using preprocessors. Including was the task of SEO support sites. SEO promotion was achieved with the help of semantic layout, reducing the weight of pages, optimization for mobile devices.</span>

                <b>Technology:</b>

                <span>HTML, CSS, Stylus, GULP, Postcss,  PUG, Jquery</span>
            </p>
        </div>
    </article>
</section>
`

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
    ["tr-vers", "Version control systems"],
    ["tr-prepr", "preprocessors"],
    ["tr-design", "design"],
    ["tr-projects", "My projects"],
    ["tr-teacher", "teacher in HTML Academy"],
    ["tr-npm", "NPM libraries"],
    ["tr-html_1", "HTML & CSS, level 1"],
    ["tr-students", "students"],
    ["tr-description", description],
    ["tr-accordeon", accordeon]
];

if(document.location.search === '?en') {
    document.title = "Sugonyaev Daniel's portfolio"

    en.map(item => {
        document.querySelector(`#${item[0]}`).innerHTML = item[1];
    })
}
