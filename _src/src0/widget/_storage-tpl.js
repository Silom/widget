module.exports = {
  // Glyph {} | null (title fallback)
  glyph: {
    close: 'fa-times',
    options: 'fa-cog'
  },

  // those are the defaults
  actions: {
    // Comes in
    close: true,
    persist: true,
    setOrder: true,// simple form for drag
    // maybe as well
    animations: true,// for all kind of stuff, maybe even break it down to every single animation
    drag: true
  }
}
