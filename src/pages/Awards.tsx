import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {FaTrophy} from 'react-icons/fa';

export default function Awards() {
  const awards = [
    {
      title: '2025 대경권 대학생 프로그래밍 경진대회',
      award: '우수상',
      date: '2025.05.27',
      organization: '영남대학교 | SW중심대학 사업단 | C++',
    },
    {
      title: '2024 대경권 대학생 프로그래밍 경진대회',
      award: '우수상',
      date: '2024.05.17',
      organization: '영남대학교 | SW중심대학 사업단 | C++',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaTrophy className="text-6xl text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">수상 경력</h1>
          <p className="text-gray-600 text-lg">
            대회 및 공모전에서 받은 수상 내역입니다.
          </p>
        </div>

        {/* Awards List */}
        <div className="space-y-6">
          {awards.map((award, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      {award.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {award.organization}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      variant="default"
                      className="text-base px-4 py-1 bg-yellow-500 hover:bg-yellow-600"
                    >
                      {award.award}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      {award.date}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
