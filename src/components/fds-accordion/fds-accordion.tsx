import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'fds-accordion',
  styleUrl: 'fds-accordion.scss',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() header: string;
  @Prop() accordionId: string;

  @Prop() showInfo: boolean;

  @State() open: boolean = false;

  render() {
    console.log(this.open)
    return (
      <ul class="accordion accordion-multiselectable">
          <li>
              <h2><button onClick={() => this.open = !this.open} class="accordion-button" aria-expanded={this.open ? 'true' : 'false'}
                      aria-controls={this.accordionId}>
                      {this.header}
                      {this.showInfo ? <span class="accordion-icon">
                          <span class="icon_text">Information</span>
                          <svg class="icon-svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
                      </span> : undefined}
                  </button></h2>
              <div id={this.accordionId} aria-hidden={this.open ? 'false' : 'true'} class="accordion-content">
                  <slot name="accordion-body" />
              </div>
          </li>
      </ul>
    );
  }
}
