'use client'
import Typewriter from 'typewriter-effect';
import './page.css'

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
        <Typewriter options={
            {
                strings: ['Coming soon...'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'textTypewriter',
                cursorClassName: 'cursorTypeWriter',
            }
        }/>
    </main>
  );
}
