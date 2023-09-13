import { serve } from "bun";
 try {
  serve({
    port: Bun.env.port || 3000,
    fetch(req, server) {
      return new Response("Hello World");
    },
   });
   console.log(`Listening on http://localhost:${Bun.env.port} ...`);
 } catch (error) {
   console.log(`Error: ${error}`);
 }

 