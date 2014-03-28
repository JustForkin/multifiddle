// Generated by CoffeeScript 1.6.3
var $G, G, Pane, ace_editors, code, fb_project, fb_root, hash, set_theme;

ace_editors = [];

set_theme = function(theme_name) {
  var editor, _i, _len, _results;
  _results = [];
  for (_i = 0, _len = ace_editors.length; _i < _len; _i++) {
    editor = ace_editors[_i];
    _results.push(editor.setTheme("ace/theme/" + theme_name));
  }
  return _results;
};

code = {};

$G = $(G = window);

Pane = (function() {
  function Pane(o) {
    var $iframe, $pad, $pane, editor, fb_fp, firepad, resize, session;
    $pane = $('<div class="pane">');
    $pane.appendTo('body');
    (resize = function() {
      return $pane.css({
        width: innerWidth,
        height: innerHeight / 2
      });
    })();
    $G.on("resize", resize);
    if (o.preview) {
      $iframe = $('<iframe sandbox="allow-same-origin allow-scripts allow-forms">');
      $iframe.appendTo($pane);
      $G.on("code-change", function() {
        var body, data_uri, e, head, html, iframe, js;
        $pane.loading();
        head = body = "";
        if (code.html) {
          body += code.html;
        }
        if (code.css) {
          head += "<style>" + code.css + "</style>";
        }
        if (code.javascript) {
          body += "<script>" + code.javascript + "</script>";
        }
        if (code.coffee) {
          try {
            js = CoffeeScript.compile(code.coffee);
            body += "<script>" + js + "</script>";
          } catch (_error) {
            e = _error;
            body += "<h1>CoffeeScript Compilation Error</h1>" + e.message;
          }
        }
        html = "<!doctype html>\n<html>\n	<head>\n		<meta charset=\"utf-8\">\n		" + head + "\n	</head>\n	<body style='background:black;color:white;'>\n		" + body + "\n	</body>\n</html>";
        data_uri = "data:text/html," + encodeURI(html);
        $iframe.one("load", function() {
          return $pane.loading("done");
        });
        iframe = $iframe[0];
        if (iframe.contentWindow) {
          return iframe.contentWindow.location.replace(data_uri);
        } else {
          return $iframe.attr({
            src: data_uri
          });
        }
      });
    } else {
      $pad = $('<div>');
      $pad.appendTo($pane);
      $pane.loading();
      fb_fp = fb_project.child(o.lang);
      editor = ace.edit($pad.get(0));
      ace_editors.push(editor);
      editor.on('input', function() {
        code[o.lang] = editor.getValue();
        return $G.triggerHandler("code-change");
      });
      session = editor.getSession();
      session.setUseWrapMode(true);
      session.setUseWorker(false);
      session.setMode("ace/mode/" + o.lang);
      firepad = Firepad.fromACE(fb_fp, editor);
      firepad.on('ready', function() {
        var _ref;
        $pane.loading("done");
        if (firepad.isHistoryEmpty()) {
          return firepad.setText((_ref = {
            javascript: '// JavaScript\n\ndocument.write("Hello World!");\n',
            coffee: '# CoffeeScript\n\ndocument.write "Hello World!"\n',
            css: 'body {\n	font-family: Helvetica, sans-serif;\n}'
          }[o.lang]) != null ? _ref : "");
        }
      });
    }
  }

  return Pane;

})();

fb_root = new Firebase("https://multifiddle.firebaseio.com/");

fb_project = null;

hash = G.location.hash.replace('#', '');

if (hash) {
  fb_project = fb_root.child(hash);
} else {
  fb_project = fb_root.push();
  G.location = G.location + '#' + fb_project.name();
}

$(function() {
  var panes;
  return panes = [
    new Pane({
      lang: "coffee"
    }), new Pane({
      preview: true
    })
  ];
});
