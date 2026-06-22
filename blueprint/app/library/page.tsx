import { readLibrary, readModules } from "@/lib/modules";
import { LibraryView, type LibraryModule } from "@/components/library/library-view";

// The library is a live mirror of the module docs, one notch below the canvas:
// every assembly and signal floor (<module>/assemblies/*.md, <module>/signals/*.md)
// read straight from disk per request (readLibrary → connection(), no caching). A
// `?module=<id>` search param pre-selects a shelf — that is how a canvas node click
// lands here filtered to its module. Edit a doc and reload: the cards update.
export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ module?: string }>;
}) {
  const [{ assemblies, signals }, modules, { module }] = await Promise.all([
    readLibrary(),
    readModules(),
    searchParams,
  ]);

  // The shelves, in module order — name/title/icon for the filter rail and the
  // small module tag each card wears.
  const shelves: LibraryModule[] = modules.map((m) => ({
    id: m.id,
    name: m.meta.name,
    title: m.meta.title,
    icon: m.meta.icon,
  }));

  return (
    <LibraryView
      assemblies={assemblies}
      signals={signals}
      modules={shelves}
      initialModule={module ?? null}
    />
  );
}
