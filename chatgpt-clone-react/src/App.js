
const App = () => {
  return (
    <div className="app">
      <section class="side-bar">
      <button>+ New chat</button>
      <ul class="history"></ul>
      <nav>
        <p>Made by Mekki</p>
      </nav>
    </section>
    <section class="main">
      <h1>MekkiGPT</h1>
      <p id="output"></p>
      <div class="bottom-section">
        <div class="input-container">
          <input type="text" />
          <div id="submit">➤</div>
        </div>
      </div>
      <p class="info">
        Chat GPT Dec 18 Version. Free Research Preview. Our goal is to make AI
        systems more natural and safe to interact with. Your feedback will help
        us improve.
      </p>
    </section>
    </div>
  );
}

export default App;
