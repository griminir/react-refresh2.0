import { Heart, X } from 'lucide-react';
import { type Puppy } from '@/types';

type ShortListProps = {
  puppies: Puppy[];
  liked: Puppy['id'][];
};
export default function ShortList({ puppies, liked }: ShortListProps) {
  const shortListed = puppies.filter((puppy) => {
    return liked.includes(puppy.id);
  });
  
  return (
    <div>
      <h2 className='flex items-center gap-2 font-medium'>
        <span>Your shortlist</span>
        <Heart className='h-4 w-4 fill-pink-500 text-pink-500' />
      </h2>
      <ul className='mt-4 flex flex-wrap gap-4'>
        {shortListed.map((puppy) => (
          <li
            key={puppy.id}
            className='relative flex items-center overflow-clip rounded-md bg-white shadow-sm ring ring-black/5 transition duration-100 starting:scale-0 starting:opacity-0'
          >
            <img
              height={32}
              width={32}
              alt={puppy.name}
              className='aspect-square w-8 object-cover'
              src={puppy.imagePath}
            />
            <p className='px-3 text-sm text-slate-800'>{puppy.name}</p>
            <button className='group h-full border-l border-slate-100 px-2 hover:bg-slate-100'>
              <X className='stroke-slate-400 group-hover:stroke-red-400' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
