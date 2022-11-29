# Codeforces RCPC

Codeforces RCPC is a package that helps you safely get the RCPC value from Codeforces.

## Why does this package exist?

Lately, Codeforces has used a popular technique to stop scrapers from reaching Codeforces page.
The technique is using som form of redirction. This redirection depends on the [**slow** implementation](https://code.google.com/archive/p/slowaes/) of the AES algorithm.

## How to use it?

It's a very simple package that exports 2 functions.

### `Codeforces.hasRedirection()`

It returns a boolean indicating wheter the redirection functionality is working on codeforces.

### `Codeforces.getRCPCValue()`

It returns a string for you to use as the RCPC cookie value.
