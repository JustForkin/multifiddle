# [MultiFiddle](https://multifiddle.ml/#hello-world)
Fiddle with code in a minimalistic collaborative environment.

MultiFiddle is intended as a multilingual<strong><sup>⁂</sup></strong> alternative to
editors like [JSFiddle][], [CodePen][], [JS Bin][], [Fiddle Salad][], and [CodeSandbox][]
with a simple interface.

##### It currently fails because:

1. **⁂** It is not multilingual;
   in fact it assumes you'll want [CoffeeScript][];
   you can still include `<script>` tags, but
   Fiddle Salad, CodeSandbox, JS Bin, JSFiddle, and CodePen all have better language support so far
2. There is no versioning/forking system, and your code is NOT SAFE (anyone could see or even delete your code)
3. You can't put the code beside the output horizontally (a fancy panes system was planned)
4. There's not much sandboxing; (there's [a good list of best practices for making a code fiddling environment over here](https://github.com/jsbin/jsbin/wiki/Best-practices-for-building-your-own-live-paste-bin))

##### Features:

* Live editing like you get with CodePen, JS Bin, or Fiddle Salad
* Dark and delicious\* (CodeSandbox also achieves this, looks like (I haven't really tried it out tho as of writing btw, just for the record))
* Nice errors, especially for CoffeeScript compilation where it even links to the position in the source
* Link to the (live reloading!) contents of the output pane by adding `/output` to the URL
* Generate a QR code that links to the output with <kbd>Ctrl+M</kbd>\**
  (since the output live reloads,
  it's great for playing around with [device orientation](https://multifiddle.ml/#device-orientation-II)
  or other mobile device APIs)
* Built with [Ace Editor][] and [Firepad][]

\*Hm, outlines around panes don't work in Firefox

\*\*Hm, doesn't work in Firefox because it mutes/unmutes the tab instead

[JSFiddle]: https://jsfiddle.net/
[CodePen]: https://codepen.io/
[JS Bin]: https://jsbin.com/
[Fiddle Salad]: http://fiddlesalad.com/
[CodeSandbox]: https://codesandbox.io
[CoffeeScript]: https://coffeescript.org/
[Ace Editor]: https://ace.c9.io/
[Firepad]: https://firepad.io/
