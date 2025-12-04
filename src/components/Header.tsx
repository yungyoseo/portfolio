import {Link} from 'react-router-dom';
import {Separator} from '@/components/ui/separator';

export default function Header() {
  return (
    <header className="p-4 bg-white">
      <div className="flex h-5 items-center justify-center gap-6">
        <Link to="/">Home</Link>
        <Separator orientation="vertical" />
        <Link to="/about">About</Link>
        <Separator orientation="vertical" />
        <Link to="/projects">Projects</Link>
        <Separator orientation="vertical" />
        <Link to="/awards">Awards</Link>
        <Separator orientation="vertical" />
        <Link to="/certification">Certification</Link>
      </div>
    </header>
  );
}
