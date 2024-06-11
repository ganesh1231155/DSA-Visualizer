import { count } from "firebase/firestore";

class elem{
    constructor(data,addr){
        this.data=data;
        this.next=null;
        this.address=addr;
    }
}
export default class LinkedList{
    constructor(){
        this.arr=[];
        this.head=null;
        this.tail=null;
        this.prev=null;
        this.t=null;

    }
    clearLL(){
        this.head=null;
        this.tail=null;
    }
    isNull(){
        if(this.head==null){
            return true;
        }
        return false;
    }
    getHead(){
        return  this.head.address;
    }
    getTail(){
        console.log("Tail in getTail : ",this.tail);
        return this.tail.address;
    }

    insert(data,address){
        let node=new elem(data,address);
        if(this.head==null)
        {
            this.head=node;
            this.tail=node;

        }
        else{
            this.tail.next=node;
            this.tail=node;
        }
    }
    insertAtStart(data,address){
            let node=new elem(data,address);
            if(this.head==null)
            {
                this.head=node;
                this.tail=node;

            }
            else{
                node.next=this.head;
                this.head=node;
            }
    }

    insertAtPosition(pos,data,address){
        console.log("In InsertAtPosition")
        console.log("Address : "+address);
        let node=new elem(data,address);
        let temp=this.head;
        let i=1;
        for(i=1;i<pos;i++){
            temp=temp.next;
        }
        node.next=temp.next;
        temp.next=node;
        console.log(JSON.stringify(temp));
    }
    // for (i = 1; i < pos - 1; i++) {
    //     this.temp = this.temp.next;
    //   }
    //   nn.next = this.temp.next.next;
    //   this.temp.next = nn;


    display(){
        this.arr=[];
        this.addr=[];
        this.t=this.head;
        while(this.t!=null){
            this.arr.push(this.t.data);
            this.addr.push(this.t.address);
            this.t=this.t.next;
        }
        return [this.arr,this.addr];
    }

    deleteElemStart(){
        if(this.head!=null){
            this.head=this.head.next;
        }
    }
    deleteElemEnd(){
        this.temp = this.head;
        
        while (this.temp.next.next != null) {
            this.temp = this.temp.next;
        }
        this.last = this.temp;
        this.last.next = null;
        this.tail=this.last;
    }
    // DeleteAtEnd() {
    //     this.temp = this.head;
        
    //     while (this.temp.next.next != null) {
    //         this.temp = this.temp.next;
    //     }
    //     this.last = this.temp;
    //     this.last.next = null;
        
    // }

    deleteElem(pos){
        console.log("Head : ",this.head);
        this.t=this.head;

        for(var i=0;i<pos-1;i++){
            this.prev=this.t;
            this.t=this.t.next;
        }
        console.log("Prev : ",this.prev);
        console.log("Prev : ",this.t);
        this.prev.next=this.t.next;
        delete(this.t);
        
        // console.log("prev next before :",prev.next.data);
        // prev.next=prev.next.next;
        // console.log("prev next after : ",prev.next.data);
        
    }

}
