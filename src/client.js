import { createClient } from '@supabase/supabase-js'

const URL = 'https://neepelvxuawgfzbhxsjq.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lZXBlbHZ4dWF3Z2Z6Ymh4c2pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExODIyMTgsImV4cCI6MTk5Njc1ODIxOH0.4lWFREhD_i7mt-73JG3ZG81a6QavilbEf9wK-CgRZv0';


export const supabase = createClient(URL, API_KEY);  