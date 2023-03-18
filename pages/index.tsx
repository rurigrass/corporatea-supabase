import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { supabase } from '@/lib/supabaseClient'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '@/components/Account'
import Authentication from '@/components/Authentication'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ countries }: { countries: any[] }) {
  console.log(countries);
  const session = useSession()

  return (
    <div className="max-w-7xl mx-auto bg-blue-tintiest">
      {!session ? (
        <Authentication />
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
