export const template = `
  <!-- ko let: { $nodes: $componentTemplateNodes, $ctx: $parent } -->
  <c-portal params="parent: parent" data-bind="descendantsComplete: onRender,">
    <!-- ko if: open -->

      <!-- ko if: modal -->
      <div class="c-dropdown-mask" data-bind="click: function() { open(false)}"></div>
      <!-- /ko -->

      <div class="c-dropdown" 
        data-bind="
          bDropdown: params, 
          inactive: modal,
          target: '#' + target,
          class: className,
          css: { 'modal': modal }">

          <!-- ko if: modal -->
          <div class="c-dropdown__close" data-bind="click: function() { open(false); }">
            &times;
          </div>
          <!-- /ko -->

          <div class="c-dropdown__content">
            <!-- ko using: $ctx -->
              <!-- ko template: { nodes: $nodes } -->
              <!-- /ko -->
            <!-- /ko -->
          </div>
      </div>

    <!-- /ko -->
  </c-portal>
  <!-- /ko -->
`;
