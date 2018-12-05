class Node1 {
    value: any;
    next: null;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    head: any = null;
    len: number = 0
    add(value: any) {
        let node = new Node1(value);
        let current: any;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }

    show(pos: number) {
        if (pos > -1 && pos < this.len) {
            let current: any = this.head;
            let index: number = 0;
            let previous: any;
            while (index++ < pos) {
                previous = current;
                current = current.next;
            }
            console.log(`${current.value}`);
        } else {
            return false;
        }
    }
    showall(){
        let current : any = this.head;
        let previous : any;
        let i : number = 0;
        while(i++<=this.len){
            previous = current;
            console.log(`${current.value}`);
            current = current.next;      
        }
    }
}
class LinkedListExtend extends LinkedList{
    insert(value:any,pos:number){
        if(pos > -1 && pos < this.len){
        let node = new Node1(value);
        let current: any = this.head;
        let index:number = 0;
        let previous: any;
        if(pos === 0){
            node.next = current;
            this.head = node;
        }else{
            while(index++<pos){
                previous = current;
                current = current.next;
            }
            previous.next = node;
            node.next = current;
        }
    }else{
        return false;
    }

    }
    delete(pos: number) {
        if (pos > -1 && pos < this.len) {
            let current: any = this.head;
            let index: number = 0;
            let previous: any;
            while (index++ < pos) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        } else {
            return false;
        }
    }
}

var list = new LinkedListExtend;
list.add(5);
list.add('hay hay');
list.add(6);
list.add(7);
list.insert(8,2);
//list.delete(2);
console.log(list.show(1));
console.log(list.showall());
