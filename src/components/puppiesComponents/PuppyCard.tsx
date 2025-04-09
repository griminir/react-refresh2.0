import { type Puppy } from '@/types';
import LikeToggle from './LikeToggle';
import { Dispatch, SetStateAction } from 'react';

type PuppyCardProps = {
  puppy: Puppy;
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
};
export default function PuppyCard({ puppy, liked, setLiked }: PuppyCardProps) {
  return (
    <li
      key={puppy.id}
      className='overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5'
    >
      <img
        className='aspect-square object-cover'
        alt={puppy.name}
        src={puppy.imagePath}
      />
      <div className='gap flex items-center justify-between p-4 text-sm'>
        <div className='flex items-center gap-2'>
          <p className='font-semibold'>{puppy.name}</p>
          <span className='text-slate-300'>·</span>
          <p className='text-slate-500'>{puppy.trait}</p>
        </div>
        <LikeToggle puppyId={puppy.id} liked={liked} setLiked={setLiked} />
      </div>
    </li>
  );
}
