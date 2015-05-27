'use strict';

window.Famous = require('famous');
var test = require('tape');
var BEST = require('../../lib/index');
var DataStore = require('../../lib/data-store/data-store');

test('----- BEST', function(t) {
    t.plan(1);

    t.test('exports', function(st) {
        st.plan(4);
        st.ok(BEST, 'BEST exports');
        st.ok(DataStore, 'DataStore exports');
        st.ok(BEST.register && BEST.execute && BEST.message && BEST.deploy, 'BEST exports register/execture/message/deploy');
        st.ok(BEST.register === BEST.scene && BEST.register === BEST.module && BEST.register === BEST.component, 'BEST aliases `scene`/`module`/`component` to `register`.');
    });
});