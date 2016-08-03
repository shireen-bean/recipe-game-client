import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cook/cook-start', 'Integration | Component | cook/cook start', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cook/cook-start}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cook/cook-start}}
      template block text
    {{/cook/cook-start}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
