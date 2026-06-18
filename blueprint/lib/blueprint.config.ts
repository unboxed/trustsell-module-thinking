/**
 * The six modules of the system, in order. Each id maps to a folder whose
 * CLAUDE.md holds that module's current notes (read live by lib/modules.ts).
 *
 * Titles and descriptions for the UI live in docs/ui-foundation.md —
 * that document is the single source of truth for the interface.
 */

export type ModuleId =
  | "00-spine"
  | "01-integrations"
  | "02-relationships"
  | "03-offerings"
  | "04-organization"
  | "05-persona-you";

export const ALL_MODULE_IDS: ModuleId[] = [
  "00-spine",
  "01-integrations",
  "02-relationships",
  "03-offerings",
  "04-organization",
  "05-persona-you",
];
