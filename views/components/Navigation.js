let Navigation = {
    render: async () => {
        let view = /*html*/`
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/#/">
                            Sandy's Page
                        </a>
                    </div>
                    <div class="navbar-menu">
                        <ul>
                            <li>Portfolio</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div class="navbar-form">
                        <ul>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        `

        return view;
    },
    afterRender: async () => {}
};

export default Navigation;