# my-claude-plugin

Skeleton [Claude Code](https://claude.com/claude-code) plugin bundling an MCP server and a hook, ready to extend.

## What's here

- `.claude-plugin/plugin.json` — plugin manifest.
- `.mcp.json` — declares the `my-claude-plugin-mcp` MCP server (`server.js`), currently exposing one stub `echo` tool.
- `hooks/hooks.json` — a `PreToolUse` hook (matches every tool) that runs `scripts/log-tool-use.sh`, which logs the tool name to stderr and never blocks.
- `server.js` — MCP server implementation (Node, `@modelcontextprotocol/sdk`).
- `scripts/log-tool-use.sh` — the hook's shell script.

## Setup

```bash
npm install
```

## Install locally for development

```bash
claude plugin install --plugin-dir /path/to/my-claude-plugin
```

Or add this repo as a marketplace source and install from there — see the [plugin docs](https://docs.claude.com/en/docs/claude-code/plugins).

## Extending

- Add more MCP tools in `server.js` via `server.registerTool(...)`.
- Add more hook events/matchers in `hooks/hooks.json` (see [hooks reference](https://docs.claude.com/en/docs/claude-code/hooks)).
- Add `commands/`, `agents/`, or `skills/` directories — they're auto-discovered by name.

## License

MIT
