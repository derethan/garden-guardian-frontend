import "./App.css";

// Import MUI Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

// Import Components
import Header from "./components/header/header";

// Import Routes
import { siteLinks, privateRoutes } from "./routes";
import PrivateRoute from "./hooks/PrivateRoute";

// Import Theme
import theme from "./theme";

import AuthProvider from "./hooks/useAuthProvider";

// Main App Component
export default function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <Header />
            </header>

            <main className="app-body">


              <AuthProvider>
              <Routes>

                {/* Maps the Public Routes */}
                {siteLinks.map((link) => (
                  <Route
                    key={link.ID}
                    path={link.path}
                    element={<link.Component />}
                  />
                ))}

                {/* Maps the Private Routes */}
                <Route element={<PrivateRoute />}>
                  {privateRoutes.map((link) => (
                    <Route
                      key={link.ID}
                      path={link.path}
                      element={<link.Component />}
                    />
                  ))}
                </Route>

              </Routes>
              </AuthProvider>


            </main>
          </div>
        </ThemeProvider>
      </BrowserRouter>
  );
} // end App
