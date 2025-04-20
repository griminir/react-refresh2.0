import { getPuppies } from '@/queries';
import { use } from 'react';

const puppyPromise = getPuppies();
export default function ApiPuppies() {
  const apiPuppies = use(puppyPromise);
  return (
    <div className='mt-12 bg-green-100 p-6 shadow ring ring-black/5'>
      <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>;
    </div>
  );
}
