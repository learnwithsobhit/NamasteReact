#The Diffing Algorithm
    When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

    There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

    If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

    Two elements of different types will produce different trees.
    The developer can hint at which child elements may be stable across different renders with a key prop.
    In practice, these assumptions are valid for almost all practical use cases.

    ##When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements. (https://reactjs.org/docs/reconciliation.html)
    
  # Babel is compiler which create polyfill.

