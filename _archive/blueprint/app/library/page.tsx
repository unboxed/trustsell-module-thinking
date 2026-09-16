import { Suspense } from "react";
import { readLibrary, readModules } from "@/lib/modules";
import { Playbook, type LibraryModule } from "@/components/library/playbook";

// The Playbook is a live mirror of the module docs, one notch below the canvas:
// every assembly and signal floor (<module>/assemblies/*.md, <module>/signals/*.md)
// read straight from disk per request (readLibrary → liveRead, no caching; a
// build-time snapshot under STATIC_EXPORT). Deep links (`?module=`, `?play=`) are
// read by the Playbook in the browser, so the page stays exportable as static
// HTML. Edit a doc and reload: the cards update.
export default async function LibraryPage() {
  const [{ assemblies, signals }, modules] = await Promise.all([
    readLibrary(),
    readModules(),
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
    <Suspense>
      <Playbook assemblies={assemblies} signals={signals} modules={shelves} />
    </Suspense>
  );
}
