var Elevador = {
    andar: 0,
    numero: 3,
    up() {
        if (this.andar < this.numero) {
            this.andar++;
        }
        this.print();
    },
    down() {
        if (this.andar < 0) {
            this.andar--;
        }
        this.print();
    },
    print() {
        console.log(`Andar: ${this.andar}`);
    },
};

Elevador.print();
