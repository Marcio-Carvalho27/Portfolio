import {Instagram, LinkedinIcon, Mail, Github} from 'lucide-react'


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <header className="justify-center items-center h-32 flex flex-row space-x-96">  
        <img src="logo.svg" alt="logo" className='w-24 h-24 object-cover rounded-full'/>
        <nav className="space-x-16 flex flex-row">
          <a href="" className='text-3xl'>HOME</a>
          <a href="" className='text-3xl'>RESUME</a>
          <a href="" className='text-3xl'>PORTFOLIO</a>
          <a href="" className='text-3xl'>CONTACT</a>
        </nav>

        <div className='p-3 border-4 border-slate-700 rounded-full'>
            <a href="" className='text-3xl'>EN</a>
        </div>

      </header>

      <div className="p-20 flex-1">  
        <div className='grid grid-cols-2 gap-4 items-center'>
          <img src="photo.svg" alt="Márcio Carvalho" className=''/>
          <div className=''>
            <h1 className='text-7xl text-green-600'> HELLO WORLD! </h1>
            <h2 className='text-7xl'> My name is Márcio. </h2>
            <p className='text-6xl'> I’m a dev passionate about coding and learning new things.</p>
            <p className='text-6xl'> I want to made YOUR ideas to become true and you problems to be solved the best way possible. </p>
          </div>
        </div>
      </div>
      
      <footer className="h-28 bg-neutral-300 justify-center items-center flex flex-row space-x-96">  
        <a href=""> ©2024 Márcio Carvalho </a>
        <nav className="space-x-4 flex flex-row">
          <a target='_blank' href=""> <Instagram/> </a>
          <a target='_blank' href="https://www.linkedin.com/in/marciocarvalho27/"> <LinkedinIcon/> </a>
          <a target='_blank' href="mailto:marciopc.filho27@gmail.com"> <Mail/> </a>
          <a target='_blank' href="https://github.com/Marcio-Carvalho27"> <Github/> </a>
        </nav>
      </footer>
    </div>
  );
}
