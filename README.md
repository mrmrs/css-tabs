# css-tabs 0.0.6

Css module of single purpose classes for tabs

#### Stats

192 | 16 | 16
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-tabs
```

#### With Git

```
git clone https://github.com/tachyons-css/css-tabs
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-tabs";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-tabs">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*
   TABS
*/
.tabs-none { tab-size: 0; }
.tabs-2 { tab-size: 2; }
.tabs-default { tab-size: 4; }
.tabs-large { tab-size: 8; }
@media screen and (min-width: 48em) {
 .tabs-none-ns { tab-size: 0; }
 .tabs-2-ns { tab-size: 2; }
 .tabs-default-ns { tab-size: 4; }
 .tabs-large-ns { tab-size: 8; }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .tabs-none-m { tab-size: 0; }
 .tabs-2-m { tab-size: 2; }
 .tabs-default-m { tab-size: 4; }
 .tabs-large-m { tab-size: 8; }
}
@media screen and (min-width: 64em) {
 .tabs-none-l { tab-size: 0; }
 .tabs-2-l { tab-size: 2; }
 .tabs-default-l { tab-size: 4; }
 .tabs-large-l { tab-size: 8; }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

MIT

