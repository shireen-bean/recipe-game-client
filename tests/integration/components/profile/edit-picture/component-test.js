import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('profile/edit-picture', 'Integration | Component | profile/edit picture', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{profile/edit-picture}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#profile/edit-picture}}
      template block text
    {{/profile/edit-picture}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
