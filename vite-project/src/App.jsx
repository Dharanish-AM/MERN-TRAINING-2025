
import './App.css';
import Gallery from './components/Gallery';


function Header() {
  return (
    <header className="header">
      <h1>Welcome to My App</h1>
    </header>
  );
}


function MainContent() {
  return (
    <main className="main-content">
      <p>This is the main content of the app.</p>
    </main>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 My App. All rights reserved.</p>
    </footer>
  );
}


function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
      <Gallery />
    </div>
  );
}

export default App;
