class Navbar extends HTMLElement {
    connectedCallback() {
        let base_url = window.location.origin;        
        this.innerHTML = `
        <nav class="navbar">
            <ul>
                <li><a href="${base_url}">Home</a></li>
                <li><a href="${base_url}/meeting-minutes/">Meeting Minutes</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('nav-bar', Navbar);