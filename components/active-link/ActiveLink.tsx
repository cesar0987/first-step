import Link from 'next/link';

interface Props {
    path: string;
    text: string;
}
export const ActiveLink = ({path, text}: Props) => {
  return (
    <Link href={path}>{text}</Link>
  )
}
