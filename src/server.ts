import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hola desde Example TS App" });
});

// Export the app for testing. Only start listening when this file
// is run directly to avoid opening network ports during tests.
export default app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
