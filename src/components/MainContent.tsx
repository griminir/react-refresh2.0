import Search from './Search';
import ShortList from './ShortList';
import PuppyList from './puppiesComponents/PuppyList';
import NewPuppyForm from './puppiesComponents/NewPuppyForm';
import { Suspense, useState } from 'react';
import type { Puppy } from '@/types';
import { LikedContext } from '@/context/Liked-Context';
import { puppies as puppiesData } from '@/data/puppies';
import ApiPuppies from '@/components/puppiesComponents/ApiComponents/ApiPuppies.tsx';
import { LoaderCircle } from 'lucide-react';
import { ErrorBoundary } from 'react-error-boundary';

export default function MainContent() {
  const [liked, setLiked] = useState<Puppy['id'][]>([1, 3]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);

  return (
    <main>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <div className='mt-12 bg-red-100 p-6 shadow ring ring-black/5'>
            <p className='text-red-500'>
              {error.message}: {error.details}
            </p>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div className='mt-12 bg-white p-6 shadow ring ring-black/5'>
              <LoaderCircle className='animate-spin stroke-slate-300' />
            </div>
          }
        >
          <ApiPuppies />
        </Suspense>
      </ErrorBoundary>

      <LikedContext value={{ liked, setLiked }}>
        <div className='mt-24 grid gap-8 sm:grid-cols-2'>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ShortList puppies={puppies} />
        </div>
        <PuppyList searchQuery={searchQuery} puppies={puppies} />
        <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />
      </LikedContext>
    </main>
  );
}
