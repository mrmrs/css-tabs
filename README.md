# css-tabs

Functional CSS for tabs

## Filesize

| File | Size |
|------|------|
| `dist/tabs.css` | 709 bytes |
| `dist/tabs.min.css` | 479 bytes (158 Gzipped) |

## Install

```sh
npm install css-tabs
```

## Usage

### Import

```css
@import "css-tabs";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/css-tabs/dist/tabs.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/css-tabs/dist/tabs.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|
| `.tabs-none` | `tab-size: 0;` |
| `.tabs-2` | `tab-size: 2;` |
| `.tabs-default` | `tab-size: 4;` |
| `.tabs-large` | `tab-size: 8;` |
| `.tabs-none-s` | `tab-size: 0;` |
| `.tabs-2-s` | `tab-size: 2;` |
| `.tabs-default-s` | `tab-size: 4;` |
| `.tabs-large-s` | `tab-size: 8;` |
| `.tabs-none-m` | `tab-size: 0;` |
| `.tabs-2-m` | `tab-size: 2;` |
| `.tabs-default-m` | `tab-size: 4;` |
| `.tabs-large-m` | `tab-size: 8;` |
| `.tabs-none-l` | `tab-size: 0;` |
| `.tabs-2-l` | `tab-size: 2;` |
| `.tabs-default-l` | `tab-size: 4;` |
| `.tabs-large-l` | `tab-size: 8;` |

### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.tabs-none-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/tabs.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/tabs.css` — formatted
- `dist/tabs.min.css` — minified

## License

MIT
