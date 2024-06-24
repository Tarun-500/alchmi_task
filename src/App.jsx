import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import {ResultCare} from './Component/ResultCare'
import { Container } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import HonestCare from './Component/HonestCare';
import TabSection from './Component/TabSection';
import CenterBar from './Component/CenterBar';
import QualityAssured from './Component/QualityAssured';
import TheTruth from './Component/TheTruth';
import Banner from './Component/Banner';
import { BestSeller } from './Component/Bestseller';
import { Testimonials } from './Component/Testimonials';
import { Blogs } from './Component/Blogs';
function App() {

  return (
    <Container fluid>
      <Router>
        <Header />
        <Banner />
        <BestSeller />
        <TheTruth />
        <TabSection />
        <CenterBar />
        <QualityAssured />
        <Blogs />
        <Testimonials />
        <ResultCare />
        <HonestCare />
        <Footer />
      </Router>
    </Container>
  )
}

export default App
