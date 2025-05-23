import { Dispatch, SetStateAction } from 'react';
import type { Puppy } from '@/types';
import { SubmitButton } from '@/components/puppiesComponents/SubmitButton.tsx';

type Props = {
  puppies: Puppy[];
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};
export default function NewPuppyForm({ puppies, setPuppies }: Props) {
  return (
    <div className='mt-12 flex items-center justify-between bg-white p-8 shadow ring ring-black/5'>
      <form
        action={async (formData: FormData) => {
          await new Promise((resolve) => setTimeout(resolve, 1500));

          const newPuppy: Puppy = {
            id: puppies.length + 1,
            name: formData.get('name') as string,
            trait: formData.get('trait') as string,
            imagePath: `images/${puppies.length + 1}.jpeg`,
          };
          setPuppies([...puppies, newPuppy]);
        }}
        // old way
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   const formData = new FormData(e.target);
        //   const name = formData.get('name');
        //   const trait = formData.get('trait');
        //   console.log(Object.fromEntries(formData));
        // }}
        className='mt-4 flex w-full flex-col items-start gap-4'
      >
        <div className='grid w-full gap-6 md:grid-cols-3'>
          <fieldset className='flex w-full flex-col gap-1'>
            <label htmlFor='name'>Name</label>
            <input
              required
              className='max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none'
              id='name'
              type='text'
              name='name'
            />
          </fieldset>
          <fieldset className='flex w-full flex-col gap-1'>
            <label htmlFor='trait'>Personality trait</label>
            <input
              required
              className='max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none'
              id='trait'
              type='text'
              name='trait'
            />
          </fieldset>
          <fieldset
            disabled
            className='col-span-2 flex w-full cursor-not-allowed flex-col gap-1 opacity-50'
          >
            <label htmlFor='avatar_url'>Profile pic</label>
            <input
              className='max-w-96 rounded-sm bg-white px-2 py-1 ring ring-black/20 focus:ring-2 focus:ring-cyan-500 focus:outline-none'
              id='avatar_url'
              type='file'
              name='avatar_url'
            />
          </fieldset>
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
