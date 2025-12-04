import {Badge} from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ProjectCard({
  project,
}: {
  project: {title: string; description: string; tags: string[]};
}) {
  return (
    <Card key={project.title} className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
