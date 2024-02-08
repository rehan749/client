import DataFetching from '@/component/DataFetching'
import Hero from '@/component/Hero'
import Homemenu from '@/component/Homemenu'
import Navbar from '@/component/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
 <>
 {/* <Navbar/> */}

 <Hero />
 <Homemenu />
 <DataFetching/>
 
 </>

  
  
    )
}
