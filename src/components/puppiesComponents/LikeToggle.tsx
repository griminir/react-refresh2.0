import { Heart } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import type { Puppy } from '@/types';

type LikeToggleProps = {
  puppyId: Puppy['id'];
  liked: Puppy['id'][];
  setLiked: Dispatch<SetStateAction<Puppy['id'][]>>;
};

export default function LikeToggle({
  puppyId,
  liked,
  setLiked,
}: LikeToggleProps) {
  const handleLike = () => {
    if (liked.includes(puppyId)) {
      setLiked((prev) => prev.filter((id) => id !== puppyId));
    } else {
      setLiked((prev) => [...prev, puppyId]);
    }
  };

  return (
    <button className='group' onClick={handleLike}>
      <Heart
        className={
          liked.includes(puppyId)
            ? 'fill-pink-500 stroke-none'
            : 'stroke-slate-200 group-hover:stroke-slate-300'
        }
      />
    </button>
  );
}
