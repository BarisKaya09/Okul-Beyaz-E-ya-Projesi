// mesaj kutuları
export default class MessageBox {
  // süre
  duration = 3000;
  constructor(message = 'Hata Mesajı', id, element) {
    this.message = message;
    this.element = element;
    this.uniqe_id = id;

    this.element.innerHTML += `
    <div id="${this.uniqe_id}" class=" w-56 h-8 mt-2 bg-gray-100 border-l-4 shadow-xl border-red-500 text-left flex">
        <div class=" h-5/6 w-5/6 px-4 py-1">
            ${this.message}
        </div>

        <div class="h-1/6 mt-1">
            <i class="fa-solid fa-spinner animate-spin"></i>
        </div>
    </div>
    `;

    setTimeout(() => {
      const element_to_be_deleted = document.getElementById(this.uniqe_id);
      this.element.removeChild(element_to_be_deleted);
    }, this.duration);
  }
}
