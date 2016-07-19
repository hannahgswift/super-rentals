export default Ember.Object.extend({
  foo: 'bar',
  other: 'no',
  doSomething: Ember.observer('foo', function() {
    this.set('other', 'yes');
  })
});
