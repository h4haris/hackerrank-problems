//* We are trying to hack together a smart programming IDE. Help us build a feature which auto-detects the programming language, given the source code. There are only three languages which we are interested in "auto-detecting": Java, C and Python.

// We will provide you with links to a few short or medium size programs for Java, C and Python.In case you aren't familiar with some of these languages, these samples will help you make observations about the lexical structure and syntax of these programming languages. These sample programs are only for your manual inspection. You cannot read or access these sample-programs from the code you submit.

// After this, you will be provided with tests, where you are provided the source code for programs - or partial code snippets, but you do not know which language they are in.For each test, try to detect which language the source code is in.

// You might benefit from using regular expressions in trying to detect the lexical structure and syntax of the programs provided.



//* Sample Programs to Understand the Lexical Structure of different Programming Languages

//! Sample Programs and Code Snippets in C

////?   #include < stdio.h >
////?           /* Logic : Do the following thing until the list is sorted
////?                       (i) Compare two adjacent elements and check if they are in correct order(that is second one has
////?                           to be greater than the first).
////?                       (ii) Swap them if they are not in correct order.
////?            */
////?           void BubbleSort(int * array, int number_of_elements)
////?   {
////?           int iter, temp, swapped
////?           do {
////?                   swapped = 0 /* If no element is swapped array is sorted */
////?                   /* In the following loop compare every pair of adjacent elements and check
////?                      if they are in correct order */
////?                   for (iter = 1; iter < number_of_elements; iter++) {
////?                           if (array[iter - 1] > array[iter]) {
////?                                   temp = array[iter - 1]
////?                                   array[iter - 1] = array[iter]
////?                                   array[iter] = temp
////?                                   swapped = 1
////?                           }
////?                   }
////?
////?           } while (swapped)
////?   }
////?   int main()
////?   {
////?           int number_of_elements
////?           scanf("%d",& number_of_elements);
////?           int array[number_of_elements];
////?           int iter
////?           for (iter = 0; iter < number_of_elements; iter++) {
////?                   scanf("%d",& array[iter])
////?           }
////?           /* Calling this functions sorts the array */
////?           BubbleSort(array, number_of_elements)
////?           for (iter = 0; iter < number_of_elements; iter++) {
////?                   printf("%d ", array[iter])
////?           }
////?           printf("\n")
////?           return 0
////?
////?   }
////?
////?
////?   @@@@
////?
////?   Insertion Sort - C Program Source Code
////?
////?   #include < stdio.h >
////?           /* Logic : Suppose if the array is sorted till index i then we can sort the arry till i+1 by inserting
////?                      i+1 th element in the correct position from 0 to i+1. The position at which (i+1)th element has
////?                      to be inserted has to be found by iterating from 0 to i. As any array is sorted till 0th postion
////?                      (Single element is always sorted) and we know how to expand, we can sort the whole array
////?            */
////?           void InsertionSort(int * array, int number_of_elements)
////?   {
////?           int iter, jter
////?           for (iter = 1; iter < number_of_elements; iter++) {
////?                   int current_element = array[iter]
////?                   jter = iter - 1
////?                   while (jter >= 0 && array[jter] > current_element) {
////?                           array[jter + 1] = array[jter]
////?                           jter--
////?                   }
////?                   array[jter + 1] = current_element
////?           }
////?   }
////?   int main()
////?   {
////?           int number_of_elements
////?           scanf("%d",& number_of_elements);
////?           int array[number_of_elements];
////?           int iter
////?           for (iter = 0; iter < number_of_elements; iter++) {
////?                   scanf("%d",& array[iter])
////?           }
////?           /* Calling this functions sorts the array */
////?           InsertionSort(array, number_of_elements)
////?           for (iter = 0; iter < number_of_elements; iter++) {
////?                   printf("%d ", array[iter])
////?           }
////?           printf("\n")
////?           return 0
////?   }
////?
////?
////?   @@@@
////?
////?   #include<stdio.h>
////?           #include<assert.h>
////?   /* maxVertices represents maximum number of vertices that can be present in the graph. */
////?                   #define maxVertices   100
////?                   void Dfs(int graph[][maxVertices], int *size, int presentVertex,int *visited)
////?                   {
////?                           printf("Now visiting vertex %d\n", presentVertex);
////?                   visited[presentVertex] = 1;
////?                   /* Iterate through all the vertices connected to the presentVertex and perform dfs on those
////?                      vertices if they are not visited before */
////?                   int iter;
////?                   for(iter=0;iter<size[presentVertex];iter++)
////?                   {
////?                   if(!visited[graph[presentVertex][iter]])
////?                   {
////?                           Dfs(graph, size, graph[presentVertex][iter], visited);
////?                   }
////?           }
////?                   return;
////?
////?
////?   }
////?                   /* Input Format: Graph is directed and unweighted. First two integers must be number of vertces and edges
////?                      which must be followed by pairs of vertices which has an edge between them. */
////?                   int main()
////?                   {
////?                           int graph[maxVertices][maxVertices],size[maxVertices]={0},visited[maxVertices]={0};
////?                   int vertices,edges,iter;
////?                   /* vertices represent number of vertices and edges represent number of edges in the graph. */
////?                   scanf("%d%d",&vertices,&edges);
////?                   int vertex1,vertex2;
////?                   for(iter=0;iter<edges;iter++)
////?                   {
////?                           scanf("%d%d",& vertex1,& vertex2);
////?                   assert(vertex1>=0 && vertex1<vertices);
////?                   assert(vertex2>=0 && vertex2<vertices);
////?                   graph[vertex1][size[vertex1]++] = vertex2;
////?           }
////?                   int presentVertex;
////?                   for(presentVertex=0;presentVertex<vertices;presentVertex++)
////?                   {
////?                   if(!visited[presentVertex])
////?                   {
////?                           Dfs(graph, size, presentVertex, visited);
////?                   }
////?           }
////?                   return 0;
////?
////?
////?
////?   }
////?
////?                   @@@@
////?
////?                   #include<stdio.h>
////?                           #include<stdlib.h>
////?                                   #include<assert.h>
////?   /* maxVertices represents maximum number of vertices that can be present in the graph. */
////?                                           #define maxVertices   100
////?                                           /*Queue has five properties. capacity stands for the maximum number of elements Queue can hold.
////?                                             Size stands for the current size of the Queue and elements is the array of elements. front is the
////?                                            index of first element (the index at which we remove the element) and rear is the index of last element
////?                                            (the index at which we insert the element) */
////?                                           typedef struct Queue
////?                                           {
////?                                                   int capacity;
////?                                           int size;
////?                                           int front;
////?                                           int rear;
////?                                           int *elements;
////?   }Queue;
////?                                           /* crateQueue function takes argument the maximum number of elements the Queue can hold, creates
////?                                              a Queue according to it and returns a pointer to the Queue. */
////?                                           Queue * CreateQueue(int maxElements)
////?                                           {
////?                                                   /* Create a Queue */
////?                                                   Queue * Q;
////?                                           Q = (Queue *)malloc(sizeof(Queue));
////?           /* Initialise its properties */
////?           Q->elements = (int *)malloc(sizeof(int)*maxElements);
////?           Q->size = 0;
////?           Q->capacity = maxElements;
////?           Q->front = 0;
////?           Q->rear = -1;
////?                                           /* Return the pointer */
////?                                           return Q;
////?   }
////?                                           void Dequeue(Queue *Q)
////?                                           {
////?           /* If Queue size is zero then it is empty. So we cannot pop */
////?           if(Q->size==0)
////?                                           {
////?                                                   printf("Queue is Empty\n");
////?                                           return;
////?           }
////?                                           /* Removing an element is equivalent to incrementing index of front by one */
////?                                           else
////?                                           {
////?                                                   Q -> size--;
////?                   Q->front++;
////?                   /* As we fill elements in circular fashion */
////?                   if(Q->front==Q->capacity)
////?                                           {
////?                                                   Q -> front=0;
////?                   }
////?           }
////?                                           return;
////?   }
////?                                           int Front(Queue *Q)
////?                                           {
////?           if(Q->size==0)
////?                                           {
////?                                                   printf("Queue is Empty\n");
////?                                           exit(0);
////?           }
////?           /* Return the element which is at the front*/
////?           return Q->elements[Q->front];
////?   }
////?                                           void Enqueue(Queue *Q,int element)
////?                                           {
////?           /* If the Queue is full, we cannot push an element into it as there is no space for it.*/
////?           if(Q->size == Q->capacity)
////?                                           {
////?                                                   printf("Queue is Full\n");
////?           }
////?                                           else
////?                                           {
////?                                                   Q -> size++;
////?                   Q->rear = Q->rear + 1;
////?                   /* As we fill the queue in circular fashion */
////?                   if(Q->rear == Q->capacity)
////?                                           {
////?                                                   Q -> rear = 0;
////?                   }
////?                   /* Insert the element in its rear side */
////?                   Q->elements[Q->rear] = element;
////?           }
////?                                           return;
////?   }
////?
////?
////?
////?                                           void Bfs(int graph[][maxVertices], int *size, int presentVertex,int *visited)
////?                                           {
////?                                                   visited[presentVertex] = 1;
////?                                           /* Iterate through all the vertices connected to the presentVertex and perform bfs on those
////?                                              vertices if they are not visited before */
////?                                           Queue *Q = CreateQueue(maxVertices);
////?                                           Enqueue(Q,presentVertex);
////?           while(Q->size)
////?                                           {
////?                                                   presentVertex = Front(Q);
////?                                           printf("Now visiting vertex %d\n",presentVertex);
////?                                           Dequeue(Q);
////?                                           int iter;
////?                                           for(iter=0;iter<size[presentVertex];iter++)
////?                                           {
////?                           if(!visited[graph[presentVertex][iter]])
////?                                           {
////?                                                   visited[graph[presentVertex][iter]] = 1;
////?                                           Enqueue(Q,graph[presentVertex][iter]);
////?                           }
////?                   }
////?           }
////?                                           return;
////?
////?
////?   }
////?                                           /* Input Format: Graph is directed and unweighted. First two integers must be number of vertces and edges
////?                                              which must be followed by pairs of vertices which has an edge between them. */
////?                                           int main()
////?                                           {
////?                                                   int graph[maxVertices][maxVertices],size[maxVertices]={0},visited[maxVertices]={0};
////?                                           int vertices,edges,iter;
////?                                           /* vertices represent number of vertices and edges represent number of edges in the graph. */
////?                                           scanf("%d%d",&vertices,&edges);
////?                                           int vertex1,vertex2;
////?                                           for(iter=0;iter<edges;iter++)
////?                                           {
////?                                                   scanf("%d%d",& vertex1,& vertex2);
////?                   assert(vertex1>=0 && vertex1<vertices);
////?                   assert(vertex2>=0 && vertex2<vertices);
////?                                           graph[vertex1][size[vertex1]++] = vertex2;
////?           }
////?                                           int presentVertex;
////?                                           for(presentVertex=0;presentVertex<vertices;presentVertex++)
////?                                           {
////?                   if(!visited[presentVertex])
////?                                           {
////?                                                   Bfs(graph, size, presentVertex, visited);
////?                   }
////?           }
////?                                           return 0;
////?
////?
////?
////?   }


//! Sample Programs and Code Snippets in Java

////?   /*
////?           Calculate Circle Area using Java Example
////?           This Calculate Circle Area using Java Example shows how to calculate
////?           area of circle using it's radius.
////?   */
////?   
////?   import java.io.BufferedReader
////?   import java.io.IOException
////?   import java.io.InputStreamReader
////?   
////?   public class CalculateCircleAreaExample {
////?   
////?           public static void main(String[] args) {
////?                  
////?                   int radius = 0
////?                   System.out.println("Please enter radius of a circle")
////?   
////?                   try {
////?                           //get the radius from console
////?                           BufferedReader br = new BufferedReader(new InputStreamReader(System.in))
////?                           radius = Integer.parseInt(br.readLine())
////?                   }
////?                   //if invalid value was entered
////?                   catch (NumberFormatException ne)
////?                   {
////?                           System.out.println("Invalid radius value" + ne)
////?                           System.exit(0)
////?                   }
////?                   catch (IOException ioe)
////?                   {
////?                           System.out.println("IO Error :" + ioe)
////?                           System.exit(0)
////?                   }
////?   
////?                   /*
////?                    * Area of a circle is
////?                    * pi * r * r
////?                    * where r is a radius of a circle.
////?                    */
////?   
////?                   //NOTE : use Math.PI constant to get value of pi
////?                   double area = Math.PI * radius * radius
////?   
////?                   System.out.println("Area of a circle is " + area)
////?           }
////?   }
////?   
////?   /*
////?   Output of Calculate Circle Area using Java Example would be
////?   Please enter radius of a circle
////?   19
////?   Area of a circle is 1134.1149479459152
////?   */
////?   
////?   @@@@
////?   
////?   /*
////?           Calculate Rectangle Area using Java Example
////?           This Calculate Rectangle Area using Java Example shows how to calculate
////?           area of Rectangle using it's length and width.
////?   */
////?    
////?   import java.io.BufferedReader
////?   import java.io.IOException
////?   import java.io.InputStreamReader
////?   
////?   public class CalculateRectArea {
////?   
////?           public static void main(String[] args) {
////?                  
////?                   int width = 0;
////?                   int length = 0
////?   
////?                   try {
////?                           //read the length from console
////?                           BufferedReader br = new BufferedReader(new InputStreamReader(System.in))
////?   
////?                           System.out.println("Please enter length of a rectangle")
////?                           length = Integer.parseInt(br.readLine())
////?   
////?                           //read the width from console
////?                           System.out.println("Please enter width of a rectangle")
////?                           width = Integer.parseInt(br.readLine())
////?   
////?   
////?                   }
////?                   //if invalid value was entered
////?                   catch (NumberFormatException ne)
////?                   {
////?                           System.out.println("Invalid value" + ne)
////?                           System.exit(0)
////?                   }
////?                   catch (IOException ioe)
////?                   {
////?                           System.out.println("IO Error :" + ioe)
////?                           System.exit(0)
////?                   }
////?   
////?                   /*
////?                    * Area of a rectangle is
////?                    * length * width
////?                   */
////?                  
////?                   int area = length * width
////?   
////?                   System.out.println("Area of a rectangle is " + area)
////?           }
////?   
////?   }
////?   
////?   /*
////?   Output of Calculate Rectangle Area using Java Example would be
////?   Please enter length of a rectangle
////?   10
////?   Please enter width of a rectangle
////?   15
////?   Area of a rectangle is 150
////?   */
////?   
////?   @@@@
////?   
////?   /*
////?           Java Factorial Using Recursion Example
////?           This Java example shows how to generate factorial of a given number
////?           using recursive function.
////?   */
////?    
////?   import java.io.BufferedReader
////?   import java.io.IOException
////?   import java.io.InputStreamReader
////?   
////?   public class JavaFactorialUsingRecursion {
////?   
////?           public static void main(String args[]) throws NumberFormatException, IOException{
////?   
////?           System.out.println("Enter the number: ")
////?   
////?                   //get input from the user
////?                   BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
////?                   int a = Integer.parseInt(br.readLine())
////?   
////?                   //call the recursive function to generate factorial
////?                   int result = fact(a)
////?   
////?   
////?           System.out.println("Factorial of the number is: " + result)
////?   }
////?          
////?           static int fact(int b)
////?   {
////?           if (b <= 1)
////?                   //if the number is 1 then return 1
////?                   return 1
////?           else
////?                   //else call the same function with the value - 1
////?                   return b * fact(b - 1)
////?   }
////?   }
////?   
////?   /*
////?   Output of this Java example would be
////?    
////?   Enter the number:
////?   5
////?   Factorial of the number is: 120
////?   */
////?   
////?   @@@@
////?   
////?           /*
////?                   Swap Numbers Without Using Third Variable Java Example
////?                   This Swap Numbers Java Example shows how to
////?                   swap value of two numbers without using third variable using java.
////?           */
////?   
////?           public class SwapElementsWithoutThirdVariableExample {
////?   
////?           public static void main(String[] args) {
////?                  
////?                   int num1 = 10;
////?                   int num2 = 20
////?   
////?                   System.out.println("Before Swapping")
////?                   System.out.println("Value of num1 is :" + num1)
////?                   System.out.println("Value of num2 is :" + num2)
////?   
////?                   //add both the numbers and assign it to first
////?                   num1 = num1 + num2
////?                   num2 = num1 - num2
////?                   num1 = num1 - num2
////?   
////?                   System.out.println("Before Swapping")
////?                   System.out.println("Value of num1 is :" + num1)
////?                   System.out.println("Value of num2 is :" + num2)
////?           }
////?   
////?   
////?   }
////?   
////?   /*
////?   Output of Swap Numbers Without Using Third Variable example would be
////?   Before Swapping
////?   Value of num1 is :10
////?   Value of num2 is :20
////?   Before Swapping
////?   Value of num1 is :20
////?   Value of num2 is :10
////?   */
////?   
////?   @@@@
////?   
////?   // OddEven.java
////?   import javax.swing.JOptionPane
////?   
////?   public class OddEven {
////?           /**
////?            * "input" is the number that the user gives to the computer
////?            */
////?           private int input // a whole number("int" means integer)
////?   
////?           /**
////?            * This is the constructor method. It gets called when an object of the OddEven type
////?            * is being created.
////?            */
////?           public OddEven() {
////?                   /*
////?                    * In most Java programs constructors can initialize objects with default values, or create
////?                    * other objects that this object might use to perform its functions. In some Java programs, the
////?                    * constructor may simply be an empty function if nothing needs to be initialized prior to the
////?                    * functioning of the object. In this program's case, an empty constructor would suffice.
////?                    * A constructor must exist; however, if the user doesn't put one in then the compiler
////?                    * will create an empty one.
////?                    */
////?           }
////?   
////?           /**
////?            * This is the main method. It gets called when this class is run through a Java interpreter.
////?            * @param args command line arguments (unused)
////?            */
////?           public static void main(final String[] args) {
////?          /*
////?           * This line of code creates a new instance of this class called "number" (also known as an
////?           * Object) and initializes it by calling the constructor. The next line of code calls
////?           * the "showDialog()" method, which brings up a prompt to ask you for a number
////?           */
////?          OddEven number = new OddEven()
////?                   number.showDialog()
////?           }
////?   
////?           public void showDialog() {
////?                   /*
////?                    * "try" makes sure nothing goes wrong. If something does,
////?                    * the interpreter skips to "catch" to see what it should do.
////?                    */
////?                   try {
////?                           /*
////?                            * The code below brings up a JOptionPane, which is a dialog box
////?                            * The String returned by the "showInputDialog()" method is converted into
////?                            * an integer, making the program treat it as a number instead of a word.
////?                            * After that, this method calls a second method, calculate() that will
////?                            * display either "Even" or "Odd."
////?                            */
////?                           this.input = Integer.parseInt(JOptionPane.showInputDialog("Please enter a number."))
////?                           this.calculate()
////?                   } catch (final NumberFormatException e) {
////?                           /*
////?                            * Getting in the catch block means that there was a problem with the format of
////?                            * the number. Probably some letters were typed in instead of a number.
////?                            */
////?                           System.err.println("ERROR: Invalid input. Please type in a numerical value.")
////?                   }
////?           }
////?   
////?           /**
////?            * When this gets called, it sends a message to the interpreter.
////?            * The interpreter usually shows it on the command prompt (For Windows users)
////?            * or the terminal (For *nix users).(Assuming it's open)
////?            */
////?           private void calculate() {
////?                   if ((this.input % 2) == 0) {
////?                           JOptionPane.showMessageDialog(null, "Even")
////?                   } else {
////?                           JOptionPane.showMessageDialog(null, "Odd")
////?                   }
////?           }
////?   }

//! Sample Programs and Code Snippets in Python


////?   # You can use Lists as Stacks in Python
////?   stack = [10,9,8,7,6,5]
////?   # Original contents of the stack
////?   print "Original Contents of the Stack"
////?   print stack
////?   # Appending to a list is the same as pushing to a stack
////?   stack.append(1)
////?   stack.append(2)
////?   # In the two steps above we push 1 and 2 onto the stack
////?   print "After pushing 1 and 2 onto the stack it looks like:"
////?   print stack
////?   
////?   # Now we explore the pop operation
////?   poppedValue = stack.pop()
////?   
////?   # Display the popped value
////?   print "Popped Value:"
////?   print poppedValue
////?   
////?   # Now display what the stack looks like:
////?   print "After the pop operation the stack looks like:"
////?   print stack
////?   
////?   # Now we explore the pop operation again
////?   poppedValue = stack.pop()
////?   
////?   # Display the popped value
////?   print "Again, we pop a value from the top of the stack. Popped Value:"
////?   print poppedValue
////?   
////?   # Now display what the stack looks like:
////?   print "After the second pop operation the stack looks like:"
////?   print stack
////?   
////?   @@@@
////?   
////?   
////?   # Deques from collections are convenient to use as Queues
////?   # It is not efficient to use lists because they are efficient for reading/appending/popping from the end
////?   # But they are not so efficient for dequeing from the beginning
////?   from collections import deque
////?   queue = deque(["London","Paris","New York","Delhi"])
////?   print "The Original Queue:"
////?   print queue
////?   
////?   # Now we also queue a few more cities
////?   queue.append("Mumbai")
////?   queue.append("Kolkata")
////?   # Now display the queue after en-queueing these
////?   print queue
////?   # You will observe that Mumbai and Kolkata have been en-queued at the end of the queue
////?   
////?   # Now let us start to De-que element from this queue
////?   dequedElement1 = queue.popleft()
////?   dequedElement2 = queue.popleft()
////?   # Let us display the Dequeued Elements. 
////?   # Given that a Queue is a First In First Out (FIFO) data structure the de-queued elements will be London and Paris
////?   print "Two cities were de-queued"
////?   print "First Dequeued city:"
////?   print dequedElement1
////?   print "First Dequeued city:"
////?   print dequedElement2
////?   
////?   # You will notice how the first two cities have been removed from the Queue, in FIFO order
////?   print "Current state of the queue after dequeing two cities:"
////?   print queue
////?   
////?   
////?   @@@@
////?   
////?   
////?   class Node:
////?   	
////?   	def __init__(self,data=None,next=None):
////?   		self.data = data
////?   		self.next = next
////?   
////?   	def __str__(self):
////?   		return "Node[Data=" + `self.data` + "]"
////?   
////?   
////?   
////?   class LinkedList:
////?   
////?   	def __init__(self):
////?   		self.head = None
////?   		
////?   	# Inserting new data at the end of the list
////?   	# Iterate through the list till we encounter the last node.
////?   	# A new node is created for this data element
////?   	# And the last pointer points to this
////?   	def insert(self,data):
////?   		if (self.head == None):
////?   			self.head = Node(data)
////?   		else:
////?   			current = self.head
////?   			while (current.next != None) and (current.data == data):
////?                               current = current.next
////?   			current.next = Node(data)
////?   
////?   	# Deleting a given data value from the linked list
////?   	# If the head contains this data value
////?   	# Set head = node which comes next after the current head
////?   	# Otherwise go to the node such that the node after it (next to it) contains the value we're looking for
////?   	# set node.next = node.next.next
////?   	# so, the node which dontains the specified value/data; is skipped
////?   	def delete(self,data):
////?   		current = self.head
////?   		if current.data == data:
////?   			self.head = current.next
////?   		if current == None:
////?   			return False
////?   		else:
////?   			while (current != None) and (current.next != None) and (current.next.data != data):	
////?   				current = current.next
////?   			if (current != None) and (current.next != None) :
////?   				current.next = current.next.next
////?   
////?   	# Find a given data value in the linked list
////?   	# Traverse the linked list till you either find the data value or you come to the end of the list
////?   
////?   	def find(self,data):
////?   		found = False
////?   		current = self.head
////?   		while ((current != None) and (current.data != data) and ( current.next != None)):
////?   			current = current.next
////?    		if current != None:
////?   			found = True
////?   		return found
////?   
////?   	# Display the linked list
////?   	# Traverse the linked list till you reach its end
////?   	# Display each node which you traverse	
////?   	def display(self):
////?   		current = self.head
////?   		string_representation = " "
////?   		while current != None:
////?   			string_representation +=  str(current) + "--->"
////?   			current = current.next
////?   		print string_representation
////?   
////?   # Initialize a new linked list
////?   print "Initializing linked list"
////?   ll = LinkedList()
////?   
////?   # Insert values in the linked list
////?   print "Inserting values 1,2,3,9 in the Linked List"
////?   ll.insert(1)
////?   ll.insert(2)
////?   ll.insert(3)
////?   ll.insert(9)
////?   
////?   # Display the linked list
////?   print "Displaying the linked list"
////?   ll.display()
////?   
////?   # Delete an element from the linked list. Demonstrate the Delete function
////?   print "Delete an element (data = 3) from the linked list"
////?   ll.delete(3)
////?   
////?   print "Display the linked list again. The value 3 is deleted. "
////?   ll.display()
////?   
////?   # Try to find the value 2 in the linked list (Demonstrating the Find function)
////?   print "Try to find the value 2 in the linked list"
////?   found = ll.find(2)
////?   if found == True:
////?   	print "The value 2 is present in the Linked List"
////?   else:
////?   	print "The value 2 is not present in the linked list"
////?   
////?   # Try to find the value 20 in the linked list
////?   print "Try to find the value 20 in the linked list"
////?   found = ll.find(20)
////?   if found == True:
////?   	print "The value 20 is present in the Linked List"
////?   else:
////?   	print "The value 20 is not present in the linked list"
////?   
////?   
////?   @@@@
////?   
////?   
////?   
////?   class Node:
////?       
////?       # Constructor to initialize data
////?       # If data is not given by user,its taken as None 
////?       def __init__(self, data=None, next=None, prev=None):
////?           self.data = data
////?           self.next = next
////?           self.prev = prev
////?   
////?       # __str__ returns string equivalent of Object
////?       def __str__(self):
////?           return "Node[Data = %s]" % (self.data,)
////?   
////?   class DoubleLinkedList:
////?       
////?       def __init__(self):
////?           self.head = None
////?           self.tail = None
////?       
////?       def insert(self, data):
////?           if (self.head == None): # To imply that if head == None
////?               self.head = Node(data)
////?               self.tail = self.head
////?           else:
////?               current = self.head
////?               while(current.next != None):
////?                   current = current.next
////?               current.next = Node(data, None, current)
////?               self.tail = current.next
////?   
////?       def delete(self, data):
////?           current = self.head
////?           # If given item is the first element of the linked list
////?           if current.data == data:
////?               self.head = current.next
////?               self.head.prev = None
////?               return True
////?           
////?           # In case the linked list is empty
////?           if current == None:
////?               return False
////?   
////?           # If the element is at the last
////?           if self.tail == data:
////?               self.tail = self.tail.prev
////?               self.tail.next = None
////?               return True
////?   
////?           # If the element is absent or in the middle of the linked list
////?           while current != None:
////?               if current.data == data :
////?                   current.prev.next = current.next
////?                   current.next.prev = current.prev
////?                   return True
////?               current = current.next
////?        
////?           # The element is absent
////?           return False
////?   
////?       def find(self, data):
////?           current = self.head
////?           while current != None:
////?               if current.data == data :
////?                   return True
////?               current = current.next
////?           return False
////?   
////?       def fwd_print(self):
////?           current = self.head
////?           if current == None:
////?               print("No elements")
////?               return False
////?           while (current!= None):
////?               print (current.data) 
////?               current = current.next
////?           return True
////?   
////?       def rev_print(self):
////?           current = self.tail
////?           if (self.tail == None):
////?               print("No elements")
////?               return False
////?   
////?           while (current != None):
////?               print (current.data)
////?               current = current.prev
////?           return True
////?   
////?   # Initializing list
////?   l = DoubleLinkedList()
////?   
////?   # Inserting Values
////?   l.insert(1)
////?   l.insert(2)
////?   l.insert(3)
////?   l.insert(4)
////?   
////?   # Forward Print
////?   l.fwd_print()
////?   
////?   # Reverse Print
////?   l.rev_print()
////?   
////?   # Try to find 3 in the list
////?   if (l.find(3)):
////?       print("Found")
////?   else :
////?       print("Not found")
////?   
////?   # Delete 3 from the list
////?   l.delete(3)
////?   
////?   # Forward Print
////?   l.fwd_print()
////?   
////?   # Reverse Print
////?   l.rev_print()
////?   
////?   # Now if we find 3, we will not get it in the list
////?   if (l.find(3)):
////?       print("Found")
////?   else :
////?       print("Not found")
////?   
////?   
////?   @@@
////?   
////?   def cube(n):
////?       '''
////?       a ** b means a^b.
////?       eg : 2**3 = 2 x 2 x 2 = 8
////?       '''
////?       return n ** 3
////?   
////?   def string_operation(s):
////?       '''
////?       String is an immutable object. So whatever operations we perform on strings
////?       a new string is generated and the original string stays the same.
////?       '''
////?       # Capitalize makes the first letter of the string capital
////?       print('Capitalized String :', s.capitalize())
////?   
////?       # To find a substring in a given string, python has a function called find(). 
////?       # If the substring is present in the string, it returns index of its first entry, otherwise -1.     
////?       print('To find whether the string has the phrase "oper" in it', s.find('oper'))
////?   
////?       # The index function returns the first index location where the substring is contained.
////?       # It raises a ValueError if the substring is not there. That's why we use find().
////?       if (s.find('oper') != -1):
////?           print('Index of "oper"', s.index('oper'))
////?   
////?       print('True if all the characters are alphanumeric and the string is not empty', s.isalpha())
////?   
////?       print('True if all the characters are digits otherwise false', s.isdigit())
////?   
////?       print('Generates a new string with characters capitalized', s.upper())
////?   
////?   def volume(length=10, breadth=10, height=10):
////?       '''
////?       In the function header we have assigned default values of length, breadth and height
////?       that is to say if the function is called with only 2 parameters given, then the 
////?       value of height will be taken as 10.
////?       '''
////?       return(length * breadth * height)
////?   
////?   def main():
////?       # Print the cube of a number
////?       num = int(input("Enter a number : "))
////?       print("The cube of the number is :", cube(num))
////?       
////?       # String Operations
////?       n = input("Enter a string : ")
////?       string_operation(n)
////?   
////?       # Volume of a cuboid
////?       l = int(input("Enter length : "))
////?       b = int(input("Enter Breadth : "))
////?       h = int(input("Enter Height : "))
////?       print("Volume of cuboid :", volume(l, b, h))
////?   
////?   if (__name__ == '__main__'): main()


//* INPUT FORMAT

// Source code of a program, or a code snippet, which might be in C, Java or Python.


//* OUTPUT FORMAT

// Just one line containing the name of the Programming language which you have detected: This might be either C or Java or Python.


//* SAMPLE INPUT

////?   import java.io.*
////?
////?   public class SquareNum {
////?
////?           public static void main(String args[]) throws IOException
////?      {
////?           System.out.println("This is a small Java Program!")
////?   }
////?   }


//* SAMPLE OUTPUT

////? Java


var regexPatternJava = /public static void main\(.+\)|import java|System.out.print/g
var regexPatternC = /int main\(\)/g

function processData(input) {
    let matches = input.match(regexPatternJava);

    if(matches != null && matches.length > 0)
    {
        console.log('Java');
        return;
    }
    
    matches = input.match(regexPatternC);

    if(matches != null && matches.length > 0)
        console.log('C');
    else console.log('Python');
}


processData(`import java.io.*;

public class SquareNum {

   public static void main(String args[]) throws IOException
   {
      System.out.println("This is a small Java Program!");
   }
}`)
////? 	Java

console.log('\n');

processData(`# let us create a test string


testString1 = "Hello World!"
print "Original String: "+ testString1
# Print this string in lower case

# Converting a string to lower case

print "Converting to LowerCase"
print testString1.lower()

# Converting a string to upper case

print "Converting to Upper Case"
print testString1.upper()

# Capitalizing a string

# Only the first letter in the string will be capitalized
print "Capitalizing the String"
print testString1.capitalize()

# Trying to slice out a substring between given indexes

print "Substring from index 1 to 7"
print testString1[1:8]

#Substring from the start till character at index = 7 (start of string is index 0)
print "Substring from the start till character at index = 7 (start of string is index 0): "
print testString1[:8]

#Substring from the character at index = 7, till the end of the string (remember: start of string is index 0)
print "Substring from the character at index = 7, till the end of the string (remember: start of string is index 0): "
print testString1[7:]


#Find the position of a  substring within the string

#This gives us the first index during a left to right scan. If the string is not found, it returns -1
print "Find the index from which the substring 'llo' begins within the test string"
print testString1.find('llo')

print "Now, let's look for a substring which is not a part of the given string"
print testString1.find('xxy')

# Now, trying to find the index of a substring between specified indexes only
print "Now, trying to find a substring between specified indexes only: looking for 'l' between 4 and 9"
print testString1.find('l',4,9)

# rfind is used, to find the index from the reverse
# So, testString1.rfind('l') will look for the last index of l in the string
print "find('l') on the given string returns the following index (scanning the string from left to right):"
print testString1.find('l')

print "rfind('l') on the given string returns the following index (this scans the string from right to left):"
print testString1.rfind('l')

# Now let us try to replace/substitute a substring of this string with another string

print "Replacing World with Planet"
print testString1.replace("World","Planet")


# Now let us try to split the string, into separate words

# let us split it wherever there is a space
print "Splitting the string into words, wherever there is a space"
print testString1.split(" ")
print testString1.rsplit(" ")

# Remove leading and trailing whitespace characters

testString2 = "Hello World!  "
print "Current Test String=" + testString2
print "Length (there are whitespaces at the end):" + len(testString2)
print "Length after stripping "+ len(testString2.strip())`)
////? 	Python

console.log('\n');

processData(`import java.io.*;
class ShellSort
{
void ShellSort(int array[], int number_of_elements)
{
        int iter, jter, increment, temp,i,j;
        for(increment = number_of_elements/2;increment > 0; increment /= 2)
        {
                for(i = increment; i<number_of_elements; i++)
                {
                        temp = array[i];
                        for(j = i; j >= increment ;j-=increment)
                        {
                                if(temp < array[j-increment])
                                {
                                        array[j] = array[j-increment];
                                }
                                else
                                {
                                        break;
                                }
                        }
                        array[j] = temp;
                }
        }
}
int main()throws IOException
{
    BufferedReader in=new BufferedReader(new InputStreamReader(System.in));
        int number_of_elements;
        System.out.println("Enter the number of elements");
        number_of_elements=Integer.parseInt(in.readLine());
        int array[]=new int[number_of_elements];
        int iter;
         System.out.println("Enter the elements one by one");
        for(iter = 0;iter < number_of_elements;iter++)
        {
                array[iter]=Integer.parseInt(in.readLine());;
        }
        /* Calling this functions sorts the array */
        ShellSort(array,number_of_elements);
        for(iter = 0;iter < number_of_elements;iter++)
        {
               System.out.print(array[iter]+"\t");
        }
        System.out.print("\n");
        return 0;
}
}`)
////? 	Java

console.log('\n');

processData(`#include<stdio.h>
/* Logic : Do the following thing until the list is sorted
            (i) Compare two adjacent elements and check if they are in correct order(that is second one has
                to be greater than the first). 
            (ii) Swap them if they are not in correct order.
 */ 
void BubbleSort(int *array,int number_of_elements)
{
        int iter, temp, swapped;
        do
        {
                swapped = 0; /* If no element is swapped array is sorted */
                /* In the following loop compare every pair of adjacent elements and check
                   if they are in correct order */
                for(iter = 1; iter < number_of_elements; iter++)
                {
                        if(array[iter-1] > array[iter])
                        {
                                temp = array[iter-1];
                                array[iter-1] = array[iter];
                                array[iter] = temp;
                                swapped = 1;
                        }
                }

        }while(swapped);
}
int main()
{
        int number_of_elements;
        scanf("%d",&number_of_elements);
        int array[number_of_elements]; 
        int iter;
        for(iter = 0;iter < number_of_elements;iter++)
        {
                scanf("%d",&array[iter]);
        }
        /* Calling this functions sorts the array */
        BubbleSort(array,number_of_elements); 
        for(iter = 0;iter < number_of_elements;iter++)
        {
                printf("%d ",array[iter]);
        }
        printf("\n");
        return 0;

}


@@@@

Insertion Sort - C Program Source Code

#include<stdio.h>
/* Logic : Suppose if the array is sorted till index i then we can sort the arry till i+1 by inserting 
           i+1 th element in the correct position from 0 to i+1. The position at which (i+1)th element has 
           to be inserted has to be found by iterating from 0 to i. As any array is sorted till 0th postion 
           (Single element is always sorted) and we know how to expand, we can sort the whole array
 */ 
void InsertionSort(int *array , int number_of_elements)
{
        int iter,jter;
        for(iter=1;iter<number_of_elements;iter++)
        {
                int current_element = array[iter];
                jter = iter-1;
                while(jter>=0 && array[jter] > current_element)
                {
                        array[jter+1] = array[jter];
                        jter--;
                }
                array[jter+1] = current_element;
        }
}
int main()
{
        int number_of_elements;
        scanf("%d",&number_of_elements);
        int array[number_of_elements]; 
        int iter;
        for(iter = 0;iter < number_of_elements;iter++)
        {
                scanf("%d",&array[iter]);
        }
        /* Calling this functions sorts the array */
        InsertionSort(array,number_of_elements); 
        for(iter = 0;iter < number_of_elements;iter++)
        {
                printf("%d ",array[iter]);
        }
        printf("\n");
        return 0;
}


@@@@

#include<stdio.h>
#include<assert.h>
/* maxVertices represents maximum number of vertices that can be present in the graph. */
#define maxVertices   100
void Dfs(int graph[][maxVertices], int *size, int presentVertex,int *visited)
{
        printf("Now visiting vertex %d\n",presentVertex);
        visited[presentVertex] = 1;
        /* Iterate through all the vertices connected to the presentVertex and perform dfs on those
           vertices if they are not visited before */
        int iter;
        for(iter=0;iter<size[presentVertex];iter++)
        {
                if(!visited[graph[presentVertex][iter]])
                {
                        Dfs(graph,size,graph[presentVertex][iter],visited);
                }
        }
        return;
        

}
/* Input Format: Graph is directed and unweighted. First two integers must be number of vertces and edges 
   which must be followed by pairs of vertices which has an edge between them. */
int main()
{
        int graph[maxVertices][maxVertices],size[maxVertices]={0},visited[maxVertices]={0};
        int vertices,edges,iter;
        /* vertices represent number of vertices and edges represent number of edges in the graph. */
        scanf("%d%d",&vertices,&edges);
        int vertex1,vertex2;
        for(iter=0;iter<edges;iter++)
        {
                scanf("%d%d",&vertex1,&vertex2);
                assert(vertex1>=0 && vertex1<vertices);
                assert(vertex2>=0 && vertex2<vertices);
                graph[vertex1][size[vertex1]++] = vertex2;
        }
        int presentVertex;
        for(presentVertex=0;presentVertex<vertices;presentVertex++)
        {
                if(!visited[presentVertex])
                {
                        Dfs(graph,size,presentVertex,visited);
                }
        }
        return 0;



}

@@@@

#include<stdio.h>
#include<stdlib.h>
#include<assert.h>
/* maxVertices represents maximum number of vertices that can be present in the graph. */
#define maxVertices   100
/*Queue has five properties. capacity stands for the maximum number of elements Queue can hold.
  Size stands for the current size of the Queue and elements is the array of elements. front is the
 index of first element (the index at which we remove the element) and rear is the index of last element
 (the index at which we insert the element) */
typedef struct Queue
{
        int capacity;
        int size;
        int front;
        int rear;
        int *elements;
}Queue;
/* crateQueue function takes argument the maximum number of elements the Queue can hold, creates
   a Queue according to it and returns a pointer to the Queue. */
Queue * CreateQueue(int maxElements)
{
        /* Create a Queue */
        Queue *Q;
        Q = (Queue *)malloc(sizeof(Queue));
        /* Initialise its properties */
        Q->elements = (int *)malloc(sizeof(int)*maxElements);
        Q->size = 0;
        Q->capacity = maxElements;
        Q->front = 0;
        Q->rear = -1;
        /* Return the pointer */
        return Q;
}
void Dequeue(Queue *Q)
{
        /* If Queue size is zero then it is empty. So we cannot pop */
        if(Q->size==0)
        {
                printf("Queue is Empty\n");
                return;
        }
        /* Removing an element is equivalent to incrementing index of front by one */
        else
        {
                Q->size--;
                Q->front++;
                /* As we fill elements in circular fashion */
                if(Q->front==Q->capacity)
                {
                        Q->front=0;
                }
        }
        return;
}
int Front(Queue *Q)
{
        if(Q->size==0)
        {
                printf("Queue is Empty\n");
                exit(0);
        }
        /* Return the element which is at the front*/
        return Q->elements[Q->front];
}
void Enqueue(Queue *Q,int element)
{
        /* If the Queue is full, we cannot push an element into it as there is no space for it.*/
        if(Q->size == Q->capacity)
        {
                printf("Queue is Full\n");
        }
        else
        {
                Q->size++;
                Q->rear = Q->rear + 1;
                /* As we fill the queue in circular fashion */
                if(Q->rear == Q->capacity)
                {
                        Q->rear = 0;
                }
                /* Insert the element in its rear side */ 
                Q->elements[Q->rear] = element;
        }
        return;
}



void Bfs(int graph[][maxVertices], int *size, int presentVertex,int *visited)
{
        visited[presentVertex] = 1;
        /* Iterate through all the vertices connected to the presentVertex and perform bfs on those
           vertices if they are not visited before */
        Queue *Q = CreateQueue(maxVertices);
        Enqueue(Q,presentVertex);
        while(Q->size)
        {
                presentVertex = Front(Q);
                printf("Now visiting vertex %d\n",presentVertex);
                Dequeue(Q);
                int iter;
                for(iter=0;iter<size[presentVertex];iter++)
                {
                        if(!visited[graph[presentVertex][iter]])
                        {
                                visited[graph[presentVertex][iter]] = 1;
                                Enqueue(Q,graph[presentVertex][iter]);
                        }
                }
        }
        return;
        

}
/* Input Format: Graph is directed and unweighted. First two integers must be number of vertces and edges 
   which must be followed by pairs of vertices which has an edge between them. */
int main()
{
        int graph[maxVertices][maxVertices],size[maxVertices]={0},visited[maxVertices]={0};
        int vertices,edges,iter;
        /* vertices represent number of vertices and edges represent number of edges in the graph. */
        scanf("%d%d",&vertices,&edges);
        int vertex1,vertex2;
        for(iter=0;iter<edges;iter++)
        {
                scanf("%d%d",&vertex1,&vertex2);
                assert(vertex1>=0 && vertex1<vertices);
                assert(vertex2>=0 && vertex2<vertices);
                graph[vertex1][size[vertex1]++] = vertex2;
        }
        int presentVertex;
        for(presentVertex=0;presentVertex<vertices;presentVertex++)
        {
                if(!visited[presentVertex])
                {
                        Bfs(graph,size,presentVertex,visited);
                }
        }
        return 0;



}

`)
////? 	C