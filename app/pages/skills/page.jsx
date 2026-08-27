import { redirect } from 'next/navigation';

// Ruta antigua conservada para no romper enlaces existentes.
export default function Page() {
  redirect('/#habilidades');
}
