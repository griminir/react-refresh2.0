import { useEffect, useState } from 'react';
import { LoaderCircle } from 'lucide-react';

export default function ApiPuppies() {
  const [apiPuppies, setApiPuppies] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    async function getPuppies() {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8000/api/puppies');
        if (!response.ok) {
          const errorData = await response.json();
          setError(`${errorData.message}: ${errorData.details}`);
          throw errorData;
        }
        const data = await response.json();
        setApiPuppies(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getPuppies();
  }, []);

  return (
    <div className='mt-12 bg-white p-6 shadow ring ring-black/5'>
      {loading && <LoaderCircle className='animate-spin stroke-slate-300' />}
      {apiPuppies.length > 0 && (
        <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>
      )}
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
}
