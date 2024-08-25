class UserLogin extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  submitForm(e) {
    debugger;
    console.log("submitForm");
    e.preventDefault();
    const username = this.shadowRoot.getElementById("username").value;
    const password = this.shadowRoot.getElementById("password").value;
    console.log(username, password);
    if (username === "admin" && password === "admin") {
      alert("Login success");
    } else {
      alert("Login failed");
    }
  }

  connectedCallback() {
    this.render();

    this.shadowRoot
      .getElementById("formLogin")
      .addEventListener("submit", this.submitForm.bind(this));
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        form {
          display: flex;
          flex-direction: column;
          width: 300px;
          margin: 0 auto;
        }
        label {
          margin-bottom: 5px;
        }
        input {
          padding: 5px;
          margin-bottom: 10px;
        }
        button {
          padding: 5px;
          background-color: #3498db;
          color: white;
          border: none;
          cursor: pointer;
        }
      </style>
      <form id='formLogin'>
        <label for="username">Username</label>
        <input type="text" id="username" name="username">
        <label for="password">Password</label>
        <input type="password" id="password" name="password">
        <button type="submit">Login</button>
      </form>
              `;
  }
}

customElements.define("user-login", UserLogin);

