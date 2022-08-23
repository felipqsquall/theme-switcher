import { useState } from "react";

function App() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = ({target}) => {
    setTheme(target.checked ? "dark" : "light")
  };

  return <main className={theme}>
      <p>Texto</p>
      <label>
        <input type="checkbox" 
          checked={theme === "dark"}
          onChange={handleThemeChange}
        /> Modo escuro
      </label>
    </main>
  ;
}

export default App;
