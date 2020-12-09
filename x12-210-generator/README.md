
This generator accept 2 optional parameters
1: Numbers of Transactions (1 by default)
2: Path(dirname) to copy the output, the copy file name will be "X12-${SIZE}.edi"

Examples:

```
Generate a simple file with 1 Transfer Set
node generator.js
````

```
Generate a file with multiples Transfer Sets
node generator.js 100
```

Generate a file with multiples Interchange Headers (ISA/ISE) segments
```
node generator-x12-isa-only-messages.js n
node generator-x12-isa-only-messages.js 4000
```

```
Generate a file with multiples Transfer Sets and copy to other directory
node generator.js 100000 "../k6/input-files"
````
