import NavigationMenu from "prelude/components/navigation-menu";

const DefaultLayout = {
  template: `
    <div class="w-full mx-4 xl:mx-auto xl:max-w-3xl">
      <navigation-menu></navigation-menu>
      <slot></slot>
    </div>
  `,
  components: {
    NavigationMenu,
  }
}

export default DefaultLayout;
