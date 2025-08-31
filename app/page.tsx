import ChubkoNavbar from "./components/ChubkoNavbar"
import ChubkoHero from "./components/ChubkoHero"
import ChubkoAbout from "./components/ChubkoAbout"
import ChubkoPortfolio from "./components/ChubkoPortfolio"
import ChubkoServices from "./components/ChubkoServices"
import ChubkoTestimonials from "./components/ChubkoTestimonials"
import ChubkoContact from "./components/ChubkoContact"
import ChubkoFooter from "./components/ChubkoFooter"
import { inject } from '@vercel/analytics';
 
inject();
const page = () => {
  return (
    <div className="min-h-screen">
      <ChubkoNavbar />
      
      <main>
        <section id="home">
          <ChubkoHero />
        </section>
        
        <ChubkoAbout />
        <ChubkoPortfolio />
        <ChubkoServices />
        <ChubkoTestimonials />
        <ChubkoContact />
      </main>
      
      <ChubkoFooter />
    </div>
  )
}

export default page