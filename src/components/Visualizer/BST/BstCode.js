class node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }

}

export default class binaryTree{
    constructor(){
        this.root=null;
        this.array=[];
        this.inOrderArr=[];

    }
    clearTree(){
        this.root=null;
    }

   
    insertNode(node,nn){
        if(nn.data<node.data){
            if(node.left==null){
                node.left=nn;
            }
            else{
                this.insertNode(node.left,nn);
            }
        }
        if(nn.data>node.data){
            if(node.right==null){
                node.right=nn;
            }
            else{
                this.insertNode(node.right,nn);
            }

        }

    }
    insert(data){
        let nn =new node(data);
        if(this.root==null){
            this.root=nn;
        }
        else{
            this.insertNode(this.root,nn);
        }
    }
    
    getArray(){
        this.array=[];
        if(this.root!=null)
        {
            this.getNode(this.root);
        }
        return this.array;
    }
    getNode(root)
    {
        if(root!=null)
            this.array.push(root.data);
        if(root.left!=null){
            this.getNode(root.left);
        }
        if(root.right!=null){
            this.getNode(root.right);
        }
    }

    remove(data)
    {
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.removeNode(this.root, data);
    }
    findMinNode(node)
    {
        // if left of a node is null
        // then it must be minimum node
        if(node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
// Method to remove node with a 
// given data
// it recur over the tree to find the
// data and removes it
    removeNode(node, key)
    {
            
        // if the root is null then tree is 
        // empty
        if(node === null)
            return null;
    
        // if data to be delete is less than 
        // roots data then move to left subtree
        else if(key < node.data)
        {
            node.left = this.removeNode(node.left, key);
            return node;
        }
    
        // if data to be delete is greater than 
        // roots data then move to right subtree
        else if(key > node.data)
        {
            node.right = this.removeNode(node.right, key);
            return node;
        }
    
        // if data is similar to the root's data 
        // then delete this node
        else
        {
            // deleting node with no children
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }
    
            // deleting node with one children
            if(node.left === null)
            {
                node = node.right;
                return node;
            }
            
            else if(node.right === null)
            {
                node = node.left;
                return node;
            }
    
            // Deleting node with two children
            // minimum node of the right subtree
            // is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
    
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    
    }
    inOrder(){
        
        if(this.root!==null)
        {
            this.inOrderArr=[];
            this.inorder(this.root);
            return this.inOrderArr;
        }
    }
    
    inorder(node)
    {
        if(node !== null)
        {
            if(node.left!==null)
            {
                this.inorder(node.left);
            }
            this.inOrderArr.push(node.data);
            if(node.right!==null)
            {
                this.inorder(node.right);
            }
        }
    }


    preOrder(){
        
        if(this.root!==null)
        {
            this.preOrderArr=[];
            this.preorder(this.root);
            return this.preOrderArr;
        }
    }

    preorder(node)
    {
        if(node !== null)
        {
            this.preOrderArr.push(node.data);
            if(node.left!==null)
            {
                this.preorder(node.left);
            }
            if(node.right!==null)
            {
                this.preorder(node.right);
            }
        }
    }
    postOrder(){
        if(this.root!==null)
        {
            this.postOrderArr=[];
            this.postorder(this.root);
            return this.postOrderArr;
        }
    }
    postorder(node)
    {
        if(node !== null)
        {
            if(node.left!==null)
            {
                this.postorder(node.left);
            }
            if(node.right!==null)
            {
                this.postorder(node.right);
            }
            this.postOrderArr.push(node.data);
        }
    }
    getRootNode()
    {
        return this.root;
    }
}
