// Minimal stub for demo; replace with real backend integration later
export const ContactMessage = {
  async create(payload) {
    // In a real app, send to an API. For now, log to console.
    console.log('ContactMessage.create', payload)
    return { id: Date.now(), ...payload }
  }
}
