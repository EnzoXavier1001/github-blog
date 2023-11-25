import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaultTheme"
import { GlobalStyles } from "./styles/globalStyles"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Teste</h1>
    </ThemeProvider>
  )
}

export default App
