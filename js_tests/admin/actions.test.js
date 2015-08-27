/* global module, test */
/* eslint strict: 0 */

module('admin.actions', {
    beforeEach: function() {
        // Number of results shown on page
        /* eslint-disable */
        window._actions_icnt = '100';
        /* eslint-enable */

        var $ = django.jQuery;
        $('#qunit-fixture').append($('#result-table').text());

        $('tr input.action-select').actions();
    }
});

test('check', function(assert) {
    var $ = django.jQuery;
    assert.notOk($('.action-select').is(':checked'));
    $('#action-toggle').click();
    assert.ok($('.action-select').is(':checked'));
});
