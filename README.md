# CSS TABS

  Mobile-first classes for css-tabs.
  Set the desired css-tabs on any element for any breakpoint.
  Base class names are namespaced across three breakpoints:

*  -ns = not-small (covers everything larger than mobile)
*  -m  = medium
*  -l  = large

## Install
Grab the css partial from github and include it in your project or alternatively
you can install it via npm:
```
npm install --save-dev css-tabs
```
View on [npm](https://www.npmjs.org/package/css-tabs)


## File Size

708B tabs.css
518B tabs.min.css

## The Code
```
.tabs-none    { tab-size: 0; }
.tabs-2       { tab-size: 2; }
.tabs-default { tab-size: 4; }
.tabs-large   { tab-size: 8; }

@media screen and (min-width: 48em) {
  .tabs-none-ns    { tab-size: 0; }
  .tabs-2-ns       { tab-size: 2; }
  .tabs-default-ns { tab-size: 4; }
  .tabs-large-ns   { tab-size: 8; }
}

@media screen and (min-width: 48em) and (max-width: 64em) {
  .tabs-none-m    { tab-size: 0; }
  .tabs-2-m       { tab-size: 2; }
  .tabs-default-m { tab-size: 4; }
@media screen and (min-width: 64em)  {
}

@include break(large) {
  .tabs-none-l    { tab-size: 0; }
  .tabs-2-l       { tab-size: 2; }
  .tabs-default-l { tab-size: 4; }
  .tabs-large-l   { tab-size: 8; }
}

```

## Author

[http://mrmrs.cc - Entire internet gateway to all things mrmrs](http://mrmrs.cc)
[http://mrmrs.io - Open source projects](http://mrmrs.io)

## License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

