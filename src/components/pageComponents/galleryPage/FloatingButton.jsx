import Link from 'next/link';

export const FloatingButton = () => {
  return (
    <div className={'book-schedule-btn-float'}>
      <Link className={'  '} href={'/newyear2024'}>
        <span>New Year Gallery</span>
      </Link>
    </div>
  );
};
