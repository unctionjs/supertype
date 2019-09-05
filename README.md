# @unction/supertype

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> {constructor: {prototype: Object}} => string

Return the super type of an value.

``` javascript
class A {}
class B extends A {}

supertype(new B()) // "A"
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/supertype.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/supertype.svg?maxAge=2592000&style=flat-square
