let reverseList = function(head) {
    function revertList(node) {
        if (node == null || node.next == null) {
            return node;
        }

        let nodeList = revertList(node.next)

        let t1 = node.next;

        t1.next = node;

        node.next = null

        return nodeList
    }

    return revertList(head)
};
