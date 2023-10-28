# lab 2: javascript basics

## C. Welcome to Programming in Javascript

3.

```js
var y = "Hello World";
y.includes("hello"); // false
y.repeat(10); // "Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World"
```

4.

```js
function square(i) = {
    return i*i; // squares the value of i and returns it
}

square(2.5); // 6.25
square("hello") // hellohello
```

5.

```js
function square(i) {
  if(typeof(i).localeCompare("number"))
  {
    return i * i;
  }
  return -1; 
}
```

6.

```js
function numberString(i) {

  if (i < 0)
  {
    return 0;
  }
  
  for(int k = 0; k < i; k++)
  {
    console.log(k);
  } 
}
`