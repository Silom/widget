jest.dontMock('../../constants/WidgetConstants')
jest.dontMock('../WidgetStore')
jest.dontMock('object-assign')

describe('WidgetStore', function() {

  var WidgetConstants = require('../../constants/WidgetConstants')
  var AppDispatcher
  var WidgetStore
  var callback

  // mock actions
  var actionWidgetCreate = {
    actionType: WidgetConstants.WIDGET_CREATE,
    payload: {meta: '<h1>Test</h1>', feature: {}}
  }
  var actionWidgetDestroy = {
    actionType: WidgetConstants.WIDGET_DESTROY,
    id: 'replace me in test'
  }
  var actionWidgetUpdate = {
    actionType: WidgetConstants.WIDGET_UPDATE,
    payload: 'replace me in test'
  }

  beforeEach(function() {
    AppDispatcher = require('../../dispatcher/AppDispatcher')
    WidgetStore = require('../WidgetStore')
    callback = AppDispatcher.register.mock.calls[0][0]
  })

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1)
  })

  it('should initialize', function() {
    var all = WidgetStore.getAll()
    expect(all).toBeDefined()
  })

  it('creates a widget', function() {
    callback(actionWidgetCreate)
    var all = WidgetStore.getAll()
    var keys = Object.keys(all)
    expect(all[keys[0]].meta).toEqual('<h1>Test</h1>')
  })

  it('update a widget', function() {
    callback(actionWidgetCreate)
    var all = WidgetStore.getAll()
    var keys = Object.keys(all)
    keys[0].meta = '<h1>Test2</h1>'
    actionWidgetUpdate.payload = keys[0]
    expect(all[keys[0]].meta).toEqual('<h1>Test2</h1>')
  })

  it('destroy item', function() {
    callback(actionWidgetCreate)
    var all = WidgetStore.getAll()
    var keys = Object.keys(all)
    actionWidgetDestroy.id = keys[0]._id
    callback(actionWidgetDestroy)
    expect(all[keys[0]]).toBeUndefined()
  })

  // register
})
