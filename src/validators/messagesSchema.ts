export const messageSchema = {
  id: "/message",
  type: "object",
  properties: {
    source: { type: "string" },
    destination: { type: "string" },
    message: { type: "string" },
  },
  required: ["source", "destination", "message"],
};
