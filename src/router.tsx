import { routeTree } from "./routeTree.gen";
import { createRouter as createTanStackRouter } from "@tanstack/react-router";

export const getRouter = () => {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
  });

  return router;
};

declare module "@tanstack/react-router" {
  // Module augmentation needs an interface: a type alias cannot merge into the library's declaration.
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
