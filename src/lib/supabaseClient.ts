import { createClient } from '@supabase/supabase-js';

// Substitua pela URL e chave do seu projeto Supabase
const supabaseUrl = 'https://nlwnahtwamovdzogdfmo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sd25haHR3YW1vdmR6b2dkZm1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxMDEyODUsImV4cCI6MjA1MDY3NzI4NX0.hhDYYqN4KhT9YJsee9pQn0xdSj9zu3vUaG9ODoUs6HU';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Função para testar a conexão com o Supabase
export async function testConnection() {
  const { data, error } = await supabase
    .from('teste2') // Substitua 'sua_tabela' pelo nome da sua tabela
    .select('*');

  if (error) {
    console.error('Erro ao buscar dados:', error);
  } else {
    console.log('Dados buscados com sucesso:', data);
  }
}