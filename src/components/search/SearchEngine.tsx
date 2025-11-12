import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { searchCommands, SearchResult } from '@/data/searchCommands';

export const SearchEngine = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;

    setIsSearching(true);
    
    setTimeout(() => {
      const matchedCommand = searchCommands.find(cmd => 
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        query.toLowerCase().includes(cmd.command.toLowerCase())
      );

      setResults(matchedCommand?.results || []);
      setIsSearching(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
          Academic Search Engine
        </h1>
        <p className="text-muted-foreground text-lg">
          Discover curated research papers and technical solutions
        </p>
      </div>

      <div className="relative">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative flex gap-2 bg-card/30 backdrop-blur-xl p-2 rounded-xl border border-border/30">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5 group-hover:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Try: Arduino sensor not responding..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 h-14 text-lg bg-secondary/30 backdrop-blur-sm border-border/30 focus:border-primary/50 transition-all"
              />
            </div>
            <Button 
              onClick={handleSearch} 
              className="h-14 px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              disabled={isSearching}
            >
              {isSearching ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>
      </div>

      {results.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-2xl font-semibold text-foreground">
            Search Results ({results.length})
          </h2>
          <div className="grid gap-4">
            {results.map((result, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm bg-card/80 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {result.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {result.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="group-hover:border-primary group-hover:text-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all"
                    asChild
                  >
                    <a href={result.url} target="_blank" rel="noopener noreferrer">
                      Visit Source →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {query && results.length === 0 && !isSearching && (
        <Card className="backdrop-blur-sm bg-card/80">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              No results found. Try one of our suggested commands:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {searchCommands.map((cmd, i) => (
                <li key={i} className="cursor-pointer hover:text-primary transition-colors" onClick={() => setQuery(cmd.command)}>
                  • {cmd.command}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
