import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ObjectiveSection from '@/components/objective-section';
import SkillSection from '@/components/skill-section';
import ProjectSection from '@/components/project-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

const Home = () => {
  return (
    <div className='bg-midnight-200'>
      <Navbar />
      <main className='mb-10 flex flex-col items-center gap-10 font-mono text-midnight-100 sm:mb-0'>
        <div>
          <HeroSection />
        </div>
        <div
          id='objective'
          className='flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-101 to-green-101 lg:max-h-[1000px]'
        >
          <ObjectiveSection />
        </div>
        <div
          id='skills'
          className='flex h-fit w-screen items-center justify-center lg:min-h-[80vh] xl:max-h-[1500px]'
        >
          <SkillSection />
        </div>
        <div
          id='projects'
          className='flex h-fit w-screen items-center justify-center lg:min-h-[80vh] xl:max-h-[1500px]'
        >
          <ProjectSection />
        </div>
        <div
          id='contact'
          className='flex h-fit min-h-screen items-center justify-center sm:w-screen lg:min-h-[80vh] xl:max-h-[1500px]'
        >
          <ContactSection />
        </div>
      </main>

      <footer className='flex items-center justify-center bg-midnight-100/50 p-4 text-white'>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
