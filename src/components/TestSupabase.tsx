import { useEffect } from 'react';
import { testConnection } from '../lib/supabaseClient';

const TestSupabase = () => {
  useEffect(() => {
    testConnection();
  }, []);

  return <div>Verifique o console para ver os resultados da conexão com o Supabase.</div>;
};

export default TestSupabase;