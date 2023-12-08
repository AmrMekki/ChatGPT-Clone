

const App = () => {

  const getMessages = async () => {

    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try{
      const response = await fetch("http://localhost:8000/completions", options);
      const data = await response.json();
      console.log(data);
    } catch (error){
      console.log(error);
    }
  }

  return (
    <div className="app">
      <section className="side-bar">
      <button>+ New chat</button>
      <ul className="history"></ul>
      <nav>
        <p>Made by Mekki</p>
      </nav>
    </section>
    <section className="main">
      <h1>MekkiGPT</h1>
      <ul className="feed">
        
      </ul>
      <div className="bottom-section">
        <div className="input-container">
          <input type="text" />
          <div id="submit" onClick={getMessages}>➤</div>
        </div>
      </div>
      <p className="info">
        Chat GPT Dec 18 Version. Free Research Preview. Our goal is to make AI
        systems more natural and safe to interact with. Your feedback will help
        us improve.
      </p>
    </section>
    </div>
  );
}

export default App;
