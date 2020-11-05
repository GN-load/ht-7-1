class StringBuilder {
    constructor(obj) {
        this.string = obj.string
    }

    value() {
        console.log(this.string)
    }

    append(str) {
        const strAppend = this.string + str;
        console.log(strAppend)
    }

    prepend(str) {
        const strPrepend = str + this.string;
        console.log(strPrepend)
    }

    pad(str) {
        const strPad = str + this.string + str;
        console.log(strPad)
    }
};

const obj = new StringBuilder({
    string: 'MaksLox'
})