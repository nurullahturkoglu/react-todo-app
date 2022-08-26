import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoFooter from "./components/TodoFooter";
import TodoMain from "./components/TodoMain";
import "./style.css";

function App() {
  return (
    <div>
      <section className="todoapp">
        <Header />
        <TodoMain/>
        <TodoFooter />
      </section>
      <Footer />
    </div>
  );
}

export default App;
