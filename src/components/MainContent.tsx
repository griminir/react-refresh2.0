import Search from './Search';
import ShortList from './ShortList';
import PuppyList from './puppiesComponents/PuppyList';
import NewPuppyForm from './puppiesComponents/NewPuppyForm';
import { puppies } from '@/data/puppies';
import { useState } from 'react';
import { type Puppy } from '@/types';
import { LikedContext } from '@/context/Liked-Context.ts';

export default function MainContent() {
  const [liked, setLiked] = useState<Puppy['id'][]>([1, 3]);

  return (
    <main>
      <LikedContext value={{ liked, setLiked }}>
        <div className='mt-24 grid gap-8 sm:grid-cols-2'>
          <Search />
          <ShortList puppies={puppies} />
        </div>
        <PuppyList puppies={puppies} />
        <NewPuppyForm />
      </LikedContext>
    </main>
  );
}
