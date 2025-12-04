import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'Lofee Shop',
      subtitle: 'Web3 기반 쇼핑 플랫폼',
      description:
        '구매자와 판매자의 결제 수수료를 대폭 절감한 Web3 쇼핑 플랫폼입니다. 블록체인 기술을 활용하여 중개자 없는 직거래를 구현했습니다.',
      period: '2024 - 2025',
      tags: [
        'React',
        'TypeScript',
        'Vite',
        'Chakra UI',
        'Solidity',
        'Ethereum',
      ],
      features: [
        'SIWE(Sign-In with Ethereum)를 활용한 익명 로그인 시스템',
        '스마트 컨트랙트 기반 자동화 결제 시스템',
        '판매자와 구매자 간 직거래로 중개 수수료 절감',
        'MinIO + Express를 활용한 이미지 서버 구축',
        'Ubuntu Server 24.04 LTS, Cloudflare, Nginx 기반 인프라 구축',
      ],
      achievements: ['Web3 기술을 활용한 실제 서비스 개발 경험', '블록체인 기반 결제 시스템 구현 경험', '인프라 설계 및 구축 경험'],
      techStack: {
        frontend: 'React, TypeScript, Chakra UI',
        backend: 'Java, Spring, MySQL, Redis (팀원 담당)',
        imageServer: 'MinIO, Express',
        infrastructure: 'Ubuntu Server 24.04 LTS, Cloudflare Proxy, Nginx',
        blockchain: 'Solidity, Ethereum',
      },
      githubUrl: 'https://', // 비공개 저장소
      demoUrl: 'https://www.lofee.shop',
    },
    {
      title: 'Crypto Price Alert Bot',
      subtitle: '암호화폐 가격 알림 텔레그램 봇',
      description:
        '암호화폐 시세 변화를 실시간으로 감지하여 사용자에게 텔레그램으로 알림을 전송하는 봇입니다. Python의 Starlette를 활용한 비동기 웹훅 서버로 구현했습니다.',
      period: '2024',
      tags: ['Python', 'Starlette', 'Telegram Bot API', 'Binance API'],
      features: [
        'Starlette 기반 Webhook 서버 구축',
        'Telegram Bot API 연동',
        'Binance Open API를 통한 실시간 암호화폐 시세 데이터 수집',
        '이벤트 기반 메시지 전송 시스템',
        '사용자 맞춤형 가격 알림 설정',
      ],
      achievements: [
        'Open API 연동 및 실시간 데이터 처리 경험',
        '비동기 서버 개발 및 이벤트 기반 아키텍처 구현',
        '실시간 알림 시스템 구축 경험',
      ],
      techStack: {
        backend: 'Python, Starlette (비동기 웹 프레임워크)',
        api: 'Telegram Bot API, Binance Open API',
        architecture: '이벤트 기반 메시지 전송 시스템',
      },
      githubUrl: '', // 추가 예정
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">프로젝트</h1>
          <p className="text-gray-600 text-lg">
            진행했던 주요 프로젝트입니다.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <CardTitle className="text-3xl mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {project.subtitle}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {project.period}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">프로젝트 소개</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">주요 기능</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">기술 스택</h3>
                  <div className="space-y-2">
                    {Object.entries(project.techStack).map(([key, value]) => (
                      <div key={key} className="flex flex-wrap gap-2">
                        <span className="font-medium text-gray-700 capitalize min-w-[120px]">
                          {key}:
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    성과 및 배운 점
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {(project.githubUrl || project.demoUrl) && (
                  <div className="flex gap-4 pt-4 border-t">
                    {project.githubUrl && (
                      <Button asChild variant="outline">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
