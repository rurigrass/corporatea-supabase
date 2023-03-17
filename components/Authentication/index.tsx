import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { supabase } from '@/lib/supabaseClient'

const Authentication = () => {
    const session = useSession()
    const supabase = useSupabaseClient()
    return (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google', 'facebook', 'twitter']} />
    )
}


export default Authentication