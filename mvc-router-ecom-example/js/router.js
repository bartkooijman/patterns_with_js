// Simple client-side router
class Router {
  constructor() {
    this.routes = [];
  }

  addRoute(route, handler) {
    this.routes.push({ route, handler });
  }

  navigate() {
    const path = location.hash.slice(1);
    const route = this.routes.find(r => r.route === path);
    if (route) {
      route.handler();
    }
  }
}
