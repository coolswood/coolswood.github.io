!(function (s, t) {
  void 0 === s && void 0 !== window && (s = window),
    'function' == typeof define && define.amd
      ? define(['chartist'], function (e) {
          return (s['Chartist.plugins.ctThreshold'] = t(e));
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = t(require('chartist')))
      : (s['Chartist.plugins.ctThreshold'] = t(s.Chartist));
})(this, function (e) {
  return (
    (function (s) {
      'use strict';
      var e = {
        threshold: 0,
        classNames: {
          aboveThreshold: 'ct-threshold-above',
          belowThreshold: 'ct-threshold-below',
        },
        maskNames: {
          aboveThreshold: 'ct-threshold-mask-above',
          belowThreshold: 'ct-threshold-mask-below',
        },
      };
      (s.plugins = s.plugins || {}),
        (s.plugins.ctThreshold = function (r) {
          return (
            (r = s.extend({}, e, r)),
            function (e) {
              (e instanceof s.Line || e instanceof s.Bar) &&
                (e.on('draw', function (e) {
                  'point' === e.type
                    ? e.element.addClass(
                        e.value.y >= r.threshold
                          ? r.classNames.aboveThreshold
                          : r.classNames.belowThreshold
                      )
                    : ('line' !== e.type &&
                        'bar' !== e.type &&
                        'area' !== e.type) ||
                      (e.element
                        .parent()
                        .elem(e.element._node.cloneNode(!0))
                        .attr({
                          mask: 'url(#' + r.maskNames.aboveThreshold + ')',
                        })
                        .addClass(r.classNames.aboveThreshold),
                      e.element
                        .attr({
                          mask: 'url(#' + r.maskNames.belowThreshold + ')',
                        })
                        .addClass(r.classNames.belowThreshold));
                }),
                e.on('created', function (e) {
                  var s,
                    t = r,
                    h = (s = e).svg.querySelector('defs') || s.svg.elem('defs'),
                    o =
                      s.chartRect.height() -
                      s.axisY.projectValue(t.threshold) +
                      s.chartRect.y2,
                    l = s.svg.width(),
                    a = s.svg.height();
                  h
                    .elem('mask', {
                      x: 0,
                      y: 0,
                      width: l,
                      height: a,
                      id: t.maskNames.aboveThreshold,
                    })
                    .elem('rect', {
                      x: 0,
                      y: 0,
                      width: l,
                      height: o,
                      fill: 'white',
                    }),
                    h
                      .elem('mask', {
                        x: 0,
                        y: 0,
                        width: l,
                        height: a,
                        id: t.maskNames.belowThreshold,
                      })
                      .elem('rect', {
                        x: 0,
                        y: o,
                        width: l,
                        height: a - o,
                        fill: 'white',
                      });
                }));
            }
          );
        });
    })((window, document, e)),
    e.plugins.ctThreshold
  );
});
