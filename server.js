import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const server = new McpServer({
  name: "my-claude-plugin-mcp",
  version: "0.1.0",
});

server.registerTool(
  "echo",
  {
    title: "Echo",
    description: "Echoes back the given text. Replace with real tools.",
    inputSchema: { text: z.string() },
  },
  async ({ text }) => ({
    content: [{ type: "text", text }],
  })
);

const transport = new StdioServerTransport();
await server.connect(transport);
