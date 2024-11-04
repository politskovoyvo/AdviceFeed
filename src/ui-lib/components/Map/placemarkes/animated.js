// Нет описания тайпскрипта
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/// @ts-nocheck
const icon = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 17.1402C6 9.32042 12.4065 3 20.1557 3C27.9269 3 34.3333 9.32042 34.3333 17.1402C34.3333 21.0807 32.9283 24.739 30.6158 27.8397C28.0647 31.26 24.9203 34.24 21.3809 36.5791C20.5709 37.1197 19.8398 37.1605 18.9507 36.5791C15.3912 34.24 12.2468 31.26 9.7175 27.8397C7.40331 24.739 6 21.0807 6 17.1402ZM14.667 17.5325C14.667 20.5658 17.1319 22.9515 20.1541 22.9515C23.1784 22.9515 25.667 20.5658 25.667 17.5325C25.667 14.5227 23.1784 12.0209 20.1541 12.0209C17.1319 12.0209 14.667 14.5227 14.667 17.5325Z" fill="url(#paint0_linear_418_121)"/>
  <defs>
    <linearGradient id="paint0_linear_418_121" x1="6.70833" y1="8.66667" x2="40.0543" y2="30.6066" gradientUnits="userSpaceOnUse">
      <stop stop-color="#943AFD"/>
      <stop offset="0.702447" stop-color="#B039EC"/>
    </linearGradient>
  </defs>
</svg>`;
const animatedLayout = (disabled) => {
    const layout = window.ymaps.templateLayoutFactory.createClass(`<div style="position: relative" class="placemark">${icon}</div>`, {
        build: function () {
            layout.superclass.build.call(this);
            const element = this.getParentElement().getElementsByClassName('placemark')[0];
            const size = 40;
            this.getData().options.set('shape', { type: 'Circle', coordinates: [20, 20], radius: size / 2 });
            if (!this.inited && !disabled) {
                this.getData().geoObject.events.add('mousedown', () => element.classList.add('drag'), this);
                this.getData().geoObject.events.add(['mouseup', 'dragend'], () => element.classList.remove('drag'), this);
            }
        }
    });
    return layout;
};

export { animatedLayout };
