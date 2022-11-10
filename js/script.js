	class Node {
		constructor() {
		this.data = 0;
		this.next = null;
		}
	}

	function getNode(data) {
		var newNode = new Node();
		newNode.data = data;
		newNode.next = null;
		return newNode;
	}

	function insertAfterNthNode(head, n, x) {
		if (head == null) return;

		var newNode = getNode(x);
		var slow_ptr = head;
		var fast_ptr = head;
		for (var i = 1; i <= n - 1; i++)
		fast_ptr = fast_ptr.next;
		while (fast_ptr.next != null) {
			slow_ptr = slow_ptr.next;
			fast_ptr = fast_ptr.next;
		}

		newNode.next = slow_ptr.next;
		slow_ptr.next = newNode;
	}

	// function to print the list
    var printVal = "";
	function printList(head) {
		while (head != null) {
            // printVal = printVal + " " + head.data;
            // document.getElementById('res').innerHTML = printVal;
		    document.write(head.data + " ");
		    head = head.next;
		}
	}

	var head = getNode(1);
	head.next = getNode(3);
	head.next.next = getNode(4);
	head.next.next.next = getNode(5);

    document.getElementById('btn').addEventListener('click', function(){
        var n = document.getElementById('ind').value;
        var x = document.getElementById('val').value;


        document.write("Original Linked List: ");
	    printList(head);

        insertAfterNthNode(head, n, x);
	    document.write("<br>");
	    document.write("Linked List After Insertion:");
	    printList(head);
    })

	