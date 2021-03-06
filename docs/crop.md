# Crop

Controls how the image is aligned.

## Alignment position <Parameter text="&a="/>

How the image should be aligned when `&fit=cover` or `&fit=contain` is set. The [`&w=`](size.md#width) and [`&h=`](size.md#height)
parameters should also be specified.

### Position-based

Controls the starting location of the crop. When `&fit=contain` is set, it determines how the image is positioned inside its box.

**Valid positions:**
- `center`: default
- `top`
- `right`
- `bottom`
- `left`
- `top-left`
- `bottom-left`
- `bottom-right`
- `top-right`

For more information, please see the suggestion on our GitHub issue tracker: [Issue #24 - Aligning](https://github.com/weserv/images/issues/24).

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top">
```
[![Alignment position](/static/lichtenstein.jpg?w=300&h=300&fit=cover&a=top)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=top)

### Focal point

You can be more specific about the alignment using a focal point. This is defined using two offset
percentages: `focal-x%-y%`.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=focal-0-20">
```
[![Focal point](/static/lichtenstein.jpg?w=300&h=300&fit=cover&a=focal-0-20)](/?url=images.weserv.nl/lichtenstein.jpg&w=300&h=300&fit=cover&a=focal-0-20)

### Smart crop

An experimental strategy-based approach to crop the image by removing boring parts. This only works
with `&fit=cover`.

More info: [Issue #90 - Add support for smart crop](https://github.com/weserv/images/issues/90).

**Valid strategies:**
- `entropy`: focus on the region with the highest [Shannon entropy](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29).
- `attention`: focus on the region with the highest luminance frequency, color saturation and
  presence of skin tones.

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention">
```
[![Smart crop](/static/puppy.jpg?w=300&h=300&fit=cover&a=attention)](/?url=images.weserv.nl/puppy.jpg&w=300&h=300&fit=cover&a=attention)

## Rectangle crop <Parameter text="&c[x,y,w,h]="/>

Crops the image to specific dimensions after any other resize operations.

::: tip
You can use `&precrop`, for a pre-resize crop behaviour.
See [Issue #176 - Combine cropping with resizing](https://github.com/weserv/images/issues/176) for more information.
:::

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/lichtenstein.jpg&cx=680&cy=500&cw=300&ch=300">
```
[![Rectangle crop](/static/lichtenstein.jpg?cx=680&cy=500&cw=300&ch=300)](/?url=images.weserv.nl/lichtenstein.jpg&cx=680&cy=500&cw=300&ch=300)

## Trim <Parameter text="&trim="/>

Trim "boring" pixels from all edges that contain values within a similarity of the top-left pixel. Trimming
occurs before any resize operation. Use values between `1` and `254` to define a tolerance level to trim
away similar color values. You also can specify just `&trim`, which defaults to a tolerance level of `10`.

More info: [Issue #39 - able to remove black/white whitespace](https://github.com/weserv/images/issues/39).

```html
<img src="//images.weserv.nl/?url=images.weserv.nl/transparency_demo.png&w=300&trim=10">
```
[![Trim](/static/transparency_demo.png?w=300&trim=10)](/?url=images.weserv.nl/transparency_demo.png&w=300&trim=10)
