import SalesCard from "./components/SalesCard"
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialMedia from "./components/SocialMedia";

function App() {
    return(
    <>
    <ToastContainer />
    <Header/>
    <main>
        <section id="sales">
            <div className="dsmeta-container">
            <SalesCard/>
            </div>
        </section>
    </main>
    <SocialMedia/>
    </>
    )
}

export default App
