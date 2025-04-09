import { Heart } from 'lucide-react';
import type { Puppy } from '@/types';
import { useContext } from 'react';
import { LikedContext } from '@/context/Liked-Context';

type LikeToggleProps = {
  puppyId: Puppy['id'];
};

export default function LikeToggle({ puppyId }: LikeToggleProps) {
  const { liked, setLiked } = useContext(LikedContext)!;
  const handleLike = () => {
    if (liked.includes(puppyId)) {
      setLiked((prev: Puppy['id'][]) =>
        prev.filter((id: Puppy['id']) => id !== puppyId),
      );
    } else {
      setLiked((prev: Puppy['id'][]) => [...prev, puppyId]);
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
