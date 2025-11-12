import { useState } from 'react';
import { BookOpen, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { researchPapers, ResearchPaper } from '@/data/researchPapers';

const categories = ['All', 'Software', 'Hardware', 'Design', 'Innovation', 'Research'] as const;

export const ResearchPapers = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPapers = selectedCategory === 'All' 
    ? researchPapers 
    : researchPapers.filter(paper => paper.category === selectedCategory);

  const getCategoryColor = (category: ResearchPaper['category']) => {
    const colors = {
      Software: 'bg-primary/20 text-primary border-primary/30',
      Hardware: 'bg-accent/20 text-accent border-accent/30',
      Design: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      Innovation: 'bg-green-500/20 text-green-400 border-green-500/30',
      Research: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    };
    return colors[category];
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <BookOpen className="h-12 w-12 text-primary" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Research Papers
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Explore {researchPapers.length} curated research papers across 5 categories
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center items-center">
        <Filter className="h-5 w-5 text-muted-foreground" />
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="transition-all duration-300"
          >
            {category}
            {category !== 'All' && (
              <Badge variant="secondary" className="ml-2">
                {researchPapers.filter(p => p.category === category).length}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPapers.map((paper, index) => (
          <Card
            key={index}
            className="group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm bg-card/80 hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CardHeader className="space-y-3">
              <Badge className={`w-fit ${getCategoryColor(paper.category)} transition-all group-hover:scale-105`}>
                {paper.category}
              </Badge>
              <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2 flex items-start gap-2">
                <BookOpen className="h-4 w-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                {paper.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {paper.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full group-hover:border-primary group-hover:text-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all"
                asChild
              >
                <a href={paper.url} target="_blank" rel="noopener noreferrer">
                  Read Paper →
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPapers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No papers found in this category
          </p>
        </div>
      )}
    </div>
  );
};
