import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wisley A. Sousa Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 '>
        <section
          className="min-h-screen ">
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className='text-lg'>Wisley A. Sousa</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
                </li>
                <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
              </ul>
            </nav>
        </section>
      </main>

    </div>
  )
}
