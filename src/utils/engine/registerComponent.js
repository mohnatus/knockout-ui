import { components } from 'knockout';

export function registerComponent(name, { model, template }) {
	if (components.isRegistered(name)) return;

	components.register(name, {
		viewModel: {
			createViewModel: (params, componentInfo) => {
				return model(params, componentInfo.element);
			},
		},
		template,
	});
}

export function registerComponents(bindings) {
	Object.entries(bindings).forEach(([key, value]) =>
		registerComponent(key, value)
	);
}
