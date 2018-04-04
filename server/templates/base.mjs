export default class BaseTemplate {
    constructor(){
        this.head = {};
        this.elementList = [];
    }
    render(){
        const body = `
            ${this.header}
            <main>
                ${this.page}
            </main>
        `;
        return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">

                <meta property="og:site_name" content="Placeholder Service">
                <title>${this.head.title}</title>
                ${this.head.content}
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i" rel="stylesheet">
                <link rel="stylesheet" href="/static/index.css" />
                <script src="/static/polyfills/webcomponents-loader.js"></script>
                ${
                    this.parseElements(body).map( (name) => {
                        return `<script type="module" src="/static/elements/${name}/${name}.js"></script>`;
                    }).join('')
                }
                <script src="/stiva.js"></script>
                <script>
                    stiva = new Stiva(${JSON.stringify(this.stiva)});
                    window.addEventListener('WebComponentsReady', e => {
                        // want to get it off the thread so all other handlers can run;
                        setTimeout(() => stiva.dispatchAll(), 300);
                        document.body.classList.add('WebComponentsReady');
                    });
                </script>
            </head>
            <body>
                ${body}
                ${
                    process.env.NODE_ENV === "dev" ? `   <script src="/static/lib/socket.io.js"></script>
                                <script>
                                    let socket = io('/');
                                    socket.on('reload', () => location.reload());
                                    socket.on('delayed-reload', () => setTimeout(() => location.reload(), 1000 ));
                                </script>
                            ` : ``
                }
            </body>
        </html>
        `;
    }
    populateHeader({navigation}){
        return `
            <site-header logo="/static/assets/img/logo.svg" layout="split" title="Grandpa's Flies">
                ${
                    navigation.map(({href, text}) => {
                        return `<nav-item href="${href}">${text}</nav-item>`;
                    }).join('')
                }
            </site-header>
        `;
    }
    parseElements(str){
        const reg = /(?:<|is=")\w+?-[\w-]+(?:\s*?|>)/gi;
        return [...new Set(str.match(reg).map( (s) => s.replace(/^(<|is=")/gi,'') ))]
    }
}
