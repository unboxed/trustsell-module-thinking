import { readLibrary, readModules } from "@/lib/modules";
import { Playbook, type LibraryModule } from "@/components/library/playbook";

// The Playbook is a live mirror of the module docs, one notch below the canvas:
// every assembly and signal floor (<module>/assemblies/*.md, <module>/signals/*.md)
// read straight from disk per request (readLibrary → connection(), no caching).
// `?module=<id>` pre-selects a shelf (how a canvas node click lands here filtered);
// `?play=<module>/<id>` deep-links straight to one play's spread. Edit a doc and
// reload: the cards update.
export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ module?: string; play?: string }>;
}) {
  const [{ assemblies, signals }, modules, { module, play }] = await Promise.all([
    readLibrary(),
    readModules(),
    searchParams,
  ]);

  // The shelves, in module order — name/title/icon for the spine and the small
  // module tag each card wears.
  const shelves: LibraryModule[] = modules.map((m) => ({
    id: m.id,
    name: m.meta.name,
    title: m.meta.title,
    icon: m.meta.icon,
  }));

  return (
    <Playbook
      assemblies={assemblies}
      signals={signals}
      modules={shelves}
      initialModule={module ?? null}
      initialPlay={play ?? null}
    />
  );
}
