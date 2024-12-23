// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://gsamrhnhgvougbjmpwck.supabase.co'; // Replace with your Supabase project URL
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzYW1yaG5oZ3ZvdWdiam1wd2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMzY2MzYsImV4cCI6MjA0ODkxMjYzNn0.qimJgNP2rHPGhs3TntOf8MqohYYGV7it_zpPF6zy5yw'; // Replace with your Supabase anon key

// export const supabase = createClient(supabaseUrl, supabaseKey);

import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gsamrhnhgvougbjmpwck.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzYW1yaG5oZ3ZvdWdiam1wd2NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzMzY2MzYsImV4cCI6MjA0ODkxMjYzNn0.qimJgNP2rHPGhs3TntOf8MqohYYGV7it_zpPF6zy5yw"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})