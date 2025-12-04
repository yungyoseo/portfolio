import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiMysql,
  SiAwsamplify,
  SiGit,
  SiNginx,
  SiCloudflare,
  SiNextdotjs,
  SiSolidity,
  SiEthereum,
  SiUbuntu,
} from 'react-icons/si';

export default function About() {
  const experiences = [
    {
      company: '주식회사 램플 (ICT 학점연계 인턴십)',
      position: '인턴',
      period: '2025.09 - 2025.12',
      description:
        'Next.js를 활용하여 대학교에서 사용하는 학사 관리 시스템을 개발하였습니다.',
      technologies: ['Next.js', 'MySQL'],
    },
  ];

  const education = [
    {
      school: '42 Gyeongsan',
      degree: 'Cadet',
      period: '2024.03 - 현재',
      description:
        'C/C++ 및 Ubuntu 환경에서 시스템 프로그래밍을 집중적으로 학습하였습니다. 동료학습을 통해 문제 해결 능력과 협업 능력을 키웠습니다.',
    },
    {
      school: '영남대학교',
      degree: '컴퓨터공학과 학사',
      period: '2022.03-2026.02 (예정)',
      description:
        '컴퓨터공학의 핵심인 자료구조 & 알고리즘, 운영체제 및 네트워크, 데이터베이스 등을 학습하였습니다.',
    },
  ];

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        {name: 'React', icon: SiReact, color: '#61DAFB'},
        {name: 'Next.js', icon: SiNextdotjs, color: '#000000'},
      ],
    },
    {
      category: 'Backend',
      skills: [
        {name: 'Node.js', icon: SiNodedotjs, color: '#339933'},
        {name: 'Express', icon: SiExpress, color: '#000000'},
      ],
    },
    {
      category: 'Database',
      skills: [
        {name: 'MySQL', icon: SiMysql, color: '#4479A1'},
        {name: 'Redis', icon: SiRedis, color: '#DC382D'},
      ],
    },
    {
      category: 'Infrastructure',
      skills: [
        {name: 'Ubuntu', icon: SiUbuntu, color: '#E95420'},
        {name: 'Cloudflare', icon: SiCloudflare, color: '#F38020'},
        {name: 'AWS', icon: SiAwsamplify, color: '#FF9900'},
        {name: 'Git', icon: SiGit, color: '#F05032'},
        {name: 'Nginx', icon: SiNginx, color: '#009639'},
      ],
    },
    {
      category: 'Blockchain',
      skills: [
        {name: 'Ethereum', icon: SiEthereum, color: '#3C3C3D'},
        {name: 'Solidity', icon: SiSolidity, color: '#363636'},
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Introduction */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <img
                src="src/assets/profile.jpeg"
                alt="서윤교 프로필"
                className="w-48 h-60 rounded-lg object-cover border-2"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-6">자기소개</h1>
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  2020년 기계공학부에 입학했지만, 'C언어 프로그래밍' 과목에서
                  프로그래밍에 매료되었습니다. 군 복무 중 C언어 공부를 시작했고,
                  전역 후 컴퓨터공학과로 재입학하며 본격적인 개발자의 길을 걷게
                  되었습니다. 불편한 작업을 자동화하고, 상상하는 기능을 컴퓨터
                  한 대로 구현할 수 있다는 점이 가장 큰 매력이었습니다.
                </p>
                <p>
                  현재는 React, TypeScript, Node.js를 활용한 풀스택 개발과
                  블록체인 기술에 관심을 가지고 있습니다. 특히 Web3 기술을
                  활용하여 사용자의 불편함을 해소하는 서비스를 만드는 것을
                  목표로 하고 있습니다.
                </p>
                <p>
                  관심 있는 일에 극도로 집중하는 편이며, 필요하다면 2~3일 밤을
                  새워서라도 목표를 달성합니다. 개발 외에는 음악을 좋아하며,
                  대학교 락밴드 동아리에서 1년간 회장으로 활동하며 리더십과 협업
                  능력을 키웠습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">경력</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{exp.position}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {edu.school}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-bold mb-8">기술 스택</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map(category => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => {
                      const Icon = skill.icon;
                      return (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="flex items-center gap-1.5"
                        >
                          <Icon style={{color: skill.color}} size={14} />
                          {skill.name}
                        </Badge>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
