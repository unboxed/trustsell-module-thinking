// The UI is being rebuilt from scratch — see docs/ui-foundation.md (the single
// source of truth). Build the six-node canvas here.
//
// Available to build with:
//   - lib/modules.ts        readModuleBodies() — reads each module's CLAUDE.md live
//   - lib/blueprint.config.ts  ALL_MODULE_IDS — the six module ids, in order
//
// This is an intentionally empty slate. Nothing of the old "blueprint" UI remains.

export default function Home() {
  return <main className="min-h-screen" />;
}
