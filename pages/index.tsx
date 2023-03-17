import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { supabase } from '@/lib/supabaseClient'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@/components/Account'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ countries }: { countries: any[] }) {
  console.log(countries);
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <div className="max-w-7xl mx-auto bg-blue-tintiest">
      {!session ? (
        <div className='p-12'>
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google', 'facebook', 'twitter']} />
        </div>
      ) : (
        <>
          <Head>
            <title>Bulby Leaks</title>
          </Head>
          <Header />
          <Banner />
          <Account session={session} />
        </>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  let { data } = await supabase.from('countries').select()

  return {
    props: {
      countries: data
    },
  }
}
