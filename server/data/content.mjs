import flyData from './fly-data.mjs';
export default {
    home: {
        meta: {
            title: 'Grandpa’s Flies',
            description: 'A showcase of the flies my Grandpa, Horace Andrews, tied and fished.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_%288374802487%29.jpg/220px-Rubber_Duck_%288374802487%29.jpg',
        },
        content: [
            {
                type: `filter-list`,
                flies: flyData
            }
    ]},
    articles: [{
        meta: {
            title: 'First Article',
            description: 'This is the first article',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_%288374802487%29.jpg/220px-Rubber_Duck_%288374802487%29.jpg',
        },
        content: [
            {
                type: `title`,
                title: `The awesome Content Page 1!!`,
                lede: `Sample Lede, Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.`
            },{
                type: `content`,
                content: `
                    <h2>First Article: This is the first article</h2>
                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                `
            },{
                type: `media`,
                title: `Vehicula Mollis`,
                caption: `Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                img: `https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_%288374802487%29.jpg`
            },{
                type: `content`,
                content: `
                    <h2>Sem Consectetur Ipsum</h2>
                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                `
            }
    ]},{
        meta: {
            title: 'Second Article',
            description: 'This is the Second Sample article',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_%288374802487%29.jpg/220px-Rubber_Duck_%288374802487%29.jpg',
        },
        content: [
            {
                type: `title`,
                title: `The awesome Content Page 2!!`,
                lede: `Sample Lede, Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.`
            },{
                type: `content`,
                content: `
                    <h2>Second Article: This is the Second Sample article</h2>
                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                `
            },{
                type: `media`,
                title: `Vehicula Mollis`,
                caption: `Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                img: `https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_%288374802487%29.jpg`
            },{
                type: `content`,
                content: `
                    <h2>Sem Consectetur Ipsum</h2>
                    <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                `
            }
        ]
    }]
};
