import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {FaCertificate} from 'react-icons/fa';

export default function Certification() {
  const certifications = [
    //   {
    //     title: '정보처리기사',
    //     issuer: '한국산업인력공단',
    //     date: '취득',
    //     description: '소프트웨어 개발 및 정보시스템 구축 관련 국가기술자격증',
    //   },
    {
      title: '융합보안 인력양성 교육(블록체인 (심화))',
      issuer: 'KISIA(한국정보산업연합회)',
      date: '수료',
      description: '2024.06.26 ~ 2024.06.28 (21시간) 블록체인 심화 교육 수료',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaCertificate className="text-6xl text-blue-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">자격증 및 수료증</h1>
          <p className="text-gray-600 text-lg">
            취득한 자격증 및 교육 수료 내역입니다.
          </p>
        </div>

        {/* Certifications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow h-full"
            >
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                    <CardDescription className="text-base">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
