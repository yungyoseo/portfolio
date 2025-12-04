import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Link} from 'react-router-dom';
import {SiReact, SiNodedotjs, SiGit} from 'react-icons/si';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const skills = [
    {name: 'React', icon: SiReact, color: '#61DAFB'},
    {name: 'Node.js', icon: SiNodedotjs, color: '#339933'},
    {name: 'Git', icon: SiGit, color: '#F05032'},
  ];

  const featuredProjects = [
    {
      title: 'Lofee Shop',
      description:
        '구매자와 판매자의 결제 수수료를 대폭 절감한 Web3 쇼핑 플랫폼',
      tags: ['React', 'TypeScript', 'Blockchain', 'Solidity'],
    },
    {
      title: 'Crypto Price Alert Bot',
      description:
        '암호화폐 시세 변화를 실시간으로 감지하여 텔레그램으로 알림을 전송하는 봇',
      tags: ['Python', 'Starlette', 'Telegram Bot API', 'Binance API'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            안녕하세요, 서윤교입니다.
          </h1>
          <p className="text-2xl text-gray-600 mb-6">Full-Stack Developer</p>
          <p className="text-lg text-gray-500 mb-8">
            사용자의 불편함을 해소하는 개발자입니다. Web3와 모던 웹 기술을
            활용하여 혁신적인 서비스를 만듭니다.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {skills.map(skill => {
            const Icon = skill.icon;
            return (
              <Badge
                key={skill.name}
                variant="secondary"
                className="text-sm px-4 py-2 flex items-center gap-2"
              >
                <Icon style={{color: skill.color}} />
                {skill.name}
              </Badge>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-16 pb-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredProjects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
