import path from "path";
import { RouteGenerator, readFile } from "../../utils";

const updateRouter = new RouteGenerator("/update");

let router = updateRouter.router;

router.get("/checkVersion", async (req, res) => {
  const content = await readFile(path.resolve(__dirname, "../../testFile.txt"));
  res.send({
    code: 200,
    content,
  });
});

export { updateRouter };
