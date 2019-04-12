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
    ["tr-description", description]
];

if(document.location.search === '?en') {
    document.title = "Sugonyaev Daniel's portfolio"

    en.map(item => {
        document.querySelector(`#${item[0]}`).innerHTML = item[1];
    })
}
