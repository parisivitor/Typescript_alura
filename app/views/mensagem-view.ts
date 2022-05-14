import { View } from "./view.js";

export class MensagemVeiw extends View<string>{

  template(model: string): string{
    return `
      <p class="alert alert-info">${model}</p>
    `;
  }

}
