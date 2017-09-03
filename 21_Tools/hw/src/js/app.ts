import '../scss/style.scss';

export class DialogComponent {
    private dialog: HTMLElement;
  
    initContent(content: string) {
      this.dialog
        .getElementsByClassName('dialog_content')[0]
        .innerHTML = content;
    }
  }  