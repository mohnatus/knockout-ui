import { components } from "knockout";

export function registerComponent(name, { model, template }) {
  if (components.isRegistered(name)) return;

  components.register(name, {
    viewModel: {
      createViewModel: (params, componentInfo) => {
        return model(params, componentInfo.element);
      }
    },
    template
  });
}
