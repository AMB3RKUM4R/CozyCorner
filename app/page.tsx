import TemplateGrid from "@/components/main/TemplateGrid";
import { web2_templates } from "@/constants/templates";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col items-center justify-center">
        <TemplateGrid templates={web2_templates} title="Cozy Corner" />
      </div>
    </main>
  );
}