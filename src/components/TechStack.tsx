
import { Badge } from "@/components/ui/badge";
import { 
  Code, Database, Server, Globe, Cloud, Terminal,
  Smartphone, Zap, Settings, GitBranch, ChartArea
} from "lucide-react";

const TechStack = () => {
  const tools = [
    { name: "SQL", icon: Code },
    { name: "Python", icon: Code },
    { name: "Scikit-learn", icon: Code },
    { name: "XGBoost", icon: Code },
    { name: "Jupyter", icon: Code },
    { name: "RStudio", icon: Code },
    { name: "Retool", icon: Settings },
    { name: "Looker", icon: ChartArea },
    { name: "Sigma", icon: ChartArea },
    { name: "Salesforce", icon: Cloud },
    { name: "Smartsheet", icon: Cloud },
    { name: "Asana", icon: Cloud },
    { name: "Monday.com", icon: Cloud },
    { name: "Jira", icon: Cloud },
    { name: "Figma", icon: Cloud },
    { name: "Pendo", icon: Cloud },
    { name: "SuperOps", icon: Cloud },
    { name: "Snowflake", icon: Database },
    { name: "Postgres", icon: Database },
    { name: "Supabase", icon: Database },
    { name: "GitHub", icon: GitBranch },
    { name: "Datadog", icon: Settings },
    { name: "Fivetran", icon: Settings },
    { name: "Parseur", icon: Settings },
    { name: "Finch", icon: Settings },
    { name: "Auth0", icon: Settings },
    { name: "Entra ID", icon: Settings }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((tech) => {
        const IconComponent = tech.icon;
        return (
          <Badge 
            key={tech.name} 
            variant="secondary" 
            className="text-xs px-3 py-1.5 bg-zinc-100 text-zinc-700 border border-zinc-200 flex items-center gap-1.5"
          >
            <IconComponent size={14} />
            {tech.name}
          </Badge>
        );
      })}
    </div>
  );
};

export default TechStack;
