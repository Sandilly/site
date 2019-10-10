let Navigation = {
    render: async () => {
        let view = /*html*/`
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            <img src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-small-url-icon-opened-on-the-computer-image_1132275.jpg" />
                        </a>
                    </div>
                </div>
            </nav>
        `

        return view;
    },
    afterRender: async () => {}
};

export default Navigation;