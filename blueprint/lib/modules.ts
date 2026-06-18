import { connection } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { ALL_MODULE_IDS, type ModuleId } from "./blueprint.config";

/**
 * Reads each module's CLAUDE.md straight from disk at request time so the map
 * always reflects the current thinking. `connection()` opts out of caching
 * (Next 16 removed `export const dynamic`). MODULES_DIR points at the workspace
 * root (set to /work by docker compose); locally it defaults to the parent of
 * the blueprint app. The source docs are read, never written.
 */
export async function readModuleBodies(): Promise<Record<ModuleId, string>> {
  await connection();
  const root = process.env.MODULES_DIR ?? path.join(process.cwd(), "..");

  const entries = await Promise.all(
    ALL_MODULE_IDS.map(async (id) => {
      try {
        const body = await fs.readFile(
          path.join(root, id, "CLAUDE.md"),
          "utf8",
        );
        return [id, body] as const;
      } catch {
        return [id, ""] as const;
      }
    }),
  );

  return Object.fromEntries(entries) as Record<ModuleId, string>;
}
